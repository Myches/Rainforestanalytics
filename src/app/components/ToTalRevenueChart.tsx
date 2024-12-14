'use client'

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";


interface CustomizedLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  name: string;
}
const COLORS = ["#1e8e08", "#e08c39", "#9bf32a"];
const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    name,
  } : CustomizedLabelProps) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={12}
      >
        <tspan x={x} dy="-0.5em">{name}</tspan>
        <tspan x={x} dy="1.2em">{`${(percent * 100).toFixed(0)}%`}</tspan>
      </text>
    );
  };


const TotalRevenueChart = ({ data }: { data: { name: string; value: number }[] }) => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
      <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel} 
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((_ , index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
       
      </PieChart>
    </ResponsiveContainer>
  );
};

export default TotalRevenueChart;
