# shuffle

shuffle は、React + Vite で構築されたフロントエンドアプリケーションです。

## プロジェクト概要

このプロジェクトは、JavaScript を中心に実装された Web アプリです。  
Vite を利用して高速な開発体験を実現し、React で UI を構築しています。

## 使用技術

- React 18
- Vite 5
- JavaScript (ES Modules)
- HTML / CSS
- ESLint

## セットアップ

前提:

- Node.js 18 以上（推奨）
- npm

依存関係をインストールします。

```bash
npm install
```

## 実行方法

### 開発サーバー起動

```bash
npm run dev
```

起動後、表示されるローカルURL（通常 `http://localhost:5173`）にアクセスしてください。

### 本番ビルド

```bash
npm run build
```

ビルド成果物は `dist/` に出力されます。

### ビルド結果のプレビュー

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

### デプロイ

```bash
npm run deploy
```

`gh-pages` を利用して `dist/` を公開します。

## ディレクトリ構成（主要）

```text
.
├── public/            # 静的アセット
├── src/               # アプリ本体
├── index.html         # エントリHTML
├── vite.config.js     # Vite設定
└── package.json       # スクリプト・依存関係
```

## 補足

必要に応じて、今後このREADMEに以下を追記できます。

- 画面キャプチャ
- 詳細な機能一覧
- コントリビューション手順
- ライセンス情報
