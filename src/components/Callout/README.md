# Callout

本文中の補足と注意。Zenn 互換の `:::message`（情報）と `:::message alert`（注意）から生成する。

- **情報**: `callout-info-bg` ＋ `callout-info-line` の枠。アイコン ℹ️。
- **注意**: `callout-warning-bg` ＋ `callout-warning-line` の枠。アイコン ⚠️。
- 共通: `radius-md`、内側 16px × 20px、アイコンと本文の間 `space-3`、文字は `ink`（どちらの地でも 14:1 以上）。
- 色の差は淡いので、種類はアイコンと文言でも伝える。色だけに頼らない。

ソース: `src/plugins/remark-zenn-message.ts`。
