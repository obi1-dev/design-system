# ArticleRow

記事一覧の 1 行。サムネイルを使わず、日付・タイトル・技術タグを整列させて文字の強弱だけで探しやすくする。

- **列**: `118px / 1fr / 180px`、列間 `space-6`。上下 `space-7`（28px）、下端に `line` の罫線。
- **日付**: `mono-meta`・`muted`、`YYYY.MM.DD`（Asia/Tokyo）。日付がない記事は `—` を `aria-hidden` で置く。
- **タイトル**: `row-title`（19px / 600）・`ink`。hover で `accent` と下線。長いタイトルは自然改行（`overflow-wrap:anywhere`）。
- **タグ**: `mono-meta`・`accent`、右揃え。PC 以外は左揃え。
- **レスポンシブ**: 1023px 以下は `105px / 1fr` の 2 列でタグはタイトルの下。767px 以下は 1 列、上下 22px。

利用側が用意するもの: `slug`、`title`、`topics[]`、任意の `publishedAt`。ソース: `src/components/ArticleCard.astro`。
