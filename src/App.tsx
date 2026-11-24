export default function App() {
  return (
    <div className="app-shell">
      <header className="masthead">
        <span className="wordmark">SQL QUEST</span>
        <span className="edition">起動確認版 / v0.1</span>
      </header>
      <main className="title-screen" aria-labelledby="game-title">
        <p className="eyebrow">THE ADVENTURE BEGINS WITH A QUERY</p>
        <h1 id="game-title">SQL <span>QUEST</span></h1>
        <p className="subtitle">― データ世界の冒険者 ―</p>
        <div className="divider" aria-hidden="true" />
        <p className="introduction">その一文が、世界を解き明かす。</p>
        <p className="description">
          データ術師として、混乱した世界を取り戻そう。<br />
          SQLを学びながら、冒険の一歩を踏み出す。
        </p>
        <section className="preparation" aria-labelledby="preparation-title">
          <p className="chapter">PROLOGUE</p>
          <h2 id="preparation-title">冒険の準備中</h2>
          <p>現在は起動画面を確認できます。ミッションは順次追加予定です。</p>
        </section>
      </main>
      <footer>SQL学習型アドベンチャー <span aria-hidden="true"> / </span> PCブラウザ版</footer>
    </div>
  );
}
