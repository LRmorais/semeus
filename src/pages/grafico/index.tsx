import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'H1', T1: 4000, T2: 2400, T3: 2400 },
  { name: 'H2', T1: 3000, T2: 1398, T3: 2210 },
  { name: 'H3', T1: 2000, T2: 9800, T3: 2290 },
  { name: 'H4', T1: 2780, T2: 3908, T3: 2000 },
  { name: 'H5', T1: 1890, T2: 4800, T3: 2181 },
  { name: 'H6', T1: 2390, T2: 3800, T3: 2500 },
  { name: 'H7', T1: 3490, T2: 4300, T3: 2100 },
];

const LineChartExample = () => (
  <LineChart width={800} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="T1" stroke="#8884d8" activeDot={{ r: 8 }} />
    <Line type="monotone" dataKey="T2" stroke="#82ca9d" />
    <Line type="monotone" dataKey="T3" stroke="#aaaf0c" />
  </LineChart>
);

export default LineChartExample;
