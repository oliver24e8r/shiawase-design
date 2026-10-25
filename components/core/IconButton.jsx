import React from 'react';
import { Icon } from './Icon.jsx';
export function IconButton({ icon = 'arrow-right', variant = 'coral', size = 30, label, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  const v = {
    coral: { background: hover ? 'var(--accent-hover)' : 'var(--accent)', color: '#fff', boxShadow: 'var(--shadow-cta)' },
    ghost: { background: hover ? 'var(--mint-50)' : 'transparent', color: 'var(--fg-1)' },
  }[variant];
  return (
    <button aria-label={label} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ width: size, height: size, borderRadius: 999, border: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: 0, transition: 'background var(--dur-fast)', ...v, ...style }}>
      <Icon name={icon} size={Math.round(size * (variant === 'ghost' ? 0.75 : 0.5))} strokeWidth={variant === 'ghost' ? 1.4 : 1.8} />
    </button>
  );
}
