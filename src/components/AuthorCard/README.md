# AuthorCard

全記事の本文直後に表示する「この記事を書いた人」カード。白地（`paper`）、`line` の 1px 枠、`radius-md`（4px）、影なし。

- **内容**: ラベル（`caption`・500・`muted`）、72px のプロフィール画像（`avatar-size`、白地・`line` 枠・4px 角丸・全身が切れない `object-fit: contain`）、名前（`section-title` 25px）、肩書き（`caption`・`muted`）、紹介文（`body-sm`）、リンク（GitHub ↗ / X ↗ / プロフィールを見る →）。
- **リンク**: 各リンクは `hit-target`（44px）以上、下線あり。
- **余白**: 内側 28px × 32px、本文との間 `space-16`。SP は 24px × 20px、本文との間 48px。
- **データ**: `src/data/author.ts` に集約し、トップのプロフィールと同じ紹介文を使う。記事ごとの手動追記はしない。

ソース: `src/components/AuthorCard.astro`。
