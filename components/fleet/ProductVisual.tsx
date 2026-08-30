import React from 'react';

interface ProductVisualProps {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number; size?: number }>;
  tone: 'mint' | 'blue' | 'peach' | 'lavender' | 'sand' | 'sky';
}

export default function ProductVisual({ icon: Icon, tone }: ProductVisualProps) {
  return (
    <div className={`product-visual ${tone}`} aria-hidden="true">
      <div className="visual-grid" />
      <div className="visual-ring ring-one" />
      <div className="visual-ring ring-two" />
      <Icon className="visual-icon" strokeWidth={1.3} />
      <span className="visual-dot dot-one" />
      <span className="visual-dot dot-two" />
    </div>
  );
}
