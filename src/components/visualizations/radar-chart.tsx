import React from 'react';
import {
  Radar,
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';

interface DataPoint {
  subject: string;
  [key: string]: string | number;
}

interface RadarChartProps {
  data: DataPoint[];
  dataKeys: {
    key: string;
    color: string;
    name: string;
  }[];
  title: string;
}

export function RadarChart({ data, dataKeys, title }: RadarChartProps) {
  return (
    <div className="h-full">
      <h3 className="text-lg font-semibold mb-4 text-text-primary">{title}</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsRadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid stroke="#444" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#A0A0A0' }} />
            <PolarRadiusAxis angle={30} domain={[0, 10]} tick={{ fill: '#A0A0A0' }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#2A2A2A', 
                border: '1px solid #444',
                borderRadius: '4px',
              }} 
              itemStyle={{ color: '#F8F8F8' }}
            />
            <Legend wrapperStyle={{ color: '#A0A0A0' }} />
            {dataKeys.map((entry, index) => (
              <Radar
                key={index}
                name={entry.name}
                dataKey={entry.key}
                stroke={entry.color}
                fill={entry.color}
                fillOpacity={0.3}
              />
            ))}
          </RechartsRadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}