// TopTopicsPieChart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const TopTopicsPieChart = ({ data }) => {
  const chartRef = useRef(null);
  let topicCounts={}
  useEffect(() => {
    if (!chartRef.current) {
      const ctx = document.getElementById('topicsPieChart').getContext('2d');
      const topicData = data.map((event) => event.topic);
      topicCounts = topicData.reduce((acc, topic) => ((acc[topic] = (acc[topic] || 0) + 1), acc), {});
      console.log(topicCounts,"topicsCount")
      chartRef.current = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: Object.keys(topicCounts),
          datasets: [
            {
              // label: 'Top topics',
              data: Object.values(topicCounts),
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
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
    }

    if (chartRef.current) {
      chartRef.current.data.labels = Object.keys(topicCounts);
      chartRef.current.data.datasets[0].data = Object.values(topicCounts);
      chartRef.current.update();
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, [data,topicCounts]);

  return <canvas id="topicsPieChart" width="300" height="300"></canvas>;
};

export default TopTopicsPieChart;
