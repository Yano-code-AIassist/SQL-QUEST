import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { createServer } from 'vite';

test('起動画面をReactで描画でき、利用可能な範囲が伝わる', async (t) => {
  const server = await createServer({ server: { middlewareMode: true } });
  t.after(() => server.close());
  const { default: App } = await server.ssrLoadModule('/src/App.tsx');
  const html = renderToStaticMarkup(createElement(App));
  assert.match(html, /<main[^>]+aria-labelledby="game-title"/);
  assert.match(html, /<h1 id="game-title">SQL <span>QUEST<\/span><\/h1>/);
  assert.match(html, /データ世界の冒険者/);
  assert.match(html, /冒険の準備中/);
});

test('本番HTMLが参照するJS・CSSがビルド成果物にそろっている', async () => {
  // 実行環境のネットワーク制限と切り離して、配布ファイルの欠落を検出する。
  const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
  assert.match(html, /<html lang="ja">/);
  const assets = [...html.matchAll(/(?:src|href)="([^\"]+\.(?:js|css))"/g)].map(match => match[1]);
  assert.ok(assets.some(path => path.endsWith('.js')), 'JS成果物が必要');
  assert.ok(assets.some(path => path.endsWith('.css')), 'CSS成果物が必要');
  for (const path of assets) {
    assert.match(path, /^\/assets\/[^/]+\.(?:js|css)$/, '成果物内のアセットを参照する');
    const asset = await readFile(resolve('dist', `.${path}`), 'utf8');
    assert.ok(asset.length > 0, `${path} が空`);
  }
});
