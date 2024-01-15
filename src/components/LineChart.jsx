import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ data }) => {
  // Add an incremental index as the x-axis
  const indexedData = data.map((entry, index) => ({ ...entry, index }));

  const chartData = {
    labels: indexedData.map(entry => entry.index),
    datasets: [
      {
        label: 'Intensity',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        fill: false,
        data: indexedData.map(entry => entry.intensity),
      },
      {
        label: 'Likelihood',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false,
        data: indexedData.map(entry => entry.likelihood),
      },
      {
        label: 'Relevance',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        fill: false,
        data: indexedData.map(entry => entry.relevance),
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'Index',
        },
      },
    },
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Trends Over Time</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
