# スライド（Marp）

発表資料も Web と同じ「静かな編集室」で作る。Marp のテーマ `obi1`（`assets/Marp/obi1.css`）とテンプレート（`assets/Marp/template.md`）を使う。色・書体・角丸はトークンと同じ値で、テーマの `:root` に写してある。

## 使い方

1. `obi1.css` と `template.md` を同じフォルダに置き、`template.md` をコピーして書き始める。最後のスライドで使うプロフィール画像（Profile グループの `obi1-profile.png`）も同じフォルダに置く。
2. 書き出しはテーマを指定し、HTML を有効にする（callout・2 カラム・記事行は HTML で書くため）。

```bash
npx @marp-team/marp-cli --html --theme-set obi1.css template.md -o slides.html
```

```bash
npx @marp-team/marp-cli --html --theme-set obi1.css template.md --pdf --allow-local-files
```

VS Code の Marp 拡張なら、`settings.json` の `markdown.marp.themes` に `obi1.css` を加え、`markdown.marp.enableHtml` を `true` にする。

## スライドの型

`<!-- _class: … -->` で切り替える。型のない普通のスライドは h2 の下に `line` の罫線が入る。

| class | 用途 | Web での元 |
| --- | --- | --- |
| `title` | 表紙。上下の細い罫線の間にタイトルを左揃え | OG 画像（記事用） |
| （なし） | 本文。h2＋罫線、箇条書き・コード・表 | 記事本文（`.prose`） |
| `chapter` | 章扉。`<div class="label">01</div>` の等幅番号と `ink` の罫線 | SectionHeading |
| `split` | 2 カラム。`<div class="columns">` の間に `line` の縦罫線 | トップのプロフィール欄 |
| `center` | 一言のまとめ。中央揃え | トップのヒーロー（PC） |
| `end` | 締め。72px 枠の画像を拡大したアバター、名前、リンク | AuthorCard |

部品: `.callout`（情報）/ `.callout.warning`（注意）、`.code-title` ＋コードブロック（ファイル名つき）、`<ul class="rows">`（日付・タイトル・タグの記事行）、`.tags`（等幅・`accent`）、`.caption`（20px・`muted`）。

## 寸法

- 16:9・1280×720（4:3 も可）。余白は上 112px・左右 96px・下 96px。
- 文字: 本文 28px / 1.8、h2 40px / 700、表紙 h1 64px、章扉 h2 56px、等幅ラベル 18–20px。Web の比率（本文 17 : h2 25）を保って拡大している。
- header は等幅 18px・`muted` で上に `line` の罫線、footer は左にサイト名（`brand` スタイル）、右にページ番号（等幅「n / 総数」）。表紙・章扉・締めではページ番号を出さない。
- コードの色分けは Marp 標準の highlight.js を Shiki `github-light` に近い色へ寄せている。

## 守ること

- 1 枚に詰め込まない。はみ出しそうならスライドを分ける（Marp は自動で縮めない要素がある）。
- 色を足さない。強調は `**太字**`（600）か `*斜体*`（`accent` の色になる）だけ。
- 影・グラデーション・背景画像は使わない。画像は `img.frame` で `line` の枠をつける。
