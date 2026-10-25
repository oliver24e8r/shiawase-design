import React from 'react';
function wavyPath(w, h, amp, wl, r) {
  if (w <= 0 || h <= 0) return '';
  const x0 = amp, y0 = amp, W = w - amp * 2, H = h - amp * 2;
  r = Math.min(r, W / 2, H / 2);
  const segs = [
    { len: W - 2 * r, f: t => [x0 + r + t, y0, 0, -1] },
    { len: Math.PI * r / 2, f: t => { const a = -Math.PI / 2 + t / r; return [x0 + W - r + r * Math.cos(a), y0 + r + r * Math.sin(a), Math.cos(a), Math.sin(a)]; } },
    { len: H - 2 * r, f: t => [x0 + W, y0 + r + t, 1, 0] },
    { len: Math.PI * r / 2, f: t => { const a = t / r; return [x0 + W - r + r * Math.cos(a), y0 + H - r + r * Math.sin(a), Math.cos(a), Math.sin(a)]; } },
    { len: W - 2 * r, f: t => [x0 + W - r - t, y0 + H, 0, 1] },
    { len: Math.PI * r / 2, f: t => { const a = Math.PI / 2 + t / r; return [x0 + r + r * Math.cos(a), y0 + H - r + r * Math.sin(a), Math.cos(a), Math.sin(a)]; } },
    { len: H - 2 * r, f: t => [x0, y0 + H - r - t, -1, 0] },
    { len: Math.PI * r / 2, f: t => { const a = Math.PI + t / r; return [x0 + r + r * Math.cos(a), y0 + r + r * Math.sin(a), Math.cos(a), Math.sin(a)]; } },
  ];
  const total = segs.reduce((s, g) => s + g.len, 0);
  const n = Math.max(2, Math.round(total / wl));
  const k = (2 * Math.PI * n) / total;
  const pts = []; let s = 0;
  for (const g of segs) {
    for (let t = 0; t < g.len; t += 4) {
      const [x, y, nx, ny] = g.f(t);
      const o = amp * Math.sin(k * (s + t));
      pts.push((x + nx * o).toFixed(1) + ' ' + (y + ny * o).toFixed(1));
    }
    s += g.len;
  }
  return 'M' + pts.join('L') + 'Z';
}
export function WaveFrame({ background = 'var(--surface-hero)', outline = 6, outlineColor = '#fff', amplitude = 5, wavelength = 90, radius = 26, shadow = true, children, style, innerStyle }) {
  const ref = React.useRef(null);
  const [size, setSize] = React.useState([0, 0]);
  React.useLayoutEffect(() => {
    const el = ref.current; if (!el) return;
    const measure = () => { const b = el.getBoundingClientRect(); setSize(s => (s[0] === b.width && s[1] === b.height ? s : [b.width, b.height])); };
    measure();
    const raf = requestAnimationFrame(measure);
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(measure) : null;
    if (ro) ro.observe(el);
    window.addEventListener('resize', measure);
    return () => { cancelAnimationFrame(raf); if (ro) ro.disconnect(); window.removeEventListener('resize', measure); };
  }, []);
  const [w, h] = size;
  const outer = wavyPath(w, h, amplitude, wavelength, radius);
  const inner = wavyPath(w - outline * 2, h - outline * 2, amplitude, wavelength, Math.max(4, radius - outline));
  return (
    <div ref={ref} style={{ position: 'relative', width: '100%', boxSizing: 'border-box', filter: shadow ? 'drop-shadow(0 10px 24px rgba(111,181,168,.22))' : undefined, ...style }}>
      <div style={{ position: 'absolute', inset: 0, background: outlineColor, clipPath: outer ? `path('${outer}')` : undefined, borderRadius: outer ? 0 : radius }} />
      <div style={{ position: 'absolute', inset: outline, background, clipPath: inner ? `path('${inner}')` : undefined, borderRadius: inner ? 0 : radius, overflow: 'hidden', ...innerStyle }}>
        {children}
      </div>
      <div style={{ visibility: 'hidden' }} />
    </div>
  );
}
