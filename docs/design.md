# SQL QUEST — 設計書参照・実装範囲

正式仕様はユーザー指定の「SQL QUEST 基本設計書 Ver.1.0」（2026-11-24、11ページ）。
参照元: https://chatgpt.com/library?file_id=libfile_1fc44f58fc808191a45947842bd8be4a&account_id=personal
このファイルは実装時の参照用要約であり、正式設計書を置き換えない。

## 確定している範囲

- PCブラウザの1人用SQL学習アドベンチャー。プレイヤーはデータ術師。
- React、TypeScript、Vite、CSS、SQLite/sql.js、Monaco Editor、JSON、LocalStorage。
- バックエンド・認証は不要。問題は教材から転載せず独自制作する。
- MVPはStage 1〜4。問題数は最新の開発指示に合わせて合計20問に固定。
- F01 SQL入力・実行、F02 テーブル形式の結果表示、F03 正誤判定、F04 ミッション出題、F05 ステージ選択、F06 ヒント・解説、F07 進捗保存。
- 問題の学習DBと進捗保存を分離。問題ごとに初期化。
- SQLはWeb Workerで実行し、タイムアウト時は終了。
- SELECTは実行結果を比較し重複を考慮する。ORDER BY問題は順序も比較。
- INSERT/UPDATE/DELETEは実行後のテーブル状態を比較する。
- ステージの解放は前提ミッションのクリア状況による。

## 学習範囲（設計書3章）

| Stage | 内容 | SQL |
| --- | --- | --- |
| 1 | 冒険者名簿の確認 | SELECT、FROM |
| 2 | ギルド情報の管理 | INSERT、UPDATE、DELETE |
| 3 | 危険なモンスターの探索 | WHERE、AND、OR、LIKE |
| 4 | ランキング作成 | ORDER BY、DISTINCT |
| 5 | 武器の販売価格計算 | CASE、ROUND、関数 |
| 6 | 商店の売上調査 | SUM、COUNT、AVG、HAVING |
| 7 | 平均より強い敵の探索 | 副問い合わせ |
| 8 | 依頼主と冒険者の照合 | INNER JOIN、LEFT JOIN |
| 9 | 商店間の送金 | COMMIT、ROLLBACK |
| 10 | 新ギルド設立 | CREATE TABLE、制約 |
| 11 | 情報管理の効率化 | VIEW、INDEX |
| 12 | DBの再構築 | ER図、正規化 |

## MVP対象外

Stage 5〜12、経験値・レベル、復習、SQL図鑑、苦手分析、音、育成、AI解説、ランキング、問題作成。
設計書の推奨機能はMVP必須機能に含めない。

## 設計書の完成条件（13章）

全11条件のうち2条件を確認（2026-11-25時点、2/11 = 18.2%）。
条件1はT01のユーザー確認、条件10は公開リポジトリのコード・READMEを確認した。
WBSのMVP進捗（1/24 = 4.2%）とは別指標。

1. 【確認済み】ブラウザで起動できる。
2. SQL入力・実行ができる。
3. 結果がテーブル形式で表示される。
4. 正誤判定ができる。
5. Stage 1〜4がプレイできる。
6. 20問以上の問題がある（今回の指示では20問）。
7. ヒント・解説が表示される。
8. 学習進捗が保存される。
9. 致命的な不具合がない。
10. 【確認済み】GitHubにコードとREADMEを公開する（初期版、f8ac1b7）。最終MVP版の公開確認はT23で行う。
11. Webで公開する。

詳細仕様が未確定の項目は [specification.md](specification.md) に記録する。
