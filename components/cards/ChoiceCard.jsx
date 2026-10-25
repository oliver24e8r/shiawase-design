import React from 'react';
import { WaveFrame } from '../core/WaveFrame.jsx';
import { Button } from '../core/Button.jsx';
import { Icon } from '../core/Icon.jsx';
export function ChoiceCard({ image, title, body, cta, layout = 'vertical', onClick }) {
  const [hover, setHover] = React.useState(false);
  const img = <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transform: hover ? 'scale(1.03)' : 'none', transition: 'transform 600ms var(--ease-soft)' }} />;
  if (layout === 'horizontal') {
    return (
      <div onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,1fr) 28px', alignItems: 'center', gap: 16, background: 'var(--surface-card)', borderRadius: 'var(--radius-md)', padding: 6, paddingRight: 16, boxShadow: 'var(--shadow-soft)', cursor: 'pointer' }}>
        <WaveFrame outline={0} amplitude={4} wavelength={60} radius={14} shadow={false} style={{ aspectRatio: '228/104' }}>{img}</WaveFrame>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--fs-h3)', letterSpacing: '0.08em', color: 'var(--fg-1)' }}>{title}</div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.75, letterSpacing: '0.06em', color: 'var(--text-body)' }}>{body}</div>
        </div>
        <Icon name="chevron-right" size={22} color="var(--fg-1)" style={{ transform: hover ? 'translateX(3px)' : 'none', transition: 'transform var(--dur-base) var(--ease-soft)' }} />
      </div>
    );
  }
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14 }}>
      <WaveFrame outline={4} amplitude={4} wavelength={60} radius={14} shadow={false} style={{ width: '100%', aspectRatio: '230/140' }}>{img}</WaveFrame>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--fs-h3)', letterSpacing: '0.08em', color: 'var(--fg-1)', marginTop: 4 }}>{title}</div>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-small)', lineHeight: 1.9, letterSpacing: '0.06em', color: 'var(--text-body)', whiteSpace: 'pre-line' }}>{body}</div>
      {cta && <Button variant="outline" onClick={onClick} style={{ marginTop: 4 }}>{cta}</Button>}
    </div>
  );
}
