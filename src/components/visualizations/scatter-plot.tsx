import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis } from 'recharts';

interface DataPoint {
  x: number;
  y: number;
  z: number;
  name: string;
}

interface ScatterPlotProps {
  data: DataPoint[];
  xLabel: string;
  yLabel: string;
  title: string;
}

export function ScatterPlot({ data, xLabel, yLabel, title }: ScatterPlotProps) {
  return (
    <div className="h-full w-full">
      <h3 className="text-lg font-semibold mb-4 text-text-primary">{title}</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis 
              type="number" 
              dataKey="x" 
              name={xLabel} 
              domain={[0, 10]} 
              label={{ value: xLabel, position: 'insideBottom', offset: -10, fill: '#A0A0A0' }} 
              tick={{ fill: '#A0A0A0' }}
            />
            <YAxis 
              type="number" 
              dataKey="y" 
              name={yLabel} 
              domain={[0, 10]} 
              label={{ value: yLabel, angle: -90, position: 'insideLeft', offset: 10, fill: '#A0A0A0' }} 
              tick={{ fill: '#A0A0A0' }}
            />
            <ZAxis type="number" dataKey="z" range={[50, 500]} name="Size" />
            <Tooltip 
              cursor={{ strokeDasharray: '3 3' }} 
              contentStyle={{ backgroundColor: '#2A2A2A', border: '1px solid #444', borderRadius: '4px' }}
              itemStyle={{ color: '#F8F8F8' }}
              formatter={(value: number) => [value.toFixed(1), '']}
              labelFormatter={(name) => `Project: ${name}`}
            />
            <Scatter name="Projects" data={data} fill="#3B82F6" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}