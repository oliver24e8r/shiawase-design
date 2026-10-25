import React from 'react';
export function SectionHeading({ eyebrow, title, lead, align = 'center', rule = 'dash', size = 'md', style }) {
  const center = align === 'center';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: center ? 'center' : 'flex-start', textAlign: center ? 'center' : 'left', gap: 10, ...style }}>
      {eyebrow && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'var(--font-latin)', fontWeight: 500, fontSize: 'var(--fs-eyebrow)', letterSpacing: 'var(--tracking-eyebrow)', color: 'var(--fg-1)', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
          {rule === 'lines' && center && <span style={{ width: 28, height: 1, background: 'var(--ink-300)' }} />}
          <span>{eyebrow}</span>
          {rule === 'lines' && <span style={{ width: center ? 28 : 56, height: 1, background: 'var(--ink-300)' }} />}
        </div>
      )}
      <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: size === 'lg' ? 'var(--fs-h1)' : size === 'sm' ? 18 : 'var(--fs-h2)', lineHeight: 'var(--lh-tight)', letterSpacing: size === 'sm' ? '0.06em' : 'var(--tracking-heading)', color: 'var(--text-heading)', textWrap: 'pretty' }}>{title}</h2>
      {rule === 'dash' && <span style={{ width: 22, height: 2, borderRadius: 2, background: 'var(--accent)' }} />}
      {lead && <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--fs-small)', letterSpacing: 'var(--tracking-body)', color: 'var(--text-body)' }}>{lead}</p>}
    </div>
  );
}
