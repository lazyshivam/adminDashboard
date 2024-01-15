// RelevanceDistribution.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const RelevanceDistribution = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) {
      const ctx = document.getElementById('relevanceChart').getContext('2d');
      chartRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: "This label can be changed ",
          datasets: [
            {
              label: 'Relevance Distribution',
              data: data.map((item) => item.relevance),
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: 'linear',
              position: 'bottom',
            },
          },
        },
      });
    }

    if (chartRef.current) {
      chartRef.current.data.labels = data.map((item) => item.relevance);
      chartRef.current.data.datasets[0].data = data.map((item) => item.relevance);
      chartRef.current.update();
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, [data]);

  return <canvas id="relevanceChart" width="400" height="300"></canvas>;
};

export default RelevanceDistribution;
