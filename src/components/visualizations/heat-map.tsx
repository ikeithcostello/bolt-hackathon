import React from 'react';
import { motion } from 'framer-motion';

interface HeatMapCell {
  value: number; // 0-10 scale
  x: number;
  y: number;
}

interface HeatMapProps {
  data: HeatMapCell[];
  title: string;
  rows: number;
  cols: number;
  xLabel?: string;
  yLabel?: string;
}

export function HeatMap({ data, title, rows, cols, xLabel, yLabel }: HeatMapProps) {
  const getColor = (value: number) => {
    // Scale from 0-10 to 0-1
    const normalizedValue = value / 10;
    
    // Create a blue scale from light to dark
    const r = Math.round(220 * (1 - normalizedValue));
    const g = Math.round(220 * (1 - normalizedValue));
    const b = Math.round(255);
    
    return `rgb(${r}, ${g}, ${b})`;
  };

  const getOpacity = (value: number) => {
    // Scale from 0-10 to 0.1-1
    return 0.1 + (value / 10) * 0.9;
  };

  const getCellData = (x: number, y: number) => {
    return data.find(cell => cell.x === x && cell.y === y) || { value: 0, x, y };
  };

  const grid = Array.from({ length: rows }, (_, y) => 
    Array.from({ length: cols }, (_, x) => getCellData(x, y))
  );

  return (
    <div className="h-full">
      <h3 className="text-lg font-semibold mb-4 text-text-primary">{title}</h3>
      <div className="grid grid-cols-[auto_1fr] gap-2">
        {yLabel && (
          <div className="flex items-center justify-center">
            <span className="text-text-secondary text-sm transform -rotate-90 whitespace-nowrap">{yLabel}</span>
          </div>
        )}
        <div>
          <div className="grid" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)` }}>
            {grid.map((row, y) => 
              row.map((cell, x) => (
                <motion.div
                  key={`${x}-${y}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: getOpacity(cell.value) }}
                  transition={{ duration: 0.5, delay: (x + y) * 0.05 }}
                  style={{ 
                    backgroundColor: getColor(cell.value),
                    width: '100%',
                    height: '40px',
                  }}
                  className="border border-gray-800"
                  title={`Value: ${cell.value}`}
                />
              ))
            )}
          </div>
          {xLabel && (
            <div className="text-text-secondary text-sm text-center mt-2">{xLabel}</div>
          )}
        </div>
      </div>
      <div className="flex justify-end mt-4 space-x-4">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-100 mr-1"></div>
          <span className="text-xs text-text-secondary">Low</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-500 mr-1"></div>
          <span className="text-xs text-text-secondary">Medium</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-900 mr-1"></div>
          <span className="text-xs text-text-secondary">High</span>
        </div>
      </div>
    </div>
  );
}