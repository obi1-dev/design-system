# obi1 design system

obi1.dev とその周辺のプロダクト（スライド、ポートフォリオなど）で共有するデザインシステム。骨格は「静かな編集室」（白地、墨の文字、1px の罫線）、ブランドは「冬空と稜線」（冬空の青を主役に森・雪・朝焼け、八ヶ岳連峰と蓼科山のモチーフ）。

## 正（source of truth）

**正は Claude の Design System アーティファクト「obi1.dev デザインシステム」**: https://claude.ai/artifact/3x4vhEzYhJ7zP1Txyx6W7u

- このリポジトリはそのミラーと、そこから生成した配布物を置く場所です。
- 値やガイドラインの変更はアーティファクトで行い、Claude が同期のプルリクエストを出します（一方向）。
- `src/` を手で編集しないでください。次の同期で上書きされます。

```
Claude アーティファクト（正）
   │  Claude が読み取り → プルリクエスト
   ▼
src/（ミラー） ── scripts/build.mjs ──▶ dist/（配布物）
   ▼
obi1.dev ／ スライド ／ ポートフォリオ …
```

## 構成

| パス | 内容 |
| --- | --- |
| `src/` | アーティファクトの `project/` をそのまま写したもの。`tokens.json`、ブランドブック（`README.md`・`slides.md`）、コンポーネントのガイドラインとプレビュー、アセット |
| `src/design-system.json` | アーティファクトの目次。アセットの blob ID を持ち、次回の同期で差分を見るのに使う |
| `scripts/build.mjs` | `src/tokens.json` から `dist/` を生成する（依存なし） |
| `dist/` | 配布物（コミットする） |
| `SYNC.md` | 最後に同期したアーティファクトの版と日時 |

## 配布物

| import | 内容 |
| --- | --- |
| `@obi1-dev/design-system` | トークンの値（JS + 型）。OG 画像の生成などコードから使う |
| `@obi1-dev/design-system/tokens.css` | CSS 変数（`--ink` `--accent` `--space-4` …）と文字スタイルのクラス（`.text-prose` …） |
| `@obi1-dev/design-system/tailwind.css` | Tailwind CSS v4 の `@theme`（`bg-paper` `text-ink` `font-mono` `rounded-md` `max-tablet:` …）と CSS 変数 |
| `@obi1-dev/design-system/fonts.css` | Google Fonts の読み込み（Inter / Noto Sans JP / JetBrains Mono） |
| `@obi1-dev/design-system/tokens.json` | トークンの値（JSON） |
| `@obi1-dev/design-system/motifs` | 山のモチーフのパスデータ（JS + 型）。1280×720 の座標で、八ヶ岳 `ridge`・`contour-1`・`contour-2`、蓼科山 `shape`・`ridge` |
| `@obi1-dev/design-system/motifs/*.svg` | トークンの色で塗った完成形の SVG（`yatsugatake-cover.svg`・`tateshina.svg`）と元データ（`*-source.svg`） |
| `@obi1-dev/design-system/marp/obi1.css` | Marp テーマ。`:root` と山のモチーフの背景はトークンとモチーフから生成 |
| `@obi1-dev/design-system/marp/template.md` | Marp のサンプル 12 枚（`obi1-profile.png` も同梱） |

ブレークポイントのトークンは「以下」（`bp-tablet` = 1023px 以下）。Tailwind では `max-tablet:` / `max-mobile:` が同じ範囲になるよう、`@theme` には 1px 足した値を出しています。

## 使い方

Git のタグを指定して入れます（npm には公開していません）。

```bash
pnpm add github:obi1-dev/design-system#v1.0.0
```

Tailwind v4 のプロジェクト:

```css
@import "@obi1-dev/design-system/fonts.css";
@import "tailwindcss";
@import "@obi1-dev/design-system/tailwind.css";
```

コードから値を使う:

```ts
import { tokens } from "@obi1-dev/design-system";
import { motifs } from "@obi1-dev/design-system/motifs";
tokens.color.accent; // "#24538f"（冬空）
motifs.tateshina.shape; // 蓼科山のシルエットの path（viewBox は motifs.viewBox）
```

Marp:

```bash
npx @marp-team/marp-cli --html --theme-set node_modules/@obi1-dev/design-system/dist/marp/obi1.css slides.md
```

## 開発

```bash
node scripts/build.mjs
```

`dist/` は生成物ですがコミットします（Git 依存でビルドなしに使えるように）。CI で `src/` と `dist/` がずれていないかを確認します。

## バージョン

`package.json` の `version` と Git タグ（`v1.2.3`）を揃えます。

- パッチ: 既存の値の調整、文言の修正
- マイナー: トークン・コンポーネント・アセットの追加
- メジャー: トークンの削除・名前の変更

変更内容は `CHANGELOG.md` に書きます。
