const { Logo: SpLogo, Button: SpButton, IconButton: SpIconButton, WaveFrame: SpWave, SectionHeading: SpHeading, ChoiceCard: SpChoice, ArticleCard: SpArticle, CompareCard: SpCompare, FaqItem: SpFaq, Icon: SpIcon } = window.DesignSystem_82f53f;
const SIMG = window.SHIAWASE_IMG, SD = window.SHIAWASE_DATA;
const spPad = { padding: '0 20px', boxSizing: 'border-box' };
const spScroll = id => { const el = document.getElementById(id); const sc = document.getElementById('sp-scroll'); if (el && sc) sc.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' }); };

function SpMenu({ open, onClose }) {
  if (!open) return null;
  const ids = ['sp-intro', 'sp-choose', 'sp-compare', 'sp-journal'];
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 20, background: 'rgba(252,248,246,.97)', display: 'flex', flexDirection: 'column', padding: '14px 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <SpLogo showMark={false} size={20} /><SpIconButton icon="x" variant="ghost" size={44} label="閉じる" onClick={onClose} />
      </div>
      <nav style={{ display: 'flex', flexDirection: 'column', marginTop: 30 }}>
        {SD.nav.map((n, i) => (
          <a key={n} onClick={() => { onClose(); setTimeout(() => spScroll(ids[i]), 30); }} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 4px', borderBottom: '1px solid var(--line-200)', fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 16, letterSpacing: '0.1em', color: 'var(--fg-1)', cursor: 'pointer' }}>
            {n}<SpIcon name="chevron-right" size={18} />
          </a>
        ))}
      </nav>
      <div style={{ marginTop: 32 }}><SpButton fullWidth onClick={() => { onClose(); setTimeout(() => spScroll('sp-choose'), 30); }}>わたしに合う婚活を見つける</SpButton></div>
    </div>
  );
}

function SpHeader({ onMenu }) {
  return (
    <header style={{ ...spPad, position: 'sticky', top: 0, zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 60, background: 'rgba(252,248,246,.88)', backdropFilter: 'blur(8px)' }}>
      <SpLogo showMark={false} size={20} />
      <SpIconButton icon="menu" variant="ghost" size={44} label="メニュー" onClick={onMenu} />
    </header>
  );
}

function SpHero() {
  return (
    <section style={{ padding: '4px 14px 0', overflow: 'hidden' }}>
      <SpWave outline={6} amplitude={5} wavelength={70} radius={30} style={{ height: 360 }}>
        <img src={SIMG + 'hero-arch-scene.png'} alt="" style={{ position: 'absolute', right: -40, bottom: 0, height: '82%', opacity: .95 }} />
        <div style={{ position: 'relative', padding: '40px 22px 0', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 28, lineHeight: 1.45, letterSpacing: '0.16em', color: 'var(--fg-1)' }}>これからの<br />しあわせは、<br />わたしが選ぶ。</h1>
          <p style={{ margin: 0, fontWeight: 500, fontSize: 12, lineHeight: 1.8, letterSpacing: '0.08em', color: 'var(--fg-1)' }}>30代・40代からの、<br />自分らしい出会いと結婚。</p>
        </div>
        <div style={{ position: 'absolute', left: 22, right: 22, bottom: 26 }}><SpButton fullWidth icon="chevron-right" onClick={() => spScroll('sp-choose')}>わたしに合う婚活を見つける</SpButton></div>
      </SpWave>
    </section>
  );
}

function SpIntro() {
  return (
    <section id="sp-intro" style={{ ...spPad, padding: '34px 20px 24px', position: 'relative' }}>
      <SpHeading size="sm" align="left" eyebrow="Choice" rule="lines" title={<>理想も、自分のペースも、<br />大切に。</>} />
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,1fr)', gap: 8, alignItems: 'center', marginTop: 14 }}>
        <p style={{ margin: 0, fontSize: 11.5, lineHeight: 1.95, letterSpacing: '0.06em', color: 'var(--text-body)' }}>結婚は、ゴールではなく<br />これからの毎日を心地よくするための選択。しあわせのかたちは、ひとつじゃないから自分のペースで、見つけていきませんか。</p>
        <img src={SIMG + 'sp-heart-ribbon.png'} alt="" style={{ width: '100%', mixBlendMode: 'multiply', WebkitMaskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)', maskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)' }} />
      </div>
    </section>
  );
}

function SpBand({ id, tone, children }) {
  const bg = tone === 'lilac' ? 'linear-gradient(180deg,var(--lilac-100),var(--lilac-50))' : 'linear-gradient(180deg,var(--peach-100),var(--peach-50))';
  return <section id={id} style={{ padding: '0 12px' }}><div style={{ background: bg, borderRadius: 28, padding: '26px 14px 22px' }}>{children}</div></section>;
}

function SpHomeBody() {
  return (
    <>
      <SpHero /><SpIntro />
      <SpBand id="sp-choose" tone="lilac">
        <SpHeading size="sm" eyebrow="Choose your way" rule="lines" title="今の気持ちから、はじめよう" lead="あなたに合う方法が、きっと見つかります。" style={{ marginBottom: 18 }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {SD.choices.map(c => <SpChoice key={c.title} layout="horizontal" image={SIMG + c.sp + '.png'} title={c.title} body={c.spBody} />)}
        </div>
      </SpBand>
      <section id="sp-journal" style={{ ...spPad, padding: '28px 16px 26px' }}>
        <SpHeading size="sm" eyebrow="Journal" rule="lines" align="left" title="その気持ちに、寄り添う読みもの" lead="婚活や結婚にまつわる、ヒントや考え方をお届けします。" style={{ marginBottom: 16 }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {SD.spArticles.map(a => <SpArticle key={a.title} layout="horizontal" image={a.photo ? window.SHIAWASE_PHOTO[a.photo] : SIMG + a.img + '.png'} category={a.category} title={a.title} excerpt={a.excerpt} />)}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 18 }}><SpButton variant="underline" icon="chevron-right">読みものをもっと見る</SpButton></div>
      </section>
      <SpBand id="sp-compare" tone="peach">
        <SpHeading size="sm" eyebrow="Compare" rule="lines" title="あなたに合う、出会いのかたち" lead="それぞれの特徴を知って、自分に合った方法を選びましょう。" style={{ marginBottom: 16 }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {SD.compare.map(c => <SpCompare key={c.title} layout="row" image={SIMG + c.sp + '.png'} title={c.title} body={c.spBody} />)}
        </div>
      </SpBand>
      <section style={{ ...spPad, padding: '26px 20px 30px' }}>
        <SpHeading size="sm" eyebrow="FAQ" rule="lines" align="left" title="よくあるご質問" lead="はじめての方からよくいただく質問をまとめました。" style={{ marginBottom: 14 }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {SD.spFaq.map(f => <SpFaq key={f.q} marker="chevron" compact question={f.q} answer={f.a} />)}
        </div>
      </section>
      <SpWave outline={0} amplitude={5} wavelength={70} radius={0} shadow={false} background="var(--surface-footer)" style={{ height: 166, margin: '0 -5px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, padding: '26px 20px' }}>
          <SpLogo showMark={false} size={20} />
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '6px 14px', fontSize: 10, letterSpacing: '0.06em', color: 'var(--fg-1)' }}>
            {['サイトについて', '広告について', 'プライバシーポリシー', '利用規約', 'お問い合わせ', '運営会社'].map(n => <a key={n} href="#" style={{ color: 'inherit', textDecoration: 'none' }}>{n}</a>)}
          </div>
          <div style={{ fontSize: 9, letterSpacing: '0.04em', color: 'var(--teal-700)' }}>当サイトはアフィリエイト広告を利用しています</div><div style={{ fontSize: 9, letterSpacing: '0.08em', color: 'var(--teal-700)' }}>© しあわせの選び方</div>
        </div>
        <img src={SIMG + 'sp-flower.png'} alt="" style={{ position: 'absolute', right: 12, bottom: 8, height: 70, mixBlendMode: 'multiply', WebkitMaskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)', maskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)' }} />
      </SpWave>
    </>
  );
}

function SpHome({ bare }) {
  const [menu, setMenu] = React.useState(false);
  return (
    <div style={bare ? { width: '100%', height: '100dvh', position: 'relative', overflow: 'hidden', fontFamily: 'var(--font-body)' } : { width: 390, height: 844, position: 'relative', borderRadius: 40, overflow: 'hidden', boxShadow: '0 0 0 10px #22383b, 0 30px 60px rgba(31,79,85,.25)', fontFamily: 'var(--font-body)' }}>
      <div id="sp-scroll" className="shiawase-grid-bg" style={{ height: '100%', overflowY: 'auto', overflowX: 'hidden', position: 'relative' }}>
        <SpHeader onMenu={() => setMenu(true)} />
        <SpHomeBody />
      </div>
      <SpMenu open={menu} onClose={() => setMenu(false)} />
    </div>
  );
}
Object.assign(window, { SpHome });
