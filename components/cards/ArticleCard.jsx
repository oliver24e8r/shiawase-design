import React from 'react';
import { WaveFrame } from '../core/WaveFrame.jsx';
import { Button } from '../core/Button.jsx';
import { Tag } from '../core/Tag.jsx';
import { Icon } from '../core/Icon.jsx';
export function ArticleCard({ image, category, date, title, excerpt, layout = 'vertical', onClick }) {
  const [hover, setHover] = React.useState(false);
  const img = <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transform: hover ? 'scale(1.03)' : 'none', transition: 'transform 600ms var(--ease-soft)' }} />;
  const titleS = { fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.06em', color: 'var(--fg-1)', lineHeight: 1.55, whiteSpace: 'pre-line' };
  if (layout === 'horizontal') {
    return (
      <div onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,1.3fr) 22px', alignItems: 'center', gap: 16, background: 'rgba(255,255,255,.85)', borderRadius: 'var(--radius-sm)', paddingRight: 14, overflow: 'hidden', boxShadow: 'var(--shadow-soft)', cursor: 'pointer' }}>
        <div style={{ aspectRatio: '222/80', overflow: 'hidden', borderRadius: '8px 0 0 8px' }}>{img}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-start', padding: '8px 0' }}>
          {category && <Tag tone="peach">{category}</Tag>}
          <div style={{ ...titleS, fontSize: 14 }}>{title}</div>
          {excerpt && <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, lineHeight: 1.6, letterSpacing: '0.05em', color: 'var(--text-body)' }}>{excerpt}</div>}
        </div>
        <Icon name="chevron-right" size={18} color="var(--fg-1)" />
      </div>
    );
  }
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <WaveFrame outline={4} amplitude={4} wavelength={60} radius={12} shadow={false} style={{ width: '100%', aspectRatio: '230/117' }}>{img}</WaveFrame>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center', fontFamily: 'var(--font-body)', fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.06em', marginTop: 4 }}>
        {category && <Tag>{category}</Tag>}{category && date && <span>|</span>}{date && <span style={{ fontFamily: 'var(--font-latin)' }}>{date}</span>}
      </div>
      <div style={{ ...titleS, fontSize: 15 }}>{title}</div>
      {excerpt && <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-small)', lineHeight: 1.8, letterSpacing: '0.05em', color: 'var(--text-body)', whiteSpace: 'pre-line' }}>{excerpt}</div>}
      <div><Button variant="text" onClick={onClick}>記事を読む</Button></div>
    </div>
  );
}
