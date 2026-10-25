import React from 'react';
export function Logo({ layout = 'stacked', size = 20, src = 'assets/illustrations/logo-rings.png', showMark = true, style }) {
  const stacked = layout === 'stacked';
  return (
    <div style={{ display: 'inline-flex', flexDirection: stacked ? 'column' : 'row', alignItems: 'center', gap: stacked ? 2 : 10, ...style }}>
      {showMark && <img src={src} alt="" style={{ height: size * (stacked ? 1.7 : 1.5), width: 'auto', display: 'block' }} />}
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: size, letterSpacing: '0.08em', color: 'var(--fg-1)', whiteSpace: 'nowrap' }}>しあわせの選び方</span>
    </div>
  );
}
