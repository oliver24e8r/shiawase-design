const { Logo, Button, IconButton, WaveFrame, SectionHeading, ChoiceCard, ArticleCard, CompareCard, FaqItem } = window.DesignSystem_82f53f;
const IMG = window.SHIAWASE_IMG, D = window.SHIAWASE_DATA;
const pcWrap = { maxWidth: 1120, margin: '0 auto', padding: '0 40px', boxSizing: 'border-box' };
const scrollToId = id => { const el = document.getElementById(id); if (el) window.scrollTo({ top: el.offsetTop - 20, behavior: 'smooth' }); };

function PcHeader() {
  const link = { fontFamily: 'var(--font-body)', fontSize: 12, letterSpacing: '0.1em', color: 'var(--fg-1)', textDecoration: 'none', cursor: 'pointer' };
  const targets = ['intro', 'choose', 'compare', 'journal'];
  return (
    <header style={{ ...pcWrap, maxWidth: 1240, display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', padding: '18px 40px 14px' }}>
      <nav style={{ display: 'flex', gap: 40, justifyContent: 'flex-end', paddingRight: 64 }}>
        {D.nav.slice(0, 2).map((n, i) => <a key={n} style={link} onClick={() => scrollToId(targets[i])}>{n}</a>)}
      </nav>
      <Logo layout="stacked" size={22} src={IMG + 'logo-rings.png'} />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <nav style={{ display: 'flex', gap: 40, paddingLeft: 64, flex: 1 }}>
          {D.nav.slice(2).map((n, i) => <a key={n} style={link} onClick={() => scrollToId(targets[i + 2])}>{n}</a>)}
        </nav>
        <IconButton size={36} label="診断をはじめる" onClick={() => scrollToId('choose')} />
      </div>
    </header>
  );
}

function PcHero() {
  return (
    <section style={{ maxWidth: 1240, margin: '0 auto', padding: '0 40px', boxSizing: 'border-box' }}>
      <WaveFrame outline={7} amplitude={6} wavelength={120} radius={36} style={{ height: 520 }} innerStyle={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr) 70px' }}>
        <div style={{ padding: '96px 0 0 110px', display: 'flex', flexDirection: 'column', gap: 26, position: 'relative', zIndex: 1 }}>
          <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 46, lineHeight: 1.4, letterSpacing: '0.16em', color: 'var(--fg-1)', whiteSpace: 'nowrap' }}>これからの<br />しあわせは、<br />わたしが選ぶ。</h1>
          <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 16, lineHeight: 1.8, letterSpacing: '0.08em', color: 'var(--fg-1)' }}>30代・40代からの、<br />自分らしい出会いと結婚。</p>
          <div><Button size="lg" onClick={() => scrollToId('choose')}>わたしに合う婚活を見つける</Button></div>
        </div>
        <img src={IMG + 'hero-arch-scene.png'} alt="" style={{ width: '118%', height: '100%', objectFit: 'cover', objectPosition: 'center bottom', marginLeft: '-18%', display: 'block', WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 22%,#000 92%,transparent)', maskImage: 'linear-gradient(90deg,transparent,#000 22%,#000 92%,transparent)' }} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 70, gap: 0 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <span style={{ width: 1, height: 200, background: 'var(--fg-1)', opacity: .6 }} />
            <span style={{ writingMode: 'vertical-rl', fontFamily: 'var(--font-display)', fontSize: 15, letterSpacing: '0.3em', color: 'var(--fg-1)' }}>自分らしい一歩を。</span>
          </div>
        </div>
      </WaveFrame>
    </section>
  );
}

function Callout({ label, style }) {
  return (
    <div style={{ position: 'absolute', display: 'flex', alignItems: 'flex-end', gap: 8, ...style }}>
      <span style={{ width: 34, height: 1, background: 'var(--teal-700)', transform: 'rotate(-40deg)', transformOrigin: 'left bottom', position: 'relative', top: -2 }} />
      <span style={{ fontFamily: 'var(--font-latin)', fontWeight: 500, fontSize: 11, letterSpacing: '0.2em', color: 'var(--fg-1)', paddingBottom: 18, whiteSpace: 'nowrap' }}>{label}</span>
    </div>
  );
}

function PcIntro() {
  return (
    <section id="intro" style={{ ...pcWrap, display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 40, padding: '56px 40px 40px' }}>
      <div style={{ position: 'relative', height: 330 }}>
        <img src={IMG + 'motif-heart-pedestal.png'} alt="" style={{ position: 'absolute', left: 10, top: 10, width: 200, mixBlendMode: 'multiply', WebkitMaskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)', maskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)' }} />
        <Callout label="CHOICE" style={{ left: 200, top: 0 }} />
        <img src={IMG + 'motif-ribbon-pedestal.png'} alt="" style={{ position: 'absolute', left: 110, top: 100, width: 215, mixBlendMode: 'multiply', WebkitMaskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)', maskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)' }} />
        <Callout label="YOUR PACE" style={{ left: 300, top: 70 }} />
        <img src={IMG + 'motif-envelope-pedestal.png'} alt="" style={{ position: 'absolute', left: 260, top: 190, width: 225, mixBlendMode: 'multiply', WebkitMaskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)', maskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)' }} />
        <Callout label="NEW BEGINNING" style={{ left: 390, top: 160 }} />
      </div>
      <div style={{ paddingTop: 10, display: 'flex', flexDirection: 'column', gap: 22 }}>
        <SectionHeading align="left" title={<span style={{ fontSize: 26, whiteSpace: 'nowrap' }}>理想も、自分のペースも、<br />大切に。</span>} />
        <p style={{ margin: 0, fontSize: 13, lineHeight: 2, letterSpacing: '0.08em', color: 'var(--text-body)' }}>結婚のかたちは、ひとつじゃありません。<br />いつ、どんな方法で、どんな相手と。<br />大切なのは、まわりの正解ではなく、<br />あなたにとっての「しあわせ」を選ぶこと。</p>
        <p style={{ margin: 0, fontSize: 13, lineHeight: 2, letterSpacing: '0.08em', color: 'var(--text-body)' }}>このサイトでは、婚活アプリ・結婚相談所・出会いの考え方など、30代・40代からの婚活に役立つ情報を、やさしくわかりやすくお届けします。あなたのペースで、前向きな一歩を踏み出すきっかけになりますように。</p>
      </div>
    </section>
  );
}

function Band({ id, tone, children, style }) {
  const bg = tone === 'lilac' ? 'linear-gradient(180deg,var(--lilac-100),var(--lilac-50))' : 'linear-gradient(180deg,var(--peach-100),var(--peach-50))';
  return <section id={id} style={{ maxWidth: 1240, margin: '0 auto', padding: '0 12px', boxSizing: 'border-box' }}><div style={{ background: bg, borderRadius: 36, padding: '30px 0 40px', ...style }}>{children}</div></section>;
}

function PcChoose() {
  return (
    <Band id="choose" tone="lilac">
      <SectionHeading eyebrow="Choose your way" title="今の気持ちから、はじめよう" style={{ marginBottom: 30 }} />
      <div style={{ ...pcWrap, display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 36 }}>
        {D.choices.map(c => <ChoiceCard key={c.title} image={IMG + c.img + '.png'} title={c.title} body={c.body} cta={c.cta} />)}
      </div>
    </Band>
  );
}

function PcJournal() {
  return (
    <section id="journal" style={{ ...pcWrap, padding: '36px 40px 40px' }}>
      <SectionHeading eyebrow="Journal" title="その気持ちに、寄り添う読みもの" rule="none" style={{ marginBottom: 30 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 32 }}>
        {D.articles.map(a => <ArticleCard key={a.title} image={a.photo ? window.SHIAWASE_PHOTO[a.photo] : IMG + a.img + '.png'} category={a.category} date={a.date} title={a.title} excerpt={a.excerpt} />)}
      </div>
    </section>
  );
}

function PcCompare() {
  return (
    <Band id="compare" tone="peach" style={{ padding: '22px 0 26px' }}>
      <SectionHeading title="あなたに合う、出会いのかたち" rule="dash" style={{ marginBottom: 20 }} />
      <div style={{ ...pcWrap, maxWidth: 1180 }}>
        <div style={{ background: 'rgba(255,255,255,.9)', borderRadius: 22, boxShadow: 'var(--shadow-card)', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 1px minmax(0,1fr)', alignItems: 'stretch' }}>
          <CompareCard image={IMG + D.compare[0].img + '.png'} title={D.compare[0].title} body={D.compare[0].body} />
          <span style={{ background: 'var(--line-200)', margin: '20px 0' }} />
          <CompareCard image={IMG + D.compare[1].img + '.png'} title={D.compare[1].title} body={D.compare[1].body} />
        </div>
      </div>
    </Band>
  );
}

function PcFaq() {
  return (
    <section style={{ ...pcWrap, maxWidth: 880, padding: '30px 40px 30px' }}>
      <SectionHeading eyebrow="FAQ" title="よくあるご質問" style={{ marginBottom: 20 }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {D.faq.map(f => <FaqItem key={f.q} question={f.q} answer={f.a} />)}
      </div>
    </section>
  );
}

function PcFooter() {
  const l = { fontSize: 11, letterSpacing: '0.08em', color: 'var(--fg-1)', textDecoration: 'none' };
  return (
    <footer style={{ ...pcWrap, display: 'grid', gridTemplateColumns: 'minmax(0,1.3fr) 1px minmax(0,.8fr) 1px minmax(0,1.3fr)', gap: 36, padding: '20px 40px 40px', alignItems: 'start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, paddingLeft: 20 }}>
        <Logo layout="inline" size={24} src={IMG + 'logo-rings.png'} />
        <p style={{ margin: '0 0 0 68px', fontSize: 11, lineHeight: 1.9, letterSpacing: '0.1em', color: 'var(--text-body)' }}>自分らしい出会いで、<br />これからのしあわせを。</p>
      </div>
      <span style={{ background: 'var(--ink-300)', alignSelf: 'stretch' }} />
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>{D.nav.map(n => <a key={n} href="#" style={l}>{n}</a>)}</nav>
      <span style={{ background: 'var(--ink-300)', alignSelf: 'stretch' }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', columnGap: 32, rowGap: 9, justifyContent: 'start' }}>
          {['運営者情報', 'プライバシーポリシー', '免責事項', 'お問い合わせ'].map(n => <a key={n} href="#" style={l}>{n}</a>)}
        </div>
        <div style={{ borderTop: '1px solid var(--ink-300)', paddingTop: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}><span style={{ fontSize: 10, letterSpacing: '0.06em', color: 'var(--text-muted)' }}>当サイトはアフィリエイト広告を利用しています</span><span style={{ fontSize: 10, letterSpacing: '0.1em', color: 'var(--fg-1)' }}>© しあわせの選び方</span></div>
      </div>
    </footer>
  );
}

function PcHome() {
  return (
    <div className="shiawase-grid-bg" style={{ minHeight: '100vh', fontFamily: 'var(--font-body)', overflowX: 'hidden' }}>
      <PcHeader /><PcHero /><PcIntro /><PcChoose /><PcJournal /><PcCompare /><PcFaq /><PcFooter />
    </div>
  );
}
Object.assign(window, { PcHome });
