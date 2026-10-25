# しあわせの選び方 — Design System

**しあわせの選び方** is a marriage-hunting (婚活) information site for women in their 30s and 40s. It helps readers choose between 婚活アプリ (dating apps) and 結婚相談所 (matchmaking agencies) according to their feelings, budget and the kind of support they want. The site runs on affiliate advertising (disclosed in the footer).

Mood: dreamy yet reassuring — mint + pale peach, graph-paper background, wavy frames, soft 3D clay-like motifs, generous whitespace.

## Sources
- `uploads/exec-91f310f6-3983-4bde-b5df-7846cfcb61cb.png` — PC top-page mockup (839×1875)
- `uploads/exec-94641f1e-c85f-4cfd-b42a-2cf7a3208785.png` — Smartphone top-page mockup (768×2046)
- Brief: small text and dates in the mockups are placeholders. If person photography is used, it must be real (non-AI) free stock with verified license terms. No codebase, Figma or font files were provided.

## Index
- `styles.css` — entry point (imports only) → `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — React primitives (see below)
- `ui_kits/website/` — PC (`index.html`) and SP (`mobile.html`) top-page recreations
- `assets/illustrations/` — 3D motifs and logo rings cropped from the mockups
- `thumbnail.html`, `SKILL.md`

## Components
- **brand/** — Logo
- **core/** — Button, IconButton, Icon, Tag, WaveFrame, SectionHeading
- **cards/** — ChoiceCard, ArticleCard, CompareCard
- **disclosure/** — FaqItem

Intentional additions: **Icon** (small Lucide-geometry wrapper so arrows/chevrons/plus are consistent); **WaveFrame** is the reusable form of the mockups' wavy panel.

## CONTENT FUNDAMENTALS
- Language: Japanese, soft です/ます and gentle plain-form fragments. Headlines are short poetic statements ending in 。or 、: 「これからのしあわせは、わたしが選ぶ。」「理想も、自分のペースも、大切に。」
- Voice: first person **わたし** for the reader's own declaration (hero, CTA 「わたしに合う婚活を見つける」); **あなた** when the site speaks to her (「あなたに合う、出会いのかたち」「あなたのペースで」).
- Hiragana-leaning: しあわせ, ひとつ, やさしく — chosen over kanji to soften the page.
- Empathetic, non-pushy: acknowledge feelings first (「まだ迷っている」「婚活アプリに疲れたとき」), then offer a gentle next step (「〜してみる」「〜ませんか」). Avoid urgency, scarcity or pressure words.
- Reassure about age: 「今からでも遅くありません」 — positive framing of 30s/40s.
- English appears only as spaced uppercase eyebrows: CHOOSE YOUR WAY, JOURNAL, FAQ, CHOICE, YOUR PACE, NEW BEGINNING, COMPARE.
- CTAs: verb phrase + arrow — 「婚活アプリを見てみる →」「記事を読む →」「読みものをもっと見る ›」.
- Line breaks are set intentionally at phrase boundaries; keep them.
- No emoji. Hearts appear only as 3D objects, never as text glyphs.
- Ad disclosure 「当サイトはアフィリエイト広告を利用しています」 lives quietly in the footer, just above ©, in muted 9–10px text — never in the hero.

## VISUAL FOUNDATIONS
- **Color**: mint (#A9D5D1 hero) and deep teal ink (#1F4F55) for all headings; coral (#D9786C) is the single action color (CTAs, arrow buttons, links, heading dash). Pale peach (#FBEAE5) and pale lilac (#F6F3FA) are section bands. Page is warm cream (#FCF8F6). Body text is grey-teal (#5E7275), never black.
- **Type**: Zen Maru Gothic (rounded) for display and headings with wide tracking (hero 0.14–0.16em, headings 0.08em); Zen Kaku Gothic New for body at 12–14px / 1.95 line-height / 0.06em; Quicksand for Latin eyebrows in caps at 0.28em.
- **Background**: a faint graph-paper grid (22px cells, #F0E4E0 lines) across the whole page. Bands sit on top as large rounded rectangles (radius ~32–36px) with a very subtle top-to-bottom tint.
- **Wave frame**: the hero and every illustration thumbnail have softly undulating edges and a white 4–7px outline, plus a diffuse mint drop-shadow on the hero. Text-only containers are never wavy.
- **Imagery**: soft 3D pastel renders — hearts, ribbons, envelopes, arches with sky, stairs, clouds, books, phones — on mint pedestals or mint grounds. Matte, airy lighting, no grain. Warm-cool balance: mint grounds with pink/peach objects. Photos of people are not in the mockups; if added, use licensed real stock in the same soft, bright palette.
- **Cards**: white, radius 12–16px, no border or a 1px warm hairline (#E9DFDB), very soft teal-tinted shadow (0 2–6px 10–20px at 6–7%). PC cards are borderless stacks (image → title → text → CTA) centered; SP cards are white horizontal rows with a chevron.
- **Corner radii**: 8 (thumb rows), 12–14 (cards, FAQ), 20–22 (compare panel), 32–36 (bands, hero), pill for buttons.
- **Shadows**: soft and low; the coral CTA has its own warm shadow plus an inner white ring. No inner shadows otherwise.
- **Spacing/layout**: generous — sections separated by ~40–56px, content max ~1120px, 3-column grids on PC, single column with 20px gutters on SP. PC header has nav split around a centered logo. SP header is sticky with a light blur.
- **Decorative lines**: thin teal callout lines with spaced Latin labels; vertical text 「自分らしい一歩を。」 with a hairline in the PC hero.
- **Hover**: buttons darken slightly (coral 500→600, outline fills peach); trailing arrows nudge 3px right; card images scale 1.03 over 600ms. **Press**: 1px downward shift. Easing cubic-bezier(.33,.8,.4,1); 160–260ms. No bounces, no large motion.
- **Transparency/blur**: only the sticky SP header (88% cream + 8px blur) and menu overlay.
- **Gradients**: only the barely-there tint on bands. No bold gradients.

## ICONOGRAPHY
- Mockups use only a few thin line icons: right arrow (CTAs, coral circle buttons), chevron-right (SP rows), chevron-down (SP FAQ), plus (PC FAQ), hamburger (SP).
- No icon assets were supplied; `Icon` reproduces **Lucide** geometry (1.6px stroke, round caps) — a close match to the mockups. **Substitution flagged.**
- Illustrative meaning (hearts, letters, phones) is carried by 3D illustrations, not icons. No emoji, no unicode icon glyphs.

## Logo
The mockups show interlocking pink + mint rings above/beside the wordmark 「しあわせの選び方」 (SP adds a small hand-drawn heart flourish). No vector logo was provided: `assets/illustrations/logo-rings.png` is a low-res crop from the PC mockup, and the wordmark is set in Zen Maru Gothic. Replace with official files when available.

## Fonts
No font files were provided. Substitutes from Google Fonts: Zen Maru Gothic (display), Zen Kaku Gothic New (body), Quicksand (Latin). **Flagged** — please supply the intended fonts if different.
