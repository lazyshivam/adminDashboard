// SimpleMap.js
import React, { useEffect, useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker, Annotation } from 'react-simple-maps';
import geoJson from '../GeoJson/countries.json'

const MapChart = ({ data }) => {
  const [countryCoordinates, setCountryCoordinates] = useState({});

  useEffect(() => {
    const fetchCoordinates = async () => {
      const coordinates = {};
      for (const entry of data) {
        const country = entry.country;
        if (!coordinates[country]) {
          const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
          const countryData = await response.json();
          const [lng, lat] = countryData[0]?.latlng || [0, 0];
          coordinates[country] = { lat, lng };
        }
      }
      setCountryCoordinates(coordinates);
    };

    fetchCoordinates();
  }, [data]);
  
  console.log(geoJson, "geoJson")
  return (
    <ComposableMap   style={{ width: '100%', height: 'auto' }}>
      <Geographies geography={geoJson}>
        {({ geographies }) =>
          geographies.map((geo, index) => (<>
         
            <Geography
              key={index}
              
              geography={geo}
              style={{
                default: {
                  fill: 'lightblue',
                  outline: 'none',
                },
                hover: {
                  fill: 'blue',
                  outline: 'none',
                },
                pressed: {
                  fill: 'blue',
                  outline: 'none',
                },
              }}
            />
           {/* { console.log(geo,"mygeo")} */}
             </>
            
          ))
        }
      </Geographies>

      {data.map((entry, index) => (
        <Marker key={index} coordinates={[countryCoordinates[entry.country]?.lng || 0, countryCoordinates[entry.country]?.lat || 0]}>
          <text x="-12" y="15" style={{ fontSize: '12px', fill: 'white' }}>
            {entry.sector}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
