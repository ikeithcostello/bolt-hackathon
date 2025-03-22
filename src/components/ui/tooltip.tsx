import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

interface TooltipProps {
  children: React.ReactNode;
}

const TooltipContext = React.createContext<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  content: React.ReactNode;
  setContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
}>({
  open: false,
  setOpen: () => {},
  content: null,
  setContent: () => {},
});

export function TooltipProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<React.ReactNode>(null);

  return (
    <TooltipContext.Provider value={{ open, setOpen, content, setContent }}>
      {children}
    </TooltipContext.Provider>
  );
}

interface TooltipTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

export function TooltipTrigger({ children, asChild = false }: TooltipTriggerProps) {
  const { setOpen } = React.useContext(TooltipContext);
  
  const handleMouseEnter = () => {
    setOpen(true);
  };
  
  const handleMouseLeave = () => {
    setOpen(false);
  };
  
  const handleFocus = () => {
    setOpen(true);
  };
  
  const handleBlur = () => {
    setOpen(false);
  };

  if (asChild) {
    return React.cloneElement(children as React.ReactElement, {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onFocus: handleFocus,
      onBlur: handleBlur,
    });
  }

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {children}
    </span>
  );
}

interface TooltipContentProps {
  children: React.ReactNode;
  className?: string;
  sideOffset?: number;
}

export function TooltipContent({ 
  children, 
  className,
}: TooltipContentProps) {
  const { open } = React.useContext(TooltipContext);
  
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ duration: 0.15 }}
          className={cn(
            'absolute z-50 px-3 py-2 text-sm bg-gray-800 text-gray-100 rounded-md shadow-md',
            'top-full left-1/2 transform -translate-x-1/2 mt-1',
            className
          )}
        >
          <div className="relative">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Tooltip({ children }: TooltipProps) {
  return (
    <span className="relative inline-block">
      {children}
    </span>
  );
} 