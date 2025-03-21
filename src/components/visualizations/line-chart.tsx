import React from 'react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface DataPoint {
  name: string;
  [key: string]: string | number;
}

interface LineChartProps {
  data: DataPoint[];
  lines: {
    dataKey: string;
    color: string;
    name: string;
  }[];
  xAxisDataKey: string;
  title: string;
  xLabel?: string;
  yLabel?: string;
}

export function LineChart({ data, lines, xAxisDataKey, title, xLabel, yLabel }: LineChartProps) {
  return (
    <div className="h-full">
      <h3 className="text-lg font-semibold mb-4 text-text-primary">{title}</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis 
              dataKey={xAxisDataKey} 
              tick={{ fill: '#A0A0A0' }}
              label={xLabel ? { value: xLabel, position: 'insideBottom', offset: -10, fill: '#A0A0A0' } : undefined}
            />
            <YAxis 
              tick={{ fill: '#A0A0A0' }}
              label={yLabel ? { value: yLabel, angle: -90, position: 'insideLeft', offset: 10, fill: '#A0A0A0' } : undefined}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#2A2A2A', 
                border: '1px solid #444',
                borderRadius: '4px',
              }} 
              itemStyle={{ color: '#F8F8F8' }}
            />
            <Legend wrapperStyle={{ color: '#A0A0A0' }} />
            {lines.map((line, index) => (
              <Line
                key={index}
                type="monotone"
                dataKey={line.dataKey}
                name={line.name}
                stroke={line.color}
                activeDot={{ r: 8 }}
                strokeWidth={2}
              />
            ))}
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}