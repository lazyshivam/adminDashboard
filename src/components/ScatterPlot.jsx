import React from 'react';
import { Scatter } from 'react-chartjs-2';

const ScatterPlot = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: 'Correlation between Intensity, Likelihood, and Relevance',
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        data: data.map(entry => ({
          x: entry.intensity,
          y: entry.likelihood,
          r: entry.relevance * 5, // Adjust the radius as per your preference
        })),
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
      },
      y: {
        type: 'linear',
        position: 'left',
      },
    },
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Correlation between Intensity, Likelihood, and Relevance</h2>
      <Scatter data={chartData} options={options} />
    </div>
  );
};

export default ScatterPlot;
