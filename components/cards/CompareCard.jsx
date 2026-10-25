import React from 'react';
import { IconButton } from '../core/IconButton.jsx';
import { Icon } from '../core/Icon.jsx';
export function CompareCard({ image, title, body, layout = 'feature', onClick }) {
  const [hover, setHover] = React.useState(false);
  if (layout === 'row') {
    return (
      <div onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{ display: 'grid', gridTemplateColumns: '150px minmax(0,1fr) 22px', alignItems: 'center', gap: 14, background: 'var(--surface-card)', borderRadius: 'var(--radius-md)', padding: '4px 14px 4px 4px', boxShadow: 'var(--shadow-soft)', cursor: 'pointer' }}>
        <img src={image} alt="" style={{ width: 150, height: 58, objectFit: 'cover', display: 'block', borderRadius: 10 }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, letterSpacing: '0.08em', color: 'var(--fg-1)' }}>{title}</div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.05em', color: 'var(--text-body)' }}>{body}</div>
        </div>
        <Icon name="chevron-right" size={18} color="var(--fg-1)" />
      </div>
    );
  }
  return (
    <div onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ position: 'relative', display: 'grid', gridTemplateColumns: '120px minmax(0,1fr)', gap: 22, alignItems: 'center', padding: '20px 56px 20px 20px', cursor: 'pointer' }}>
      <img src={image} alt="" style={{ width: 120, height: 110, objectFit: 'contain', display: 'block', mixBlendMode: 'multiply' }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, letterSpacing: '0.1em', color: 'var(--fg-1)' }}>{title}</div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, lineHeight: 1.85, letterSpacing: '0.06em', color: 'var(--text-body)' }}>{body}</div>
      </div>
      <IconButton icon="arrow-right" size={26} style={{ position: 'absolute', right: 18, bottom: 18, transform: hover ? 'translateX(2px)' : 'none', transition: 'transform var(--dur-base) var(--ease-soft)' }} />
    </div>
  );
}
