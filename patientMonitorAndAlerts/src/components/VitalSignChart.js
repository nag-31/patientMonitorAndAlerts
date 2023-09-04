import React from 'react';
import { Line } from 'react-chartjs-2';

const VitalSignChart = ({ timestamps, data, vitalSign }) => {
  const chartData = {
    labels: timestamps,
    datasets: [
      {
        label: vitalSign,
        data,
        borderColor: 'blue',
        fill: false,
      },
    ],
  };

  return (
    <div className="container">
      <h1>Vital Sign Trends: {vitalSign}</h1>
      <Line data={chartData} />
    </div>
  );
};

export default VitalSignChart;
