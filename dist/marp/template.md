---
marp: true
theme: obi1
size: 16:9
paginate: true
header: Cloudflare MCP Portal
footer: obi1.dev
---

<!-- _class: title -->
<!-- _header: "" -->
<!-- _footer: "" -->
<!-- _paginate: skip -->

# Cloudflare の MCP Server Portal を<br>ハンズオンで試す

obi1 · Web Application Engineer
<time>2026.07.21</time>　<span class="tags">Cloudflare MCP</span>

---

## この発表で話すこと

- MCP Server Portal で **複数の MCP サーバーを一つの入口** にまとめる
- Cloudflare Access でアクセスを制御する
- 実際に試してつまずいた点

> 試してみた技術や、開発のなかで得た学びをまとめています。

---

<!-- _class: chapter -->

<div class="label">01</div>

## 環境を準備する

Access のアプリケーションとポータルを作成します

---

## API トークンを発行する

<div class="code-title">wrangler.jsonc</div>

```jsonc
{
  "name": "mcp-portal-demo",
  "main": "src/index.ts",
  "compatibility_date": "2026-07-01" // 互換日付
}
```

<div class="callout warning"><span>⚠️</span><p>トークンは <code>.dev.vars</code> に置き、リポジトリにコミットしないでください。</p></div>

---

<!-- _class: split -->

## 比べてみる

<div class="columns">
<div>

### 個別に接続

- サーバーごとに URL と認証を設定
- クライアント側の設定が増える

</div>
<div>

### ポータル経由

- 入口は一つ
- 認可は Access に集約

</div>
</div>

---

## 設定項目

| 項目 | 値 | 備考 |
| --- | --- | --- |
| Portal 名 | `demo-portal` | 任意 |
| 認証 | Cloudflare Access | One-time PIN |
| 接続先 | 3 サーバー | `tools/list` で確認 |

<div class="callout"><span>ℹ️</span><p>アカウント ID はダッシュボードの右側に表示されています。</p></div>

---

## 関連記事

<ul class="rows">
<li><time>2026.07.21</time><b>Cloudflare の MCP Server Portal をハンズオンで試す</b><span class="tags">Cloudflare MCP</span></li>
<li><time>2026.07.18</time><b>Vercel を Cloudflare のプロキシ配下に置く</b><span class="tags">Vercel DNS</span></li>
<li><time>2026.06.30</time><b>Cloudflare Pages を Terraform で管理する</b><span class="tags">Terraform</span></li>
</ul>

---

<!-- _class: center -->

# 入口を一つにすると、<br>管理がぐっと楽になる

<p class="caption">まとめ</p>

---

<!-- _class: end -->
<!-- _header: "" -->
<!-- _footer: "" -->

<img class="avatar" src="obi1-profile.png" alt="obi1のプロフィール画像">

## obi1

Web Application Engineer
[github.com/obi1-dev](https://github.com/obi1-dev)　[obi1.dev](https://obi1.dev)
