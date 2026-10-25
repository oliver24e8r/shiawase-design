import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function FaqItem({ question, answer, defaultOpen = false, marker = 'q', compact = false }) {
  const [open, setOpen] = React.useState(defaultOpen);
  const [hover, setHover] = React.useState(false);
  return (
    <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-card)', borderRadius: compact ? 10 : 12, overflow: 'hidden', transition: 'box-shadow var(--dur-fast)', boxShadow: hover ? 'var(--shadow-soft)' : 'none' }}>
      <button onClick={() => setOpen(o => !o)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} aria-expanded={open}
        style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: compact ? '8px 14px' : '11px 22px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-body)', fontSize: compact ? 12 : 12.5, letterSpacing: '0.06em', color: 'var(--fg-1)' }}>
        {marker === 'q' && <span style={{ fontFamily: 'var(--font-latin)', fontWeight: 600, color: 'var(--fg-1)' }}>Q.</span>}
        <span style={{ flex: 1 }}>{question}</span>
        <Icon name={marker === 'q' ? (open ? 'minus' : 'plus') : 'chevron-down'} size={16} color="var(--fg-1)" style={{ transform: marker !== 'q' && open ? 'rotate(180deg)' : 'none', transition: 'transform var(--dur-base) var(--ease-soft)' }} />
      </button>
      {open && (
        <div style={{ padding: compact ? '0 14px 12px' : '0 22px 16px 54px', fontFamily: 'var(--font-body)', fontSize: 12, lineHeight: 1.9, letterSpacing: '0.05em', color: 'var(--text-body)' }}>{answer}</div>
      )}
    </div>
  );
}
