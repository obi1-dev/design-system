# SectionHeading

トップの各セクション（記事・プロフィール）の頭に置く見出し。`mono-label`（JetBrains Mono 15px・字間 0.035em）の英語ラベルの右に、`ink` の 1px 罫線（`.section-rule`）が残りの幅いっぱいに伸びる。

- 件数がある場合は右端に `mono-meta` の `muted` で添える（SP では非表示）。
- 罫線は他の区切り（`line`）より濃い `ink`。ページ内の大きな区切りはこの罫線だけが担う。
- SP（767px 以下）はラベル 13px・字間 0、要素間 16px。

ソース: `src/pages/index.astro`（`.section-heading`）。
