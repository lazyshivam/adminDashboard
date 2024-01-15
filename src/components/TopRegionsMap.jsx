// TopRegionsMap.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const TopRegionsMap = ({ data }) => {
  const chartRef = useRef(null);
 let regionCounts={}
  useEffect(() => {
    if (!chartRef.current) {
      const ctx = document.getElementById('regionsMapChart').getContext('2d');
      const regionData = data.map((event) => event.region);
       regionCounts = regionData.reduce((acc, region) => ((acc[region] = (acc[region] || 0) + 1), acc), {});

      chartRef.current = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: Object.keys(regionCounts),
          datasets: [
            {
              data: Object.values(regionCounts),
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
        
      });
    }

    if (chartRef.current) {
      chartRef.current.data.labels = Object.keys(regionCounts);
      chartRef.current.data.datasets[0].data = Object.values(regionCounts);
      chartRef.current.update();
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, [data]);

  return <canvas id="regionsMapChart" width="400" height="300"></canvas>;
};

export default TopRegionsMap;
