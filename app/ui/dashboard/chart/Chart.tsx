"use client"
import React from 'react'
import styles from "./chart.module.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    visit: 200,
    click: 670
  },
  {
    name: 'Tue',
    visit: 298,
    click: 778
  },
  {
    name: 'Wed',
    visit: 2000,
    click: 6720
  },
  {
    name: 'Thu',
    visit: 2567,
    click: 6702
  },
  {
    name: 'Fri',
    visit: 200,
    click: 67
  },
  {
    name: 'Sat',
    visit: 5,
    click: 43
  },
  {
    name: 'Sun',
    visit: 0,
    click: 6
  },
  
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Report</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{background: "#151c2c", border: "none"}}/>
          <Legend color='red' />
          <Line type="monotone" dataKey="visit" stroke="#8884d8" />
          <Line type="monotone" dataKey="click" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart