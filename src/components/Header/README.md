# Header

サイト名とグローバルナビを並べる、全ページ共通のヘッダー。下端に `line` の 1px 罫線を引き、影や背景色はつけない。

- **構成**: 左に文字のサイト名（`brand` スタイル、`ink`）、右にナビ「記事」「プロフィール」「GitHub ↗」（`ui` 14px、`ink`）。
- **高さ**: `header-height`（100px）。767px 以下は 76px、サイト名は 25px。
- **ナビの状態**: 通常は下線なし。hover で `accent` に変わり下線が現れる（150ms）。トップページでは「記事」が `#articles` へのページ内リンクになる。
- **SP**: 767px 以下はナビを隠し、`<details class="mobile-menu disclosure">` の「メニュー」＋3本線アイコンに切り替える。開くとナビが全幅で縦に並び、各項目の上に `line` の罫線。開閉状態は `aria-expanded` 相当を `details` で伝え、`summary` は 44px 以上。
- **外部リンク**: `↗` を `aria-hidden` で添え、`<span class="sr-only">（新しいタブで開く）</span>` を必ず入れる。

利用側が用意するもの: 現在のパス（トップかどうか）。ソース: `src/components/Header.astro`。
