import React from 'react';

interface GlassOverlayProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'medium' | 'heavy';
}

export const GlassOverlay: React.FC<GlassOverlayProps> = ({ 
  children, 
  className = '',
  variant = 'medium' 
}) => {

  return (
    <div
      className={`
        glass-overlay
        glass-overlay--${variant}
        layer-glass
        relative
        rounded-xl sm:rounded-2xl lg:rounded-3xl
        border
        shadow-lg sm:shadow-xl lg:shadow-2xl
        shadow-black/30 sm:shadow-black/40 lg:shadow-black/50
        will-change-transform
        mx-2 sm:mx-0
        ${className}
      `}
      style={{
        boxShadow: `
          0 4px 16px rgba(0, 0, 0, 0.2),
          0 8px 32px rgba(0, 0, 0, 0.15),
          inset 0 1px 0 rgba(255, 255, 255, 0.1),
          inset 0 -1px 0 rgba(255, 255, 255, 0.05)
        `
      }}
    >
      {/* Glass shine effect */}
      <div
        className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl opacity-20 sm:opacity-25 lg:opacity-30 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%, rgba(255, 255, 255, 0.05) 100%)'
        }}
      />
      
      {/* Content wrapper */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassOverlay;