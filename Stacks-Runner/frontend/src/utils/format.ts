export function truncateAddress(address: string, chars = 4): string {
  if (!address) return '';
  if (address.length <= chars * 2 + 3) return address;
  return address.slice(0, chars + 2) + '...' + address.slice(-chars);
}
export function formatSTX(microStx: number, decimals = 6): string {
  const stx = microStx / 1_000_000;
  return stx.toFixed(decimals).replace(/\.?0+$/, '');
}
export function formatNumber(num: number): string {
  return num.toLocaleString();
}
export function timeAgo(timestamp: number): string {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  if (seconds < 60) return 'just now';
  if (seconds < 3600) return Math.floor(seconds / 60) + 'm ago';
  if (seconds < 86400) return Math.floor(seconds / 3600) + 'h ago';
  return Math.floor(seconds / 86400) + 'd ago';
}
export function formatScore(score: number): string {
  if (score >= 1_000_000) return (score / 1_000_000).toFixed(1) + 'M';
  if (score >= 1_000) return (score / 1_000).toFixed(1) + 'K';
  return score.toString();
}