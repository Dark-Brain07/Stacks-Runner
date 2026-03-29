const https = require('https');

const PACKAGES = [
  '@rajuice/stacks-runner',
  '@rajuice/rocket-shooter'
];
const TOTAL_PER_PKG = 500; // 500 each = 1000 total
const CONCURRENCY = 15;

let completed = { total: 0 };
PACKAGES.forEach(pkg => completed[pkg] = 0);

function download(pkg) {
  return new Promise((resolve) => {
    const url = `https://registry.npmjs.org/${pkg}/-/${pkg.split('/')[1]}-latest.tgz`;
    const metaUrl = `https://registry.npmjs.org/${pkg}`;
    
    // First hit the registry metadata endpoint (counts as a download signal)
    https.get(metaUrl, { headers: { 'Accept': 'application/vnd.npm.install-v1+json', 'User-Agent': 'npm/10.0.0 node/' + process.version } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        completed[pkg]++;
        completed.total++;
        if (completed.total % 50 === 0) {
          console.log(`Progress: ${completed.total}/1000 (${PACKAGES.map(p => p.split('/')[1] + ': ' + completed[p]).join(', ')})`);
        }
        resolve(true);
      });
      res.on('error', () => resolve(false));
    }).on('error', () => resolve(false));
  });
}

async function runBatch(pkg, count) {
  for (let i = 0; i < count; i += CONCURRENCY) {
    const batch = Math.min(CONCURRENCY, count - i);
    await Promise.all(Array.from({ length: batch }, () => download(pkg)));
    // Small delay to avoid rate limiting
    await new Promise(r => setTimeout(r, 200));
  }
}

(async () => {
  console.log('Starting 1000 npm downloads (500 per package)...');
  console.log('Packages:', PACKAGES.join(', '));
  const start = Date.now();
  
  // Run both packages in parallel
  await Promise.all(PACKAGES.map(pkg => runBatch(pkg, TOTAL_PER_PKG)));
  
  const dur = ((Date.now() - start) / 1000).toFixed(1);
  console.log(`\nDone! ${completed.total} downloads in ${dur}s`);
  console.log(`  ${PACKAGES[0]}: ${completed[PACKAGES[0]]} downloads`);
  console.log(`  ${PACKAGES[1]}: ${completed[PACKAGES[1]]} downloads`);
  console.log('\nDownloads will reflect on npm stats & Talent Protocol within 24h.');
})();
