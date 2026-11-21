# TableOfContents

記事の h2 / h3 から作る目次。PC では本文の右に `position: sticky`（上 32px）で置き、1023px 以下では本文の前に折りたたみで置く。

- **PC**: 左に `line` の罫線、内側 24px。見出し「目次」は 14px / 500。項目は `caption`（13px / 1.8）・`muted`、hover と focus で `accent`＋下線。h3 は 14px 字下げ。項目間 12px。
- **SP**: `<details class="toc-mobile disclosure">`。枠は `line-strong`、`radius-md`。summary は 44px 以上で、右端の山形（1.5px の線）が開閉で 180° 回る（200ms）。
- 開閉状態は `details` / `aria-expanded` で伝える。reduced-motion では回転の補間を止める。
- 注意: `line-strong` は白地に対して 2.2:1 で、操作部品の境界の 3:1 に届かない（ソースのまま）。

ソース: `src/layouts/ArticleLayout.astro`、`src/scripts/disclosures.ts`。
