# Details

本文の折りたたみ。Zenn 互換の `:::details タイトル` から `<details class="details-container">` を生成する。

- `line` 枠、`radius-md`。summary は `surface` の地、内側 12px × 20px、500。
- 中身は左右 20px の余白をとって本文と同じスタイルで流す。
- 開閉はブラウザ標準の `details` に任せ、JS に依存しない。

ソース: `src/plugins/remark-zenn-message.ts`。
