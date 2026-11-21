# CodeBlock

記事本文のコード。Shiki の `github-light` でハイライトし、白地・`line` 枠・`radius-md` の箱に入れる。

- **ブロック**: `code` スタイル（JetBrains Mono 13px / 1.85）、内側 20px × 24px（SP は 16px）。長い行は折り返さず、ブロック内だけ横スクロール。ページ全体は横にはみ出させない。
- **ファイル名**: Markdown で ```` ```ts title=src/foo.ts ```` と書くと、上に `.code-block-title`（`code-title-bg` / `code-title-ink`、`mono-meta`）のバーがつき、角丸は上下で分ける。
- **インラインコード**: 本文の 0.85em、`code-bg` に `code-ink`、`radius-sm`（3px）。
- プレビュー内の色は Shiki github-light の値（トークン外）。

ソース: `astro.config.mjs`（shikiConfig）、`src/plugins/remark-code-title.ts`。
