// IntensityComparisonChart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const IntensityComparisonChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Create chart when the component mounts
    if (!chartRef.current) {
      const ctx = document.getElementById('intensityChart').getContext('2d');
      chartRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.map((item) => item.topic),
          datasets: [
            {
              label: 'Intensity Comparison',
              data: data.map((item) => item.intensity),
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
      });
    }

    // Update chart data when the data prop changes
    if (chartRef.current) {
      chartRef.current.data.labels = data.map((item) => item.topic);
      chartRef.current.data.datasets[0].data = data.map((item) => item.intensity);
      chartRef.current.update();
    }

    // Destroy the chart when the component unmounts
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, [data]);

  return <canvas id="intensityChart" width="400" height="300"></canvas>;
};

export default IntensityComparisonChart;
