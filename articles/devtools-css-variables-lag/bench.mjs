import puppeteer from '/Users/stepancar/Desktop/projects/chromium/src/third_party/devtools-frontend/src/node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js';
const browser = await puppeteer.launch({executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true});
for (const n of [0, 500, 2000, 5000]) {
  const page = await browser.newPage();
  const vars = Array.from({length: n}, (_, i) => `--v-${i}: ${i}px;`).join('');
  await page.setContent(`<style>:root{${vars}}</style>` + '<div><span>x</span></div>'.repeat(100));
  const s = await page.createCDPSession();
  await s.send('DOM.enable'); await s.send('CSS.enable');
  const {root} = await s.send('DOM.getDocument', {depth: -1});
  const {nodeIds} = await s.send('DOM.querySelectorAll', {nodeId: root.nodeId, selector: '*'});
  const t = performance.now(); let bytes = 0;
  const res = await Promise.all(nodeIds.map(nodeId => s.send('CSS.getComputedStyleForNode', {nodeId})));
  for (const r of res) bytes += JSON.stringify(r).length;
  console.log(`vars=${n} nodes=${nodeIds.length} time=${(performance.now()-t).toFixed(0)}ms payload=${(bytes/1e6).toFixed(1)}MB props/node=${res[0].computedStyle.length}`);
  await page.close();
}
await browser.close();
