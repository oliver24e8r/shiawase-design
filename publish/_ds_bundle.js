/* @ds-bundle: {"format":4,"namespace":"DesignSystem_82f53f","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"ArticleCard","sourcePath":"components/cards/ArticleCard.jsx"},{"name":"ChoiceCard","sourcePath":"components/cards/ChoiceCard.jsx"},{"name":"CompareCard","sourcePath":"components/cards/CompareCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"WaveFrame","sourcePath":"components/core/WaveFrame.jsx"},{"name":"FaqItem","sourcePath":"components/disclosure/FaqItem.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"7f21e4845a49","components/cards/ArticleCard.jsx":"300f60e4389c","components/cards/ChoiceCard.jsx":"aa8bf4bbaef6","components/cards/CompareCard.jsx":"8b4149fe0ad2","components/core/Button.jsx":"abb92744214f","components/core/Icon.jsx":"7fd83fac7aaf","components/core/IconButton.jsx":"00db0a8730cc","components/core/SectionHeading.jsx":"e350877ba891","components/core/Tag.jsx":"0a73759634fc","components/core/WaveFrame.jsx":"52ba981079c9","components/disclosure/FaqItem.jsx":"a04ee31e5c87","ui_kits/website/PcHome.jsx":"49e2b445eea3","ui_kits/website/SpHome.jsx":"7aed20611adc","ui_kits/website/data.js":"e9696e65320f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_82f53f = window.DesignSystem_82f53f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function Logo({
  layout = 'stacked',
  size = 20,
  src = 'assets/illustrations/logo-rings.png',
  showMark = true,
  style
}) {
  const stacked = layout === 'stacked';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: stacked ? 'column' : 'row',
      alignItems: 'center',
      gap: stacked ? 2 : 10,
      ...style
    }
  }, showMark && /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      height: size * (stacked ? 1.7 : 1.5),
      width: 'auto',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: size,
      letterSpacing: '0.08em',
      color: 'var(--fg-1)',
      whiteSpace: 'nowrap'
    }
  }, "\u3057\u3042\u308F\u305B\u306E\u9078\u3073\u65B9"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const PATHS = {
  'arrow-right': ['M5 12h14', 'm12 5 7 7-7 7'],
  'chevron-right': ['m9 18 6-6-6-6'],
  'chevron-down': ['m6 9 6 6 6-6'],
  'plus': ['M5 12h14', 'M12 5v14'],
  'minus': ['M5 12h14'],
  'menu': ['M4 6h16', 'M4 12h16', 'M4 18h16'],
  'x': ['M18 6 6 18', 'm6 6 12 12']
};
function Icon({
  name = 'arrow-right',
  size = 16,
  strokeWidth = 1.6,
  color = 'currentColor',
  style
}) {
  const d = PATHS[name] || PATHS['arrow-right'];
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flexShrink: 0,
      display: 'block',
      ...style
    },
    "aria-hidden": "true"
  }, d.map((p, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: p
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  icon = 'arrow-right',
  children,
  disabled,
  onClick,
  href,
  fullWidth,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const lg = size === 'lg';
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: lg ? 18 : 12,
    fontFamily: 'var(--font-display)',
    fontWeight: 500,
    letterSpacing: '0.1em',
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    border: 'none',
    transition: 'background var(--dur-fast) var(--ease-soft), transform var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast)',
    transform: press && !disabled ? 'translateY(1px) scale(0.99)' : 'none',
    width: fullWidth ? '100%' : undefined,
    boxSizing: 'border-box'
  };
  const v = {
    primary: {
      background: hover && !disabled ? 'var(--accent-hover)' : 'var(--accent)',
      color: '#fff',
      borderRadius: 999,
      padding: lg ? '18px 34px' : '11px 22px',
      fontSize: lg ? 15 : 13,
      boxShadow: 'var(--shadow-cta), inset 0 0 0 2px rgba(255,255,255,.35)'
    },
    outline: {
      background: hover && !disabled ? 'var(--accent-soft)' : 'var(--surface-card)',
      color: 'var(--accent)',
      borderRadius: 999,
      padding: lg ? '14px 30px' : '9px 20px',
      fontSize: lg ? 14 : 12,
      boxShadow: 'inset 0 0 0 1px var(--coral-300)'
    },
    text: {
      background: 'transparent',
      color: 'var(--accent)',
      padding: '4px 0',
      fontSize: 12,
      borderRadius: 0,
      textDecoration: 'underline',
      textUnderlineOffset: 4,
      gap: 10
    },
    underline: {
      background: 'transparent',
      color: 'var(--fg-1)',
      padding: '4px 2px 6px',
      fontSize: 13,
      borderRadius: 0,
      borderBottom: '1px solid var(--fg-1)',
      gap: 14
    }
  }[variant];
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...v,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", null, children), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: lg ? 18 : 14,
    style: {
      transform: hover && !disabled ? 'translateX(3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-soft)'
    }
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  icon = 'arrow-right',
  variant = 'coral',
  size = 30,
  label,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const v = {
    coral: {
      background: hover ? 'var(--accent-hover)' : 'var(--accent)',
      color: '#fff',
      boxShadow: 'var(--shadow-cta)'
    },
    ghost: {
      background: hover ? 'var(--mint-50)' : 'transparent',
      color: 'var(--fg-1)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      borderRadius: 999,
      border: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      padding: 0,
      transition: 'background var(--dur-fast)',
      ...v,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * (variant === 'ghost' ? 0.75 : 0.5)),
    strokeWidth: variant === 'ghost' ? 1.4 : 1.8
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/cards/CompareCard.jsx
try { (() => {
function CompareCard({
  image,
  title,
  body,
  layout = 'feature',
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  if (layout === 'row') {
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        display: 'grid',
        gridTemplateColumns: '150px minmax(0,1fr) 22px',
        alignItems: 'center',
        gap: 14,
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-md)',
        padding: '4px 14px 4px 4px',
        boxShadow: 'var(--shadow-soft)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: image,
      alt: "",
      style: {
        width: 150,
        height: 58,
        objectFit: 'cover',
        display: 'block',
        borderRadius: 10
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 14,
        letterSpacing: '0.08em',
        color: 'var(--fg-1)'
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 11,
        letterSpacing: '0.05em',
        color: 'var(--text-body)'
      }
    }, body)), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 18,
      color: "var(--fg-1)"
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '120px minmax(0,1fr)',
      gap: 22,
      alignItems: 'center',
      padding: '20px 56px 20px 20px',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: 120,
      height: 110,
      objectFit: 'contain',
      display: 'block',
      mixBlendMode: 'multiply'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 17,
      letterSpacing: '0.1em',
      color: 'var(--fg-1)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      lineHeight: 1.85,
      letterSpacing: '0.06em',
      color: 'var(--text-body)'
    }
  }, body)), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "arrow-right",
    size: 26,
    style: {
      position: 'absolute',
      right: 18,
      bottom: 18,
      transform: hover ? 'translateX(2px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-soft)'
    }
  }));
}
Object.assign(__ds_scope, { CompareCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CompareCard.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'center',
  rule = 'dash',
  size = 'md',
  style
}) {
  const center = align === 'center';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: center ? 'center' : 'flex-start',
      textAlign: center ? 'center' : 'left',
      gap: 10,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: 'var(--font-latin)',
      fontWeight: 500,
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: 'var(--fg-1)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    }
  }, rule === 'lines' && center && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 1,
      background: 'var(--ink-300)'
    }
  }), /*#__PURE__*/React.createElement("span", null, eyebrow), rule === 'lines' && /*#__PURE__*/React.createElement("span", {
    style: {
      width: center ? 28 : 56,
      height: 1,
      background: 'var(--ink-300)'
    }
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: size === 'lg' ? 'var(--fs-h1)' : size === 'sm' ? 18 : 'var(--fs-h2)',
      lineHeight: 'var(--lh-tight)',
      letterSpacing: size === 'sm' ? '0.06em' : 'var(--tracking-heading)',
      color: 'var(--text-heading)',
      textWrap: 'pretty'
    }
  }, title), rule === 'dash' && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 2,
      borderRadius: 2,
      background: 'var(--accent)'
    }
  }), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-small)',
      letterSpacing: 'var(--tracking-body)',
      color: 'var(--text-body)'
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  tone = 'plain',
  style
}) {
  const t = {
    plain: {
      background: 'transparent',
      color: 'var(--fg-3)',
      padding: 0
    },
    peach: {
      background: 'var(--peach-100)',
      color: 'var(--coral-600)',
      padding: '2px 8px'
    },
    mint: {
      background: 'var(--mint-100)',
      color: 'var(--teal-700)',
      padding: '2px 8px'
    }
  }[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-body)',
      fontSize: 10,
      letterSpacing: '0.08em',
      lineHeight: 1.6,
      borderRadius: 4,
      ...t,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/WaveFrame.jsx
try { (() => {
function wavyPath(w, h, amp, wl, r) {
  if (w <= 0 || h <= 0) return '';
  const x0 = amp,
    y0 = amp,
    W = w - amp * 2,
    H = h - amp * 2;
  r = Math.min(r, W / 2, H / 2);
  const segs = [{
    len: W - 2 * r,
    f: t => [x0 + r + t, y0, 0, -1]
  }, {
    len: Math.PI * r / 2,
    f: t => {
      const a = -Math.PI / 2 + t / r;
      return [x0 + W - r + r * Math.cos(a), y0 + r + r * Math.sin(a), Math.cos(a), Math.sin(a)];
    }
  }, {
    len: H - 2 * r,
    f: t => [x0 + W, y0 + r + t, 1, 0]
  }, {
    len: Math.PI * r / 2,
    f: t => {
      const a = t / r;
      return [x0 + W - r + r * Math.cos(a), y0 + H - r + r * Math.sin(a), Math.cos(a), Math.sin(a)];
    }
  }, {
    len: W - 2 * r,
    f: t => [x0 + W - r - t, y0 + H, 0, 1]
  }, {
    len: Math.PI * r / 2,
    f: t => {
      const a = Math.PI / 2 + t / r;
      return [x0 + r + r * Math.cos(a), y0 + H - r + r * Math.sin(a), Math.cos(a), Math.sin(a)];
    }
  }, {
    len: H - 2 * r,
    f: t => [x0, y0 + H - r - t, -1, 0]
  }, {
    len: Math.PI * r / 2,
    f: t => {
      const a = Math.PI + t / r;
      return [x0 + r + r * Math.cos(a), y0 + r + r * Math.sin(a), Math.cos(a), Math.sin(a)];
    }
  }];
  const total = segs.reduce((s, g) => s + g.len, 0);
  const n = Math.max(2, Math.round(total / wl));
  const k = 2 * Math.PI * n / total;
  const pts = [];
  let s = 0;
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
function WaveFrame({
  background = 'var(--surface-hero)',
  outline = 6,
  outlineColor = '#fff',
  amplitude = 5,
  wavelength = 90,
  radius = 26,
  shadow = true,
  children,
  style,
  innerStyle
}) {
  const ref = React.useRef(null);
  const [size, setSize] = React.useState([0, 0]);
  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const b = el.getBoundingClientRect();
      setSize(s => s[0] === b.width && s[1] === b.height ? s : [b.width, b.height]);
    };
    measure();
    const raf = requestAnimationFrame(measure);
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(measure) : null;
    if (ro) ro.observe(el);
    window.addEventListener('resize', measure);
    return () => {
      cancelAnimationFrame(raf);
      if (ro) ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);
  const [w, h] = size;
  const outer = wavyPath(w, h, amplitude, wavelength, radius);
  const inner = wavyPath(w - outline * 2, h - outline * 2, amplitude, wavelength, Math.max(4, radius - outline));
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative',
      width: '100%',
      boxSizing: 'border-box',
      filter: shadow ? 'drop-shadow(0 10px 24px rgba(111,181,168,.22))' : undefined,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: outlineColor,
      clipPath: outer ? `path('${outer}')` : undefined,
      borderRadius: outer ? 0 : radius
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: outline,
      background,
      clipPath: inner ? `path('${inner}')` : undefined,
      borderRadius: inner ? 0 : radius,
      overflow: 'hidden',
      ...innerStyle
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      visibility: 'hidden'
    }
  }));
}
Object.assign(__ds_scope, { WaveFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/WaveFrame.jsx", error: String((e && e.message) || e) }); }

// components/cards/ArticleCard.jsx
try { (() => {
function ArticleCard({
  image,
  category,
  date,
  title,
  excerpt,
  layout = 'vertical',
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const img = /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: hover ? 'scale(1.03)' : 'none',
      transition: 'transform 600ms var(--ease-soft)'
    }
  });
  const titleS = {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    letterSpacing: '0.06em',
    color: 'var(--fg-1)',
    lineHeight: 1.55,
    whiteSpace: 'pre-line'
  };
  if (layout === 'horizontal') {
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,1.3fr) 22px',
        alignItems: 'center',
        gap: 16,
        background: 'rgba(255,255,255,.85)',
        borderRadius: 'var(--radius-sm)',
        paddingRight: 14,
        overflow: 'hidden',
        boxShadow: 'var(--shadow-soft)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: '222/80',
        overflow: 'hidden',
        borderRadius: '8px 0 0 8px'
      }
    }, img), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        alignItems: 'flex-start',
        padding: '8px 0'
      }
    }, category && /*#__PURE__*/React.createElement(__ds_scope.Tag, {
      tone: "peach"
    }, category), /*#__PURE__*/React.createElement("div", {
      style: {
        ...titleS,
        fontSize: 14
      }
    }, title), excerpt && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 11,
        lineHeight: 1.6,
        letterSpacing: '0.05em',
        color: 'var(--text-body)'
      }
    }, excerpt)), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 18,
      color: "var(--fg-1)"
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.WaveFrame, {
    outline: 4,
    amplitude: 4,
    wavelength: 60,
    radius: 12,
    shadow: false,
    style: {
      width: '100%',
      aspectRatio: '230/117'
    }
  }, img), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 10,
      color: 'var(--fg-3)',
      letterSpacing: '0.06em',
      marginTop: 4
    }
  }, category && /*#__PURE__*/React.createElement(__ds_scope.Tag, null, category), category && date && /*#__PURE__*/React.createElement("span", null, "|"), date && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-latin)'
    }
  }, date)), /*#__PURE__*/React.createElement("div", {
    style: {
      ...titleS,
      fontSize: 15
    }
  }, title), excerpt && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-small)',
      lineHeight: 1.8,
      letterSpacing: '0.05em',
      color: 'var(--text-body)',
      whiteSpace: 'pre-line'
    }
  }, excerpt), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "text",
    onClick: onClick
  }, "\u8A18\u4E8B\u3092\u8AAD\u3080")));
}
Object.assign(__ds_scope, { ArticleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ArticleCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ChoiceCard.jsx
try { (() => {
function ChoiceCard({
  image,
  title,
  body,
  cta,
  layout = 'vertical',
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const img = /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: hover ? 'scale(1.03)' : 'none',
      transition: 'transform 600ms var(--ease-soft)'
    }
  });
  if (layout === 'horizontal') {
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,1fr) 28px',
        alignItems: 'center',
        gap: 16,
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-md)',
        padding: 6,
        paddingRight: 16,
        boxShadow: 'var(--shadow-soft)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.WaveFrame, {
      outline: 0,
      amplitude: 4,
      wavelength: 60,
      radius: 14,
      shadow: false,
      style: {
        aspectRatio: '228/104'
      }
    }, img), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'var(--fs-h3)',
        letterSpacing: '0.08em',
        color: 'var(--fg-1)'
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 13,
        lineHeight: 1.75,
        letterSpacing: '0.06em',
        color: 'var(--text-body)'
      }
    }, body)), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 22,
      color: "var(--fg-1)",
      style: {
        transform: hover ? 'translateX(3px)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-soft)'
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.WaveFrame, {
    outline: 4,
    amplitude: 4,
    wavelength: 60,
    radius: 14,
    shadow: false,
    style: {
      width: '100%',
      aspectRatio: '230/140'
    }
  }, img), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-h3)',
      letterSpacing: '0.08em',
      color: 'var(--fg-1)',
      marginTop: 4
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-small)',
      lineHeight: 1.9,
      letterSpacing: '0.06em',
      color: 'var(--text-body)',
      whiteSpace: 'pre-line'
    }
  }, body), cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    onClick: onClick,
    style: {
      marginTop: 4
    }
  }, cta));
}
Object.assign(__ds_scope, { ChoiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ChoiceCard.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/FaqItem.jsx
try { (() => {
function FaqItem({
  question,
  answer,
  defaultOpen = false,
  marker = 'q',
  compact = false
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-card)',
      borderRadius: compact ? 10 : 12,
      overflow: 'hidden',
      transition: 'box-shadow var(--dur-fast)',
      boxShadow: hover ? 'var(--shadow-soft)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    "aria-expanded": open,
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: compact ? '8px 14px' : '11px 22px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-body)',
      fontSize: compact ? 12 : 12.5,
      letterSpacing: '0.06em',
      color: 'var(--fg-1)'
    }
  }, marker === 'q' && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-latin)',
      fontWeight: 600,
      color: 'var(--fg-1)'
    }
  }, "Q."), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, question), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: marker === 'q' ? open ? 'minus' : 'plus' : 'chevron-down',
    size: 16,
    color: "var(--fg-1)",
    style: {
      transform: marker !== 'q' && open ? 'rotate(180deg)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-soft)'
    }
  })), open && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: compact ? '0 14px 12px' : '0 22px 16px 54px',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      lineHeight: 1.9,
      letterSpacing: '0.05em',
      color: 'var(--text-body)'
    }
  }, answer));
}
Object.assign(__ds_scope, { FaqItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/FaqItem.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PcHome.jsx
try { (() => {
const {
  Logo,
  Button,
  IconButton,
  WaveFrame,
  SectionHeading,
  ChoiceCard,
  ArticleCard,
  CompareCard,
  FaqItem
} = window.DesignSystem_82f53f;
const IMG = window.SHIAWASE_IMG,
  D = window.SHIAWASE_DATA;
const pcWrap = {
  maxWidth: 1120,
  margin: '0 auto',
  padding: '0 40px',
  boxSizing: 'border-box'
};
const scrollToId = id => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({
    top: el.offsetTop - 20,
    behavior: 'smooth'
  });
};
function PcHeader() {
  const link = {
    fontFamily: 'var(--font-body)',
    fontSize: 12,
    letterSpacing: '0.1em',
    color: 'var(--fg-1)',
    textDecoration: 'none',
    cursor: 'pointer'
  };
  const targets = ['intro', 'choose', 'compare', 'journal'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      ...pcWrap,
      maxWidth: 1240,
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      padding: '18px 40px 14px'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 40,
      justifyContent: 'flex-end',
      paddingRight: 64
    }
  }, D.nav.slice(0, 2).map((n, i) => /*#__PURE__*/React.createElement("a", {
    key: n,
    style: link,
    onClick: () => scrollToId(targets[i])
  }, n))), /*#__PURE__*/React.createElement(Logo, {
    layout: "stacked",
    size: 22,
    src: IMG + 'logo-rings.png'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 40,
      paddingLeft: 64,
      flex: 1
    }
  }, D.nav.slice(2).map((n, i) => /*#__PURE__*/React.createElement("a", {
    key: n,
    style: link,
    onClick: () => scrollToId(targets[i + 2])
  }, n))), /*#__PURE__*/React.createElement(IconButton, {
    size: 36,
    label: "\u8A3A\u65AD\u3092\u306F\u3058\u3081\u308B",
    onClick: () => scrollToId('choose')
  })));
}
function PcHero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '0 40px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(WaveFrame, {
    outline: 7,
    amplitude: 6,
    wavelength: 120,
    radius: 36,
    style: {
      height: 520
    },
    innerStyle: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr) 70px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '96px 0 0 110px',
      display: 'flex',
      flexDirection: 'column',
      gap: 26,
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 46,
      lineHeight: 1.4,
      letterSpacing: '0.16em',
      color: 'var(--fg-1)',
      whiteSpace: 'nowrap'
    }
  }, "\u3053\u308C\u304B\u3089\u306E", /*#__PURE__*/React.createElement("br", null), "\u3057\u3042\u308F\u305B\u306F\u3001", /*#__PURE__*/React.createElement("br", null), "\u308F\u305F\u3057\u304C\u9078\u3076\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 1.8,
      letterSpacing: '0.08em',
      color: 'var(--fg-1)'
    }
  }, "30\u4EE3\u30FB40\u4EE3\u304B\u3089\u306E\u3001", /*#__PURE__*/React.createElement("br", null), "\u81EA\u5206\u3089\u3057\u3044\u51FA\u4F1A\u3044\u3068\u7D50\u5A5A\u3002"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => scrollToId('choose')
  }, "\u308F\u305F\u3057\u306B\u5408\u3046\u5A5A\u6D3B\u3092\u898B\u3064\u3051\u308B"))), /*#__PURE__*/React.createElement("img", {
    src: IMG + 'hero-arch-scene.png',
    alt: "",
    style: {
      width: '118%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center bottom',
      marginLeft: '-18%',
      display: 'block',
      WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 22%,#000 92%,transparent)',
      maskImage: 'linear-gradient(90deg,transparent,#000 22%,#000 92%,transparent)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 70,
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 200,
      background: 'var(--fg-1)',
      opacity: .6
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      writingMode: 'vertical-rl',
      fontFamily: 'var(--font-display)',
      fontSize: 15,
      letterSpacing: '0.3em',
      color: 'var(--fg-1)'
    }
  }, "\u81EA\u5206\u3089\u3057\u3044\u4E00\u6B69\u3092\u3002")))));
}
function Callout({
  label,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      display: 'flex',
      alignItems: 'flex-end',
      gap: 8,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 1,
      background: 'var(--teal-700)',
      transform: 'rotate(-40deg)',
      transformOrigin: 'left bottom',
      position: 'relative',
      top: -2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-latin)',
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: '0.2em',
      color: 'var(--fg-1)',
      paddingBottom: 18,
      whiteSpace: 'nowrap'
    }
  }, label));
}
function PcIntro() {
  return /*#__PURE__*/React.createElement("section", {
    id: "intro",
    style: {
      ...pcWrap,
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 40,
      padding: '56px 40px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 330
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + 'motif-heart-pedestal.png',
    alt: "",
    style: {
      position: 'absolute',
      left: 10,
      top: 10,
      width: 200,
      mixBlendMode: 'multiply',
      WebkitMaskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)',
      maskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)'
    }
  }), /*#__PURE__*/React.createElement(Callout, {
    label: "CHOICE",
    style: {
      left: 200,
      top: 0
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: IMG + 'motif-ribbon-pedestal.png',
    alt: "",
    style: {
      position: 'absolute',
      left: 110,
      top: 100,
      width: 215,
      mixBlendMode: 'multiply',
      WebkitMaskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)',
      maskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)'
    }
  }), /*#__PURE__*/React.createElement(Callout, {
    label: "YOUR PACE",
    style: {
      left: 300,
      top: 70
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: IMG + 'motif-envelope-pedestal.png',
    alt: "",
    style: {
      position: 'absolute',
      left: 260,
      top: 190,
      width: 225,
      mixBlendMode: 'multiply',
      WebkitMaskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)',
      maskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)'
    }
  }), /*#__PURE__*/React.createElement(Callout, {
    label: "NEW BEGINNING",
    style: {
      left: 390,
      top: 160
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 10,
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    title: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 26,
        whiteSpace: 'nowrap'
      }
    }, "\u7406\u60F3\u3082\u3001\u81EA\u5206\u306E\u30DA\u30FC\u30B9\u3082\u3001", /*#__PURE__*/React.createElement("br", null), "\u5927\u5207\u306B\u3002")
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      lineHeight: 2,
      letterSpacing: '0.08em',
      color: 'var(--text-body)'
    }
  }, "\u7D50\u5A5A\u306E\u304B\u305F\u3061\u306F\u3001\u3072\u3068\u3064\u3058\u3083\u3042\u308A\u307E\u305B\u3093\u3002", /*#__PURE__*/React.createElement("br", null), "\u3044\u3064\u3001\u3069\u3093\u306A\u65B9\u6CD5\u3067\u3001\u3069\u3093\u306A\u76F8\u624B\u3068\u3002", /*#__PURE__*/React.createElement("br", null), "\u5927\u5207\u306A\u306E\u306F\u3001\u307E\u308F\u308A\u306E\u6B63\u89E3\u3067\u306F\u306A\u304F\u3001", /*#__PURE__*/React.createElement("br", null), "\u3042\u306A\u305F\u306B\u3068\u3063\u3066\u306E\u300C\u3057\u3042\u308F\u305B\u300D\u3092\u9078\u3076\u3053\u3068\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      lineHeight: 2,
      letterSpacing: '0.08em',
      color: 'var(--text-body)'
    }
  }, "\u3053\u306E\u30B5\u30A4\u30C8\u3067\u306F\u3001\u5A5A\u6D3B\u30A2\u30D7\u30EA\u30FB\u7D50\u5A5A\u76F8\u8AC7\u6240\u30FB\u51FA\u4F1A\u3044\u306E\u8003\u3048\u65B9\u306A\u3069\u300130\u4EE3\u30FB40\u4EE3\u304B\u3089\u306E\u5A5A\u6D3B\u306B\u5F79\u7ACB\u3064\u60C5\u5831\u3092\u3001\u3084\u3055\u3057\u304F\u308F\u304B\u308A\u3084\u3059\u304F\u304A\u5C4A\u3051\u3057\u307E\u3059\u3002\u3042\u306A\u305F\u306E\u30DA\u30FC\u30B9\u3067\u3001\u524D\u5411\u304D\u306A\u4E00\u6B69\u3092\u8E0F\u307F\u51FA\u3059\u304D\u3063\u304B\u3051\u306B\u306A\u308A\u307E\u3059\u3088\u3046\u306B\u3002")));
}
function Band({
  id,
  tone,
  children,
  style
}) {
  const bg = tone === 'lilac' ? 'linear-gradient(180deg,var(--lilac-100),var(--lilac-50))' : 'linear-gradient(180deg,var(--peach-100),var(--peach-50))';
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '0 12px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 36,
      padding: '30px 0 40px',
      ...style
    }
  }, children));
}
function PcChoose() {
  return /*#__PURE__*/React.createElement(Band, {
    id: "choose",
    tone: "lilac"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Choose your way",
    title: "\u4ECA\u306E\u6C17\u6301\u3061\u304B\u3089\u3001\u306F\u3058\u3081\u3088\u3046",
    style: {
      marginBottom: 30
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...pcWrap,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 36
    }
  }, D.choices.map(c => /*#__PURE__*/React.createElement(ChoiceCard, {
    key: c.title,
    image: IMG + c.img + '.png',
    title: c.title,
    body: c.body,
    cta: c.cta
  }))));
}
function PcJournal() {
  return /*#__PURE__*/React.createElement("section", {
    id: "journal",
    style: {
      ...pcWrap,
      padding: '36px 40px 40px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Journal",
    title: "\u305D\u306E\u6C17\u6301\u3061\u306B\u3001\u5BC4\u308A\u6DFB\u3046\u8AAD\u307F\u3082\u306E",
    rule: "none",
    style: {
      marginBottom: 30
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 32
    }
  }, D.articles.map(a => /*#__PURE__*/React.createElement(ArticleCard, {
    key: a.title,
    image: a.photo ? window.SHIAWASE_PHOTO[a.photo] : IMG + a.img + '.png',
    category: a.category,
    date: a.date,
    title: a.title,
    excerpt: a.excerpt
  }))));
}
function PcCompare() {
  return /*#__PURE__*/React.createElement(Band, {
    id: "compare",
    tone: "peach",
    style: {
      padding: '22px 0 26px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "\u3042\u306A\u305F\u306B\u5408\u3046\u3001\u51FA\u4F1A\u3044\u306E\u304B\u305F\u3061",
    rule: "dash",
    style: {
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...pcWrap,
      maxWidth: 1180
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,.9)',
      borderRadius: 22,
      boxShadow: 'var(--shadow-card)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 1px minmax(0,1fr)',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(CompareCard, {
    image: IMG + D.compare[0].img + '.png',
    title: D.compare[0].title,
    body: D.compare[0].body
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--line-200)',
      margin: '20px 0'
    }
  }), /*#__PURE__*/React.createElement(CompareCard, {
    image: IMG + D.compare[1].img + '.png',
    title: D.compare[1].title,
    body: D.compare[1].body
  }))));
}
function PcFaq() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...pcWrap,
      maxWidth: 880,
      padding: '30px 40px 30px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "FAQ",
    title: "\u3088\u304F\u3042\u308B\u3054\u8CEA\u554F",
    style: {
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, D.faq.map(f => /*#__PURE__*/React.createElement(FaqItem, {
    key: f.q,
    question: f.q,
    answer: f.a
  }))));
}
function PcFooter() {
  const l = {
    fontSize: 11,
    letterSpacing: '0.08em',
    color: 'var(--fg-1)',
    textDecoration: 'none'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      ...pcWrap,
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.3fr) 1px minmax(0,.8fr) 1px minmax(0,1.3fr)',
      gap: 36,
      padding: '20px 40px 40px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      paddingLeft: 20
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    layout: "inline",
    size: 24,
    src: IMG + 'logo-rings.png'
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 0 68px',
      fontSize: 11,
      lineHeight: 1.9,
      letterSpacing: '0.1em',
      color: 'var(--text-body)'
    }
  }, "\u81EA\u5206\u3089\u3057\u3044\u51FA\u4F1A\u3044\u3067\u3001", /*#__PURE__*/React.createElement("br", null), "\u3053\u308C\u304B\u3089\u306E\u3057\u3042\u308F\u305B\u3092\u3002")), /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--ink-300)',
      alignSelf: 'stretch'
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, D.nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    style: l
  }, n))), /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--ink-300)',
      alignSelf: 'stretch'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto auto',
      columnGap: 32,
      rowGap: 9,
      justifyContent: 'start'
    }
  }, ['運営者情報', 'プライバシーポリシー', '免責事項', 'お問い合わせ'].map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    style: l
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--ink-300)',
      paddingTop: 12,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      letterSpacing: '0.06em',
      color: 'var(--text-muted)'
    }
  }, "\u5F53\u30B5\u30A4\u30C8\u306F\u30A2\u30D5\u30A3\u30EA\u30A8\u30A4\u30C8\u5E83\u544A\u3092\u5229\u7528\u3057\u3066\u3044\u307E\u3059"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      letterSpacing: '0.1em',
      color: 'var(--fg-1)'
    }
  }, "\xA9 \u3057\u3042\u308F\u305B\u306E\u9078\u3073\u65B9"))));
}
function PcHome() {
  return /*#__PURE__*/React.createElement("div", {
    className: "shiawase-grid-bg",
    style: {
      minHeight: '100vh',
      fontFamily: 'var(--font-body)',
      overflowX: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(PcHeader, null), /*#__PURE__*/React.createElement(PcHero, null), /*#__PURE__*/React.createElement(PcIntro, null), /*#__PURE__*/React.createElement(PcChoose, null), /*#__PURE__*/React.createElement(PcJournal, null), /*#__PURE__*/React.createElement(PcCompare, null), /*#__PURE__*/React.createElement(PcFaq, null), /*#__PURE__*/React.createElement(PcFooter, null));
}
Object.assign(window, {
  PcHome
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PcHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SpHome.jsx
try { (() => {
const {
  Logo: SpLogo,
  Button: SpButton,
  IconButton: SpIconButton,
  WaveFrame: SpWave,
  SectionHeading: SpHeading,
  ChoiceCard: SpChoice,
  ArticleCard: SpArticle,
  CompareCard: SpCompare,
  FaqItem: SpFaq,
  Icon: SpIcon
} = window.DesignSystem_82f53f;
const SIMG = window.SHIAWASE_IMG,
  SD = window.SHIAWASE_DATA;
const spPad = {
  padding: '0 20px',
  boxSizing: 'border-box'
};
const spScroll = id => {
  const el = document.getElementById(id);
  const sc = document.getElementById('sp-scroll');
  if (el && sc) sc.scrollTo({
    top: el.offsetTop - 70,
    behavior: 'smooth'
  });
};
function SpMenu({
  open,
  onClose
}) {
  if (!open) return null;
  const ids = ['sp-intro', 'sp-choose', 'sp-compare', 'sp-journal'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 20,
      background: 'rgba(252,248,246,.97)',
      display: 'flex',
      flexDirection: 'column',
      padding: '14px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SpLogo, {
    showMark: false,
    size: 20
  }), /*#__PURE__*/React.createElement(SpIconButton, {
    icon: "x",
    variant: "ghost",
    size: 44,
    label: "\u9589\u3058\u308B",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: 30
    }
  }, SD.nav.map((n, i) => /*#__PURE__*/React.createElement("a", {
    key: n,
    onClick: () => {
      onClose();
      setTimeout(() => spScroll(ids[i]), 30);
    },
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '18px 4px',
      borderBottom: '1px solid var(--line-200)',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 16,
      letterSpacing: '0.1em',
      color: 'var(--fg-1)',
      cursor: 'pointer'
    }
  }, n, /*#__PURE__*/React.createElement(SpIcon, {
    name: "chevron-right",
    size: 18
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(SpButton, {
    fullWidth: true,
    onClick: () => {
      onClose();
      setTimeout(() => spScroll('sp-choose'), 30);
    }
  }, "\u308F\u305F\u3057\u306B\u5408\u3046\u5A5A\u6D3B\u3092\u898B\u3064\u3051\u308B")));
}
function SpHeader({
  onMenu
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      ...spPad,
      position: 'sticky',
      top: 0,
      zIndex: 10,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 60,
      background: 'rgba(252,248,246,.88)',
      backdropFilter: 'blur(8px)'
    }
  }, /*#__PURE__*/React.createElement(SpLogo, {
    showMark: false,
    size: 20
  }), /*#__PURE__*/React.createElement(SpIconButton, {
    icon: "menu",
    variant: "ghost",
    size: 44,
    label: "\u30E1\u30CB\u30E5\u30FC",
    onClick: onMenu
  }));
}
function SpHero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '4px 14px 0',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(SpWave, {
    outline: 6,
    amplitude: 5,
    wavelength: 70,
    radius: 30,
    style: {
      height: 360
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: SIMG + 'hero-arch-scene.png',
    alt: "",
    style: {
      position: 'absolute',
      right: -40,
      bottom: 0,
      height: '82%',
      opacity: .95
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '40px 22px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 28,
      lineHeight: 1.45,
      letterSpacing: '0.16em',
      color: 'var(--fg-1)'
    }
  }, "\u3053\u308C\u304B\u3089\u306E", /*#__PURE__*/React.createElement("br", null), "\u3057\u3042\u308F\u305B\u306F\u3001", /*#__PURE__*/React.createElement("br", null), "\u308F\u305F\u3057\u304C\u9078\u3076\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 1.8,
      letterSpacing: '0.08em',
      color: 'var(--fg-1)'
    }
  }, "30\u4EE3\u30FB40\u4EE3\u304B\u3089\u306E\u3001", /*#__PURE__*/React.createElement("br", null), "\u81EA\u5206\u3089\u3057\u3044\u51FA\u4F1A\u3044\u3068\u7D50\u5A5A\u3002")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 22,
      right: 22,
      bottom: 26
    }
  }, /*#__PURE__*/React.createElement(SpButton, {
    fullWidth: true,
    icon: "chevron-right",
    onClick: () => spScroll('sp-choose')
  }, "\u308F\u305F\u3057\u306B\u5408\u3046\u5A5A\u6D3B\u3092\u898B\u3064\u3051\u308B"))));
}
function SpIntro() {
  return /*#__PURE__*/React.createElement("section", {
    id: "sp-intro",
    style: {
      ...spPad,
      padding: '34px 20px 24px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(SpHeading, {
    size: "sm",
    align: "left",
    eyebrow: "Choice",
    rule: "lines",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "\u7406\u60F3\u3082\u3001\u81EA\u5206\u306E\u30DA\u30FC\u30B9\u3082\u3001", /*#__PURE__*/React.createElement("br", null), "\u5927\u5207\u306B\u3002")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,1fr)',
      gap: 8,
      alignItems: 'center',
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 11.5,
      lineHeight: 1.95,
      letterSpacing: '0.06em',
      color: 'var(--text-body)'
    }
  }, "\u7D50\u5A5A\u306F\u3001\u30B4\u30FC\u30EB\u3067\u306F\u306A\u304F", /*#__PURE__*/React.createElement("br", null), "\u3053\u308C\u304B\u3089\u306E\u6BCE\u65E5\u3092\u5FC3\u5730\u3088\u304F\u3059\u308B\u305F\u3081\u306E\u9078\u629E\u3002\u3057\u3042\u308F\u305B\u306E\u304B\u305F\u3061\u306F\u3001\u3072\u3068\u3064\u3058\u3083\u306A\u3044\u304B\u3089\u81EA\u5206\u306E\u30DA\u30FC\u30B9\u3067\u3001\u898B\u3064\u3051\u3066\u3044\u304D\u307E\u305B\u3093\u304B\u3002"), /*#__PURE__*/React.createElement("img", {
    src: SIMG + 'sp-heart-ribbon.png',
    alt: "",
    style: {
      width: '100%',
      mixBlendMode: 'multiply',
      WebkitMaskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)',
      maskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)'
    }
  })));
}
function SpBand({
  id,
  tone,
  children
}) {
  const bg = tone === 'lilac' ? 'linear-gradient(180deg,var(--lilac-100),var(--lilac-50))' : 'linear-gradient(180deg,var(--peach-100),var(--peach-50))';
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      padding: '0 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 28,
      padding: '26px 14px 22px'
    }
  }, children));
}
function SpHomeBody() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SpHero, null), /*#__PURE__*/React.createElement(SpIntro, null), /*#__PURE__*/React.createElement(SpBand, {
    id: "sp-choose",
    tone: "lilac"
  }, /*#__PURE__*/React.createElement(SpHeading, {
    size: "sm",
    eyebrow: "Choose your way",
    rule: "lines",
    title: "\u4ECA\u306E\u6C17\u6301\u3061\u304B\u3089\u3001\u306F\u3058\u3081\u3088\u3046",
    lead: "\u3042\u306A\u305F\u306B\u5408\u3046\u65B9\u6CD5\u304C\u3001\u304D\u3063\u3068\u898B\u3064\u304B\u308A\u307E\u3059\u3002",
    style: {
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, SD.choices.map(c => /*#__PURE__*/React.createElement(SpChoice, {
    key: c.title,
    layout: "horizontal",
    image: SIMG + c.sp + '.png',
    title: c.title,
    body: c.spBody
  })))), /*#__PURE__*/React.createElement("section", {
    id: "sp-journal",
    style: {
      ...spPad,
      padding: '28px 16px 26px'
    }
  }, /*#__PURE__*/React.createElement(SpHeading, {
    size: "sm",
    eyebrow: "Journal",
    rule: "lines",
    align: "left",
    title: "\u305D\u306E\u6C17\u6301\u3061\u306B\u3001\u5BC4\u308A\u6DFB\u3046\u8AAD\u307F\u3082\u306E",
    lead: "\u5A5A\u6D3B\u3084\u7D50\u5A5A\u306B\u307E\u3064\u308F\u308B\u3001\u30D2\u30F3\u30C8\u3084\u8003\u3048\u65B9\u3092\u304A\u5C4A\u3051\u3057\u307E\u3059\u3002",
    style: {
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, SD.spArticles.map(a => /*#__PURE__*/React.createElement(SpArticle, {
    key: a.title,
    layout: "horizontal",
    image: a.photo ? window.SHIAWASE_PHOTO[a.photo] : SIMG + a.img + '.png',
    category: a.category,
    title: a.title,
    excerpt: a.excerpt
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(SpButton, {
    variant: "underline",
    icon: "chevron-right"
  }, "\u8AAD\u307F\u3082\u306E\u3092\u3082\u3063\u3068\u898B\u308B"))), /*#__PURE__*/React.createElement(SpBand, {
    id: "sp-compare",
    tone: "peach"
  }, /*#__PURE__*/React.createElement(SpHeading, {
    size: "sm",
    eyebrow: "Compare",
    rule: "lines",
    title: "\u3042\u306A\u305F\u306B\u5408\u3046\u3001\u51FA\u4F1A\u3044\u306E\u304B\u305F\u3061",
    lead: "\u305D\u308C\u305E\u308C\u306E\u7279\u5FB4\u3092\u77E5\u3063\u3066\u3001\u81EA\u5206\u306B\u5408\u3063\u305F\u65B9\u6CD5\u3092\u9078\u3073\u307E\u3057\u3087\u3046\u3002",
    style: {
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, SD.compare.map(c => /*#__PURE__*/React.createElement(SpCompare, {
    key: c.title,
    layout: "row",
    image: SIMG + c.sp + '.png',
    title: c.title,
    body: c.spBody
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...spPad,
      padding: '26px 20px 30px'
    }
  }, /*#__PURE__*/React.createElement(SpHeading, {
    size: "sm",
    eyebrow: "FAQ",
    rule: "lines",
    align: "left",
    title: "\u3088\u304F\u3042\u308B\u3054\u8CEA\u554F",
    lead: "\u306F\u3058\u3081\u3066\u306E\u65B9\u304B\u3089\u3088\u304F\u3044\u305F\u3060\u304F\u8CEA\u554F\u3092\u307E\u3068\u3081\u307E\u3057\u305F\u3002",
    style: {
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, SD.spFaq.map(f => /*#__PURE__*/React.createElement(SpFaq, {
    key: f.q,
    marker: "chevron",
    compact: true,
    question: f.q,
    answer: f.a
  })))), /*#__PURE__*/React.createElement(SpWave, {
    outline: 0,
    amplitude: 5,
    wavelength: 70,
    radius: 0,
    shadow: false,
    background: "var(--surface-footer)",
    style: {
      height: 166,
      margin: '0 -5px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12,
      padding: '26px 20px'
    }
  }, /*#__PURE__*/React.createElement(SpLogo, {
    showMark: false,
    size: 20
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '6px 14px',
      fontSize: 10,
      letterSpacing: '0.06em',
      color: 'var(--fg-1)'
    }
  }, ['サイトについて', '広告について', 'プライバシーポリシー', '利用規約', 'お問い合わせ', '運営会社'].map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      letterSpacing: '0.04em',
      color: 'var(--teal-700)'
    }
  }, "\u5F53\u30B5\u30A4\u30C8\u306F\u30A2\u30D5\u30A3\u30EA\u30A8\u30A4\u30C8\u5E83\u544A\u3092\u5229\u7528\u3057\u3066\u3044\u307E\u3059"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      letterSpacing: '0.08em',
      color: 'var(--teal-700)'
    }
  }, "\xA9 \u3057\u3042\u308F\u305B\u306E\u9078\u3073\u65B9")), /*#__PURE__*/React.createElement("img", {
    src: SIMG + 'sp-flower.png',
    alt: "",
    style: {
      position: 'absolute',
      right: 12,
      bottom: 8,
      height: 70,
      mixBlendMode: 'multiply',
      WebkitMaskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)',
      maskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)'
    }
  })));
}
function SpHome() {
  const [menu, setMenu] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 844,
      position: 'relative',
      borderRadius: 40,
      overflow: 'hidden',
      boxShadow: '0 0 0 10px #22383b, 0 30px 60px rgba(31,79,85,.25)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    id: "sp-scroll",
    className: "shiawase-grid-bg",
    style: {
      height: '100%',
      overflowY: 'auto',
      overflowX: 'hidden',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(SpHeader, {
    onMenu: () => setMenu(true)
  }), /*#__PURE__*/React.createElement(SpHomeBody, null)), /*#__PURE__*/React.createElement(SpMenu, {
    open: menu,
    onClose: () => setMenu(false)
  }));
}
Object.assign(window, {
  SpHome
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SpHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
window.SHIAWASE_IMG = '../../assets/illustrations/';
// Real photos: Unsplash License (free, commercial OK). Jakub Żerdzicki / Jason Low / Vitaly Gariev
window.SHIAWASE_PHOTO = {
  woman: 'https://unsplash.com/photos/sSsCTWJ33dw/download?w=800',
  couple: 'https://unsplash.com/photos/q9VZOCsyRlo/download?w=800',
  worker: 'https://unsplash.com/photos/APjRQ59peUg/download?w=800'
};
window.SHIAWASE_DATA = {
  nav: ['はじめての方へ', '婚活アプリ', '結婚相談所', '読みもの'],
  choices: [{
    img: 'choice-app',
    sp: 'sp-choice-app',
    title: 'まずはアプリで出会いたい',
    body: '自分のペースで始められる\n婚活アプリの特徴や選び方を紹介します。',
    spBody: '気軽に始められて、自分のペースで出会いを探せます。',
    cta: '婚活アプリを見てみる'
  }, {
    img: 'choice-consult',
    sp: 'sp-choice-consult',
    title: '相談しながら進めたい',
    body: 'プロのサポートで、\n安心して婚活を進めたい方へ。',
    spBody: 'プロのサポートを受けながら、安心して活動できます。',
    cta: '結婚相談所を見てみる'
  }, {
    img: 'choice-reading',
    sp: 'sp-choice-reading',
    title: 'まだ迷っている',
    body: '婚活の基礎知識や心の整理に役立つ\n読みものをまとめました。',
    spBody: '婚活の基礎知識や進め方を知り、自分に合う方法を見つけましょう。',
    cta: '読みものを見てみる'
  }],
  articles: [{
    img: 'journal-mug',
    photo: 'woman',
    category: '婚活アプリ',
    date: '2024.06.12',
    title: '婚活アプリに疲れたとき、\n見直したい3つのこと',
    excerpt: 'うまくいかないと感じたときに、\n立ち止まって考えたいポイントをまとめました。'
  }, {
    img: 'journal-heart-book',
    photo: 'couple',
    category: '出会いの考え方',
    date: '2024.05.28',
    title: '理想の相手ってどんな人？\n条件よりも大切なこと',
    excerpt: '理想の条件にとらわれすぎず、\n本当に大切にしたいことを見つめ直してみましょう。'
  }, {
    img: 'journal-arch',
    photo: 'worker',
    category: '婚活のはじめ方',
    date: '2024.05.14',
    title: '40代からの婚活のはじめ方\n不安を安心に変えるステップ',
    excerpt: '今からでも遅くありません。\n40代からの婚活を前向きに進めるためのステップを紹介します。'
  }],
  spArticles: [{
    img: 'sp-journal-cup',
    photo: 'woman',
    category: '心のこと',
    title: 'アプリに疲れたときに',
    excerpt: 'うまくいかない時期の乗り越え方と、気持ちを整えるヒント。'
  }, {
    img: 'sp-journal-sign',
    photo: 'couple',
    category: '考え方',
    title: '理想の相手を考える',
    excerpt: '譲れない条件と、実は大切なこと。'
  }, {
    img: 'sp-journal-arch',
    photo: 'worker',
    category: '年代別',
    title: '40代からの婚活、はじめの一歩',
    excerpt: '今だからこその強みと、前向きに進めるポイント。'
  }],
  compare: [{
    img: 'compare-phone',
    sp: 'sp-compare-phone',
    title: '婚活アプリを比較する',
    body: '主要な婚活アプリの特徴・料金・使いやすさをわかりやすく比較。自分に合うサービス選びをサポートします。',
    spBody: '人気のアプリの特徴や使い方をわかりやすく紹介。'
  }, {
    img: 'compare-clipboard',
    sp: 'sp-compare-house',
    title: '結婚相談所を比較する',
    body: 'サポート内容・料金・特徴を比較して、自分に合う結婚相談所を見つけましょう。',
    spBody: 'サポート内容や料金の目安を比較して検討できます。'
  }],
  faq: [{
    q: '婚活アプリと結婚相談所は、どう違いますか？',
    a: '婚活アプリは自分のペースで相手を探す方法、結婚相談所は担当者のサポートを受けながら進める方法です。（回答文は仮です）'
  }, {
    q: '30代・40代からでも、婚活はうまくいきますか？',
    a: '年代に合った方法を選ぶことで、前向きに進めることができます。（回答文は仮です）'
  }, {
    q: 'このサイトは本当に無料で利用できますか？',
    a: 'はい、当サイトのコンテンツは無料でご覧いただけます。（回答文は仮です）'
  }],
  spFaq: [{
    q: '婚活はいつから始めるのがいいですか？',
    a: '「始めたい」と思ったときが始めどきです。（回答文は仮です）'
  }, {
    q: 'アプリと結婚相談所はどちらがいいですか？',
    a: '求めるサポートや予算によって変わります。（回答文は仮です）'
  }, {
    q: '料金はどのくらいかかりますか？',
    a: 'サービスにより異なります。比較ページで目安をご確認ください。（回答文は仮です）'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.ArticleCard = __ds_scope.ArticleCard;

__ds_ns.ChoiceCard = __ds_scope.ChoiceCard;

__ds_ns.CompareCard = __ds_scope.CompareCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.WaveFrame = __ds_scope.WaveFrame;

__ds_ns.FaqItem = __ds_scope.FaqItem;

})();
