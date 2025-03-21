import { cn } from '../../lib/utils';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      className,
      leftIcon,
      rightIcon,
      isLoading = false,
      ...props
    },
    ref
  ) => {
    const variantClasses = {
      primary: 'bg-accent-blue text-white hover:bg-blue-600 focus:ring-blue-500',
      secondary: 'bg-gray-700 text-white hover:bg-gray-800 focus:ring-gray-500',
      outline: 'bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-800 focus:ring-gray-500',
      danger: 'bg-accent-red text-white hover:bg-red-600 focus:ring-red-500',
      ghost: 'bg-transparent text-gray-300 hover:bg-gray-800 hover:text-white focus:ring-gray-500',
    };

    const sizeClasses = {
      sm: 'px-2 py-1 text-sm',
      md: 'px-4 py-2',
      lg: 'px-6 py-3 text-lg',
    };

    return (
      <button
        className={cn(
          'rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors',
          variantClasses[variant],
          sizeClasses[size],
          isLoading && 'opacity-70 cursor-not-allowed',
          className
        )}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        <div className="flex items-center justify-center space-x-2">
          {isLoading && (
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
          {leftIcon && !isLoading && <span>{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span>{rightIcon}</span>}
        </div>
      </button>
    );
  }
);

Button.displayName = 'Button';