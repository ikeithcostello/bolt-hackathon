import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { Info } from 'lucide-react';

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
  xAxisLabels?: string[];
  yAxisLabels?: string[];
}

export function HeatMap({ 
  data, 
  title, 
  rows, 
  cols, 
  xLabel, 
  yLabel,
  xAxisLabels: customXLabels,
  yAxisLabels: customYLabels
}: HeatMapProps) {
  // Improved color scale function using a red-to-blue gradient (heat map style)
  const getColor = (value: number) => {
    // Ensure value is within 0-10 range
    const constrainedValue = Math.max(0, Math.min(10, value));
    const normalizedValue = constrainedValue / 10;
    
    // Create a color scale from blue (cold) to red (hot)
    if (normalizedValue < 0.2) {
      // Deep blue to lighter blue (0-20%)
      const intensity = normalizedValue / 0.2;
      return `rgb(0, 0, ${Math.round(150 + 105 * intensity)})`;
    } else if (normalizedValue < 0.4) {
      // Blue to cyan (20-40%)
      const intensity = (normalizedValue - 0.2) / 0.2;
      return `rgb(0, ${Math.round(intensity * 255)}, 255)`;
    } else if (normalizedValue < 0.6) {
      // Cyan to green (40-60%)
      const intensity = (normalizedValue - 0.4) / 0.2;
      return `rgb(0, 255, ${Math.round(255 - intensity * 255)})`;
    } else if (normalizedValue < 0.8) {
      // Green to yellow (60-80%)
      const intensity = (normalizedValue - 0.6) / 0.2;
      return `rgb(${Math.round(intensity * 255)}, 255, 0)`;
    } else {
      // Yellow to red (80-100%)
      const intensity = (normalizedValue - 0.8) / 0.2;
      return `rgb(255, ${Math.round(255 - intensity * 255)}, 0)`;
    }
  };

  // Get text color based on cell color brightness
  const getTextColor = (value: number) => {
    // Darker text for bright backgrounds (yellow, light green)
    // Lighter text for dark backgrounds (blue, dark red)
    if (value >= 4 && value <= 8) {
      return "text-gray-900";
    }
    return "text-white";
  };

  // We don't need an opacity scale anymore since our colors provide enough contrast
  const getCellData = (x: number, y: number) => {
    return data.find(cell => cell.x === x && cell.y === y) || { value: 0, x, y };
  };

  const grid = Array.from({ length: rows }, (_, y) => 
    Array.from({ length: cols }, (_, x) => getCellData(x, y))
  );

  // Generate color stops for the legend
  const legendColors = [0, 2.5, 5, 7.5, 10].map(value => ({
    value: value,
    color: getColor(value)
  }));
  
  // Generate x-axis labels based on the number of columns or use custom labels
  const getXAxisLabels = () => {
    if (customXLabels && customXLabels.length === cols) {
      return customXLabels;
    }
    
    if (cols <= 6) {
      // If we have few columns, create meaningful short labels
      return ["AI/ML", "Web", "Mobile", "Tools", "Games", "IoT"].slice(0, cols);
    } else {
      // For more columns, return numbered labels
      return Array.from({ length: cols }, (_, i) => `${i+1}`);
    }
  };
  
  // Generate y-axis labels based on the number of rows or use custom labels
  const getYAxisLabels = () => {
    if (customYLabels && customYLabels.length === rows) {
      return customYLabels;
    }
    
    if (rows <= 6) {
      // If we have few rows, create meaningful short labels
      return ["Innovation", "Technical", "Design", "UX", "Impact", "Popularity"].slice(0, rows);
    } else {
      // For more rows, return lettered labels
      return Array.from({ length: rows }, (_, i) => String.fromCharCode(65 + i));
    }
  };

  // Parse xLabel and yLabel to extract category names for tooltips
  const parseAxisCategories = (label: string | undefined) => {
    if (!label) return [];
    
    const match = label.match(/\((.*?)\)/);
    if (match && match[1]) {
      return match[1].split(', ');
    }
    return [];
  };

  const xCategories = parseAxisCategories(xLabel);
  const yCategories = parseAxisCategories(yLabel);

  const xLabels = getXAxisLabels();
  const yLabels = getYAxisLabels();

  return (
    <div className="h-full">
      {title && <h3 className="text-lg font-semibold mb-4 text-text-primary">{title}</h3>}
      
      <div className="flex flex-col">
        {/* X-axis header with tooltip if available */}
        {xLabel && (
          <div className="flex justify-center mb-2">
            <h4 className="text-sm font-medium text-gray-300 flex items-center">
              <span>Column Categories</span>
              {xCategories.length > 0 && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="ml-1 text-gray-400 hover:text-gray-300">
                        <Info size={14} />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs max-w-xs">{xLabel}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </h4>
          </div>
        )}
        
        {/* X-axis labels (top) */}
        <div className="flex ml-16">
          {xLabels.map((label, i) => (
            <div key={`x-label-${i}`} className="flex-1 text-center">
              <span className="text-sm font-medium text-gray-200 px-1.5 py-0.5 rounded bg-gray-800/50">
                {label}
              </span>
            </div>
          ))}
        </div>
        
        <div className="flex mt-2">
          {/* Y-axis header with tooltip */}
          {yLabel && (
            <div className="w-16 mr-2">
              <div className="flex items-center h-full -rotate-90 origin-center transform-gpu">
                <h4 className="text-sm font-medium text-gray-300 whitespace-nowrap flex items-center">
                  <span>Row Categories</span>
                  {yCategories.length > 0 && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="ml-1 text-gray-400 hover:text-gray-300">
                            <Info size={14} />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-xs max-w-xs">{yLabel}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </h4>
              </div>
            </div>
          )}
          
          {/* Y-axis labels (left side) */}
          <div className="flex flex-col justify-around pr-2 w-14">
            {yLabels.map((label, i) => (
              <div key={`y-label-${i}`} className="text-sm font-medium text-gray-200 h-10 flex items-center justify-end">
                <span className="px-1.5 py-0.5 rounded bg-gray-800/50">
                  {label}
                </span>
              </div>
            ))}
          </div>
          
          {/* Main grid */}
          <div className="flex-1">
            <div className="grid" style={{ 
              gridTemplateColumns: `repeat(${cols}, 1fr)`, 
              gridTemplateRows: `repeat(${rows}, 1fr)`,
              gap: '3px' 
            }}>
              {grid.map((row, y) => 
                row.map((cell, x) => (
                  <motion.div
                    key={`${x}-${y}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: (x + y) * 0.02 }}
                    style={{ 
                      backgroundColor: getColor(cell.value),
                      width: '100%',
                      height: '40px',
                    }}
                    className={`relative border border-gray-800 flex items-center justify-center ${getTextColor(cell.value)}`}
                  >
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="text-sm font-medium cursor-help" style={{ textShadow: '0px 0px 3px rgba(0,0,0,0.5)' }}>
                            {cell.value.toFixed(1)}
                          </span>
                        </TooltipTrigger>
                        <TooltipContent className="z-50 bg-gray-800 text-white p-2 rounded shadow-lg">
                          <div className="text-xs font-medium">
                            <p className="mb-1"><strong>Value:</strong> {cell.value.toFixed(1)}</p>
                            <p className="mb-1"><strong>Column:</strong> {xLabels[cell.x]}</p>
                            <p className="mb-0"><strong>Row:</strong> {yLabels[cell.y]}</p>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Improved legend with gradient */}
      <div className="mt-8 pb-3">
        <p className="text-sm font-medium text-gray-300 mb-2">Score Intensity:</p>
        <div className="flex items-center">
          <div className="flex-grow h-6 rounded-md relative" style={{
            background: `linear-gradient(to right, ${legendColors.map(c => c.color).join(', ')})`,
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
          }}>
            {/* Legend markers */}
            {legendColors.map((color, i) => (
              <div 
                key={i} 
                className="absolute bottom-full pb-1"
                style={{ left: `${(color.value / 10) * 100}%`, transform: 'translateX(-50%)' }}
              >
                <div className="w-0.5 h-3 bg-gray-300 mb-1 mx-auto"></div>
                <span className="text-sm font-medium text-gray-300 whitespace-nowrap">
                  {color.value.toFixed(1)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}