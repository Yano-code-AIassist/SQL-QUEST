# SQL QUEST ― データ世界の冒険者 ―

SQL初心者向けの学習アドベンチャー。現在は **T01: 開発環境と起動確認画面** のみ実装しています。
ミッション、SQL実行、採点、保存は未実装です。

## 起動

Node.js 22.12以降が必要です。開発時の確認環境はNode.js 24.20.0 / npm 11.19.0です。
このフォルダーをPowerShellで開き、実行します。

```powershell
npm ci
npm run dev
```

初回の依存インストール済みなら `npm run dev` だけで起動できます。
URL: http://127.0.0.1:5173/
停止は `Ctrl+C`。5173番が使用中の場合は起動しません。既存サーバーを確認してください。

## 自動チェック

```powershell
npm run check
```

TypeScript確認→本番ビルド→Node.js標準テストの順で実行。
テストはReactによる画面描画と、ビルドしたHTMLが参照するJS・CSSの存在・内容の有無を確認します。
ブラウザへのHTTP配信は、下記の手動確認で別途確認します。

```powershell
npm run build
npm run preview
```

本番ビルドの確認URL: http://127.0.0.1:4173/
`npm test` を個別実行するときは、その前に `npm run build` が必要です。

## 手動確認（T01）

1. 開発URLを開く。
2. 「SQL QUEST」「データ世界の冒険者」「冒険の準備中」が表示される。
3. 日本語が文字化けせず、文字の重なり・欠けがない。
4. 再読み込みしても同じ画面が表示される。
5. ブラウザの開発者ツールでエラーがない。
6. 本番ビルドの確認URLでも同じ画面が表示される。

T01は2026-11-24にユーザーから「動作確認OK」の回答を受け、GitHubへの保存も完了しました。
後続の各機能でも、自動テストとユーザーの手動確認後にコミット・プッシュします。

## 開発管理

- [設計書の参照](docs/design.md)
- [WBSと進捗計算](docs/wbs.md): MVP 1/24（4.2%）、全12ステージ 1/32（3.1%）。T01完了。
- [詳細仕様・未確定事項](docs/specification.md)
- [初回検証記録](docs/test-report-T01.md)
- [Figma UI設計](https://www.figma.com/design/4bQWnsqd3WTRdxI21ljJ0V)

保存先: https://github.com/Yano-code-AIassist/SQL-QUEST （公開、main）。
T01の実装コミット: f8ac1b726de2d5dca3cddd731fd860f436d7fe42。
作業フォルダー: `C:\apuri\SQLゲーム`。
次工程は [T02仕様案（未承認）](docs/T02-proposal.md) の確認です。
各タスクは実装→自動テスト→ユーザー確認→コミット・プッシュの順で進めます。
node_modules、dist、.env、ログなどはGit対象外です。

## 今後の構成

現時点では `src/App.tsx` とCSSに起動確認だけを配置しています。
後続タスクで設計書11章に従って `features/sql`、`features/mission`、`data`、`types`、`pages` などへ責務を分けます。
sql.js・Monaco Editorは対応機能の実装時に導入します。
