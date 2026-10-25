import React from 'react';
const PATHS = {
  'arrow-right': ['M5 12h14','m12 5 7 7-7 7'],
  'chevron-right': ['m9 18 6-6-6-6'],
  'chevron-down': ['m6 9 6 6 6-6'],
  'plus': ['M5 12h14','M12 5v14'],
  'minus': ['M5 12h14'],
  'menu': ['M4 6h16','M4 12h16','M4 18h16'],
  'x': ['M18 6 6 18','m6 6 12 12'],
};
export function Icon({ name = 'arrow-right', size = 16, strokeWidth = 1.6, color = 'currentColor', style }) {
  const d = PATHS[name] || PATHS['arrow-right'];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, display: 'block', ...style }} aria-hidden="true">
      {d.map((p, i) => <path key={i} d={p} />)}
    </svg>
  );
}
