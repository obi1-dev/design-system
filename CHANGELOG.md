# Changelog

## 1.1.0 — 2026-11-21

ブランドを「冬空と稜線」に。

- 色: `accent` を青灰 #39566b から冬空 #24538f に変更。`accent-deep`（#1d4577）・`accent-faint`（#86a3c9）・`forest`（#34503f）・`snow`（#eef2f6）・`sunrise`（#a85f3f）を追加。
- 山のモチーフを追加: 八ヶ岳連峰の稜線（`src/assets/Mountains/yatsugatake.svg`）と蓼科山のシルエット（`tateshina.svg`）。`dist/motifs.js`（パスデータ）と `dist/motifs/*.svg` を配布。
- Marp テーマを刷新: 雪の額縁に白い板、表紙・章扉・引用・キーワード・締めは冬空の全面。表紙に八ヶ岳、章扉と締めに蓼科山。用語・図・大きな数字の型を追加。テンプレートは 12 枚。
- ビルド: Marp テーマのモチーフ背景（`/* motif:NAME */`）をトークンとモチーフから作り直すようにした（`scripts/motifs.mjs`）。
- OG 画像の実例を、冬空の地に蓼科山を置く新しいデザインに差し替え。

## 1.0.0 — 2026-11-21

最初の同期。

- アーティファクト「obi1.dev デザインシステム」の内容を `src/` にミラー: トークン（色 15・文字スタイル 16・余白 12・角丸 3・レイアウト 5・ブレークポイント 2）、ブランドブック、コンポーネント 12 種（Header / Footer / SectionHeading / ArticleRow / ArticleHeading / TableOfContents / AuthorCard / CodeBlock / Callout / LinkCard / Details / Slides）、アセット（Logos / Profile / OG / Marp）。
- `dist/` に配布物を追加: `tokens.css`、`tailwind.css`（Tailwind v4 `@theme`）、`fonts.css`、`tokens.js` + 型、`tokens.json`、Marp テーマ `marp/obi1.css` とテンプレート。
