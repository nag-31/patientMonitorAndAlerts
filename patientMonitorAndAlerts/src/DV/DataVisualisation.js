import React, { useState } from 'react';
import {
  Tooltip,
  Bar,
  BarChart,
  Line,
  Area,
  ComposedChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Scatter,
} from 'recharts';

const DataVisualization = ({ patient }) => {
  const { name, vitalSigns } = patient;

  const [visualizationSettings, setVisualizationSettings] = useState({
    chartType: 'BarChart', // Default chart type
  });

  const parseBloodPressure = (bpString) => {
    const [systolic, diastolic] = bpString.split('/');
    return {
      systolic: parseInt(systolic, 10),
      diastolic: parseInt(diastolic, 10),
    };
  };

  const data = [
    {
      name: 'Heart Rate',
      value: vitalSigns.heartRate,
    },
    {
      name: 'Systolic BP',
      value: parseBloodPressure(vitalSigns.bloodPressure).systolic,
    },
    {
      name: 'Diastolic BP',
      value: parseBloodPressure(vitalSigns.bloodPressure).diastolic,
    },
    {
      name: 'Temperature',
      value: vitalSigns.temprature,
    },
    {
      name: 'Respiratory Rate',
      value: vitalSigns.respiratoryRate,
    },
  ];

  const renderChart = () => {
    if (visualizationSettings.chartType === 'BarChart') {
      return (
        <BarChart data={data} width={500} height={400}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey='value' fill='#8883d8' />
        </BarChart>
      );
    } else if (visualizationSettings.chartType === 'ComposedChart') {
      return (
        <ComposedChart data={data} width={500} height={400}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="value" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="value" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="value" stroke="#ff7300" />
          <Scatter dataKey="value" fill="red" />
        </ComposedChart>
      );
    }
    // Add more cases for different chart types if needed
  };

  return (
    <div className='App'>
      <h1 style={{ color: 'gray' }}>
        Data Visualization for <strong style={{ color: 'black' }}>{name}</strong>
      </h1>

      {/* UI for visualization customization */}
      <div>
        <label>Chart Type:</label>
        <select
          value={visualizationSettings.chartType}
          onChange={(e) =>
            setVisualizationSettings({
              ...visualizationSettings,
              chartType: e.target.value,
            })
          }
        >
          <option value='BarChart'>Bar Chart</option>
          <option value='ComposedChart'>Composed Chart</option>
        </select>
      </div>

      <ResponsiveContainer width='100%' height={400}>
        {renderChart()}
      </ResponsiveContainer>
    </div>
  );
};

export default DataVisualization;
