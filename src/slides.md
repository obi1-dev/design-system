# スライド（Marp）

発表資料もサイトと同じブランドで作る。Marp のテーマ `obi1`（`assets/Marp/obi1.css`）とテンプレート（`assets/Marp/template.md`）を使う。色・書体・角丸はトークンと同じ値で、山のモチーフもテーマに入っている。

統一感は「額縁」と「型」で出す。どのスライドにも雪の額縁か冬空の全面のどちらかがあり、タイトルの位置と書き方は毎回同じにする。

## 使い方

1. `obi1.css` と `template.md` を同じフォルダに置き、`template.md` をコピーして書き始める。締めのスライドで使うプロフィール画像（Profile グループの `obi1-profile.png`）も同じフォルダに置く。
2. 書き出しはテーマを指定し、HTML を有効にする（callout・図・数字・2 カラム・記事行は HTML で書くため）。

```bash
npx @marp-team/marp-cli --html --theme-set obi1.css template.md -o slides.html
```

```bash
npx @marp-team/marp-cli --html --theme-set obi1.css template.md --pdf --allow-local-files
```

配布パッケージを入れたリポジトリでは `--theme-set node_modules/@obi1-dev/design-system/dist/marp/obi1.css` を指定する。VS Code の Marp 拡張なら、`settings.json` の `markdown.marp.themes` に `obi1.css` を加え、`markdown.marp.enableHtml` を `true` にする。

## 額縁

- **白い板**（本文のスライド）: `snow` の額縁の内側に、`line` の縁の白い板。額縁の下の帯に、左にサイト名（footer）、右にページ番号（数字だけ）。
- **冬空の全面**（区切りのスライド）: `accent` の全面に白文字。表紙・章扉・引用・キーワード・締め。
- 上部の header は使わない。

## スライドの型

`<!-- _class: … -->` で切り替える。

| class | 地 | 用途 |
| --- | --- | --- |
| `title` | 冬空 | 表紙。左上にタイトル、下端に八ヶ岳連峰の稜線と等高線 |
| （なし） | 白い板 | 本文。左上にタイトル（600・下線なし）、直下の太字 1 行がリード |
| `chapter` | 冬空 | 章扉。`<div class="label">01</div>` の番号（朝焼けの短い線つき）と見出し、右に蓼科山 |
| `term` | 白い板 | 用語。等幅の大きな英字（h1）と読み、太字の定義、箇条書き |
| `split` | 白い板 | 2 カラム。`<div class="columns">` の間に縦罫線 |
| `center` | 白い板 | 一言のまとめ（中央揃え） |
| `quote` | 冬空 | 引用。白い左罫線、出典は等幅 |
| `keyword` | 冬空 | キーワード 1 語を中央に大きく |
| `end` | 冬空 | 締め。左にアバター・名前・リンク、右に蓼科山 |

## 部品

- **リード**: タイトル直下の段落を `**…**` だけで書く。
- **図**: `<div class="flow">` に `<span class="box">` と `<span class="arrow">→</span>` を並べる。強調する箱は `box strong`（冬空の塗り）、1 つだけ目立たせるなら `box sun`（朝焼けの枠）。
- **大きな数字**: `<div class="kpi"><div><b>44<small>ms</small></b><span>説明</span></div>…</div>`。数字は等幅の冬空。
- **callout**: `<div class="callout">`（情報）／`<div class="callout warning">`（注意）。
- **コード**: `<div class="code-title">ファイル名</div>` の直後にコードブロック。
- **記事行**: `<ul class="rows">` に `<li><time>…</time><b>…</b><span class="tags">…</span></li>`。
- **強調**: `**太字**`（600）と、`*斜体*`（朝焼け色になる。1 枚に 1 か所まで）。

## 寸法

- 16:9・1280×720（4:3 も可）。額縁は上左右 20px・下 56px。板の内側の余白は 52px / 64px。
- 文字: 本文 28px / 1.8、タイトル（h2）38px / 600、表紙 60px / 700、章扉 56px / 700、キーワード 72px、等幅ラベル 18–20px。
- コードの色分けは Marp 標準の highlight.js を Shiki `github-light` に近い色へ寄せている。

## 守ること

- 1 枚に詰め込まない。はみ出しそうならスライドを分ける。
- 色を足さない。冬空・森・雪・朝焼けと骨格の色だけを使う。
- 影・グラデーション・背景写真は使わない。画像は `img.frame` で `line` の枠をつける。
- 山のモチーフは冬空の地のスライドだけ。文字と重ねない。
