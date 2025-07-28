import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  variant = 'dark'
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const gradientId = `logo-gradient-${Math.random().toString(36).substr(2, 9)}`;
  const iconColor = variant === 'light' ? 'white' : 'white';

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="50%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.1"/>
          </filter>
        </defs>
        
        {/* Main background circle */}
        <circle 
          cx="20" 
          cy="20" 
          r="18" 
          fill={`url(#${gradientId})`} 
          filter="url(#shadow)"
        />
        
        {/* Bank building structure */}
        <rect x="10" y="15" width="20" height="2.5" fill={iconColor} rx="1.25"/>
        
        {/* Columns */}
        <rect x="12.5" y="18" width="2" height="8" fill={iconColor} rx="1"/>
        <rect x="16" y="18" width="2" height="8" fill={iconColor} rx="1"/>
        <rect x="19.5" y="18" width="2" height="8" fill={iconColor} rx="1"/>
        <rect x="23" y="18" width="2" height="8" fill={iconColor} rx="1"/>
        <rect x="26.5" y="18" width="2" height="8" fill={iconColor} rx="1"/>
        
        {/* Base */}
        <rect x="10" y="26" width="20" height="2.5" fill={iconColor} rx="1.25"/>
        
        {/* API connection indicators */}
        <circle cx="8" cy="10" r="2" fill={iconColor} opacity="0.9"/>
        <circle cx="32" cy="10" r="2" fill={iconColor} opacity="0.9"/>
        <circle cx="8" cy="30" r="2" fill={iconColor} opacity="0.9"/>
        <circle cx="32" cy="30" r="2" fill={iconColor} opacity="0.9"/>
        
        {/* Connection lines */}
        <line x1="10" y1="10" x2="14" y2="13" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/>
        <line x1="30" y1="10" x2="26" y2="13" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/>
        <line x1="10" y1="30" x2="14" y2="27" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/>
        <line x1="30" y1="30" x2="26" y2="27" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/>
        
        {/* Central API hub indicator */}
        <circle cx="20" cy="12" r="1.5" fill={iconColor} opacity="0.7"/>
      </svg>
    </div>
  );
};
