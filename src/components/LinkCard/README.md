# LinkCard

本文中に URL だけの段落を書くと、ビルド時に OGP を取得して展開するカード。

- 白地、`line` 枠、`radius-md`。hover で枠が `accent` に変わる（150ms）。下線は出さない。
- タイトル `body-sm` 600・`ink`、説明は 13px・`muted` で 2 行まで、下にファビコン（16px）とドメイン。
- OGP 画像は右に 120px 幅で置き、767px 以下では隠す。

利用側が用意するもの: URL のみ（取得は remark プラグイン）。ソース: `src/plugins/remark-link-card.ts`。
