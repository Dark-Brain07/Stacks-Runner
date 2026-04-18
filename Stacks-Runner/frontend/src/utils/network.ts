export type NetworkType = 'mainnet' | 'testnet';
export function getApiUrl(network: NetworkType = 'mainnet'): string {
  return network === 'mainnet' ? 'https://api.hiro.so' : 'https://api.testnet.hiro.so';
}
export function getExplorerUrl(txId: string, network: NetworkType = 'mainnet'): string {
  const base = network === 'mainnet' ? 'https://explorer.hiro.so' : 'https://explorer.hiro.so/?chain=testnet';
  return base + '/txid/' + txId;
}
export async function fetchAccountBalance(address: string, network: NetworkType = 'mainnet'): Promise<number> {
  const res = await fetch(getApiUrl(network) + '/v2/accounts/' + address + '?proof=0');
  if (!res.ok) throw new Error('Failed to fetch balance');
  const data = await res.json();
  return Number(BigInt(data.balance));
}