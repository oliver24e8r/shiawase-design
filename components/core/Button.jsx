import React from 'react';
import { Icon } from './Icon.jsx';
export function Button({ variant = 'primary', size = 'md', icon = 'arrow-right', children, disabled, onClick, href, fullWidth, style }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const lg = size === 'lg';
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: lg ? 18 : 12,
    fontFamily: 'var(--font-display)', fontWeight: 500, letterSpacing: '0.1em', textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1, border: 'none',
    transition: 'background var(--dur-fast) var(--ease-soft), transform var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast)',
    transform: press && !disabled ? 'translateY(1px) scale(0.99)' : 'none', width: fullWidth ? '100%' : undefined, boxSizing: 'border-box',
  };
  const v = {
    primary: { background: hover && !disabled ? 'var(--accent-hover)' : 'var(--accent)', color: '#fff', borderRadius: 999, padding: lg ? '18px 34px' : '11px 22px', fontSize: lg ? 15 : 13, boxShadow: 'var(--shadow-cta), inset 0 0 0 2px rgba(255,255,255,.35)' },
    outline: { background: hover && !disabled ? 'var(--accent-soft)' : 'var(--surface-card)', color: 'var(--accent)', borderRadius: 999, padding: lg ? '14px 30px' : '9px 20px', fontSize: lg ? 14 : 12, boxShadow: 'inset 0 0 0 1px var(--coral-300)' },
    text: { background: 'transparent', color: 'var(--accent)', padding: '4px 0', fontSize: 12, borderRadius: 0, textDecoration: 'underline', textUnderlineOffset: 4, gap: 10 },
    underline: { background: 'transparent', color: 'var(--fg-1)', padding: '4px 2px 6px', fontSize: 13, borderRadius: 0, borderBottom: '1px solid var(--fg-1)', gap: 14 },
  }[variant];
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} onClick={disabled ? undefined : onClick} disabled={Tag === 'button' ? disabled : undefined}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      style={{ ...base, ...v, ...style }}>
      <span>{children}</span>
      {icon && <Icon name={icon} size={lg ? 18 : 14} style={{ transform: hover && !disabled ? 'translateX(3px)' : 'none', transition: 'transform var(--dur-base) var(--ease-soft)' }} />}
    </Tag>
  );
}
