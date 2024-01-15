import React from 'react';

const OverviewSection = ({ data }) => {
  const totalRecords = data.length;
  const averageIntensity = calculateAverageIntensity(data);
  // const topicTrends = calculateTopicTrends(data);
  const mostCommonSector = findMostCommonSector(data);
  const mostDiscussedTopic = findMostDiscussedTopic(data);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      {/* Total Records Card */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-2">Total Records</h2>
        <p className="text-gray-600">{totalRecords}</p>
      </div>

      {/* Average Intensity Card */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-2">Average Intensity</h2>
        <div className="flex items-center">
          <div className="w-3/4 bg-gray-300 h-4 rounded-md overflow-hidden">
            <div
              className={`bg-green-500 h-full`}
              style={{ width: `${averageIntensity}%` }}
            />
          </div>
          <p className="ml-2 text-gray-600">{averageIntensity}%</p>
        </div>
      </div>


      {/* Most Common Sector Card */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-2">Most Common Sector</h2>
        <p className="text-gray-600">{mostCommonSector}</p>
      </div>

      {/* Most Discussed Topic Card */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-2">Most Discussed Topic</h2>
        <p className="text-gray-600">{mostDiscussedTopic}</p>
      </div>
    </div>
  );
};

const calculateAverageIntensity = (data) => {
  if (data.length === 0) return 0;

  const totalIntensity = data.reduce((sum, item) => sum + item.intensity, 0);
  return (totalIntensity / data.length).toFixed(2);
};



const findMostCommonSector = (data) => {
  const sectorCount = data.reduce((count, item) => {
    count[item.sector] = (count[item.sector] || 0) + 1;
    return count;
  }, {});

  const mostCommonSector = Object.entries(sectorCount).reduce((mostCommon, [sector, count]) => {
    return count > mostCommon.count ? { sector, count } : mostCommon;
  }, { sector: '', count: 0 });

  return mostCommonSector.sector;
};

const findMostDiscussedTopic = (data) => {
  // Implement logic to find the most discussed topic
  // Similar to finding the most common sector
  const topicCount = data.reduce((count, item) => {
    count[item.topic] = (count[item.topic] || 0) + 1;
    return count;
  }, {});

  const mostDiscussedTopic = Object.entries(topicCount).reduce((mostDiscussed, [topic, count]) => {
    return count > mostDiscussed.count ? { topic, count } : mostDiscussed;
  }, { topic: '', count: 0 });

  return mostDiscussedTopic.topic;
};

export default OverviewSection;
