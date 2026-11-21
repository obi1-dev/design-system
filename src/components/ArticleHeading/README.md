# ArticleHeading

記事ページの冒頭。一覧へ戻るリンク、記事タイトル（h1）、日付と技術タグのメタ行で構成する。

- **タイトル**: `article-title`（clamp(28px, 3vw, 38px) / 1.55 / 700 / -0.035em）。`text-wrap: pretty` で行末の孤立を避ける。SP は 27px。
- **メタ行**: `mono-meta`。日付は `muted`、タグは `accent`。項目間 8px × 16px。
- **戻るリンク**: `ui`（14px）・下線あり・`accent`。
- 余白: 上 28px、下 36px（SP は 24px / 28px）。

ソース: `src/layouts/ArticleLayout.astro`。
