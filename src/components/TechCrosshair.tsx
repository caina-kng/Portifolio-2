import React from 'react';

interface TechCornerProps {
  className?: string;
  size?: number;
  color?: string;
}

export const TechCorner: React.FC<TechCornerProps> = ({
  className = '',
  size = 8,
  color = '#E3AD12',
}) => {
  return (
    <div className={`relative pointer-events-none ${className}`}>
      {/* Top Left */}
      <span
        className="absolute top-0 left-0 border-t border-l opacity-60"
        style={{ width: size, height: size, borderColor: color }}
      />
      {/* Top Right */}
      <span
        className="absolute top-0 right-0 border-t border-r opacity-60"
        style={{ width: size, height: size, borderColor: color }}
      />
      {/* Bottom Left */}
      <span
        className="absolute bottom-0 left-0 border-b border-l opacity-60"
        style={{ width: size, height: size, borderColor: color }}
      />
      {/* Bottom Right */}
      <span
        className="absolute bottom-0 right-0 border-b border-r opacity-60"
        style={{ width: size, height: size, borderColor: color }}
      />
    </div>
  );
};

export const CrosshairDot: React.FC<{ label?: string; className?: string }> = ({
  label,
  className = '',
}) => {
  return (
    <div className={`inline-flex items-center gap-1.5 font-mono-tech text-[10px] tracking-widest text-[#84909D] ${className}`}>
      <span className="text-[#E3AD12]">+</span>
      {label && <span>{label}</span>}
    </div>
  );
};
