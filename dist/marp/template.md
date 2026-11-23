---
marp: true
theme: obi1
size: 16:9
paginate: true
footer: obi1.dev
---

<!-- _class: title -->
<!-- _paginate: skip -->

# Cloudflare の MCP Server Portal を<br>ハンズオンで試す

obi1 · Web Application Engineer
<time>2026.07.21</time>　<span class="tags">Cloudflare MCP</span>

---

## 今日話すこと

1. MCP Server Portal とは
2. 環境を準備する
   - Access のアプリケーション
   - ポータルの作成
3. 試してつまずいた点
4. まとめ

---

<!-- _class: chapter -->

<div class="label">01</div>

## MCP Server Portal とは

複数の MCP サーバーを一つの入口にまとめる

---

<!-- _class: term -->

# Throughput

スループット

**単位時間あたりにどれだけ処理できるかを示す量**

- 1 秒あたりのリクエスト数（rps）で測ることが多い
- 並列数を増やすと大きくなる
- 遅延（レイテンシー）とは別の指標

---

## API トークンを発行する

**トークンは用途ごとに分け、権限を最小にする**

<div class="code-title">wrangler.jsonc</div>

```jsonc
{
  "name": "mcp-portal-demo",
  "compatibility_date": "2026-07-01"
}
```

<div class="callout warning"><span>⚠️</span><p>トークンは <code>.dev.vars</code> に置き、リポジトリにコミットしないでください。</p></div>

---

## リクエストの流れ

**入口は一つ、認可は Access に集約する**

<div class="flow">
  <span class="box">Client</span><span class="arrow">→</span>
  <span class="box strong">Portal</span><span class="arrow">→</span>
  <span class="box">Access</span><span class="arrow">→</span>
  <span class="box">MCP Server</span>
</div>

<div class="kpi"><div><b>3</b><span>接続した MCP サーバー</span></div><div><b>44<small>ms</small></b><span>ポータル経由の追加遅延</span></div></div>

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
- 認可は Access に *集約* できる

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

<!-- _class: quote -->

> 計測せよ。計測するまで高速化のためにチューニングしてはいけない。
>
> — Rob Pike, Notes on Programming in C

---

<!-- _class: keyword -->

# 入口は一つに

まとめ

---

<!-- _class: end -->
<!-- _footer: "" -->

<img class="avatar" src="obi1-profile.png" alt="obi1のプロフィール画像">

## obi1

Web Application Engineer
[github.com/obi1-dev](https://github.com/obi1-dev)　[obi1.dev](https://obi1.dev)
