import React from 'react';
export function Tag({ children, tone = 'plain', style }) {
  const t = {
    plain: { background: 'transparent', color: 'var(--fg-3)', padding: 0 },
    peach: { background: 'var(--peach-100)', color: 'var(--coral-600)', padding: '2px 8px' },
    mint: { background: 'var(--mint-100)', color: 'var(--teal-700)', padding: '2px 8px' },
  }[tone];
  return <span style={{ display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.08em', lineHeight: 1.6, borderRadius: 4, ...t, ...style }}>{children}</span>;
}
