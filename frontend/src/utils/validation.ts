export function isValidStacksAddress(address: string): boolean {
  if (!address) return false;
  return /^S[PM][A-Z0-9]{38,40}$/.test(address);
}
export function isValidTxId(txId: string): boolean {
  if (!txId) return false;
  return /^0x[a-f0-9]{64}$/i.test(txId);
}
export function isValidContractId(contractId: string): boolean {
  if (!contractId) return false;
  const parts = contractId.split('.');
  if (parts.length !== 2) return false;
  return isValidStacksAddress(parts[0]) && /^[a-zA-Z][a-zA-Z0-9-]*$/.test(parts[1]);
}
export function isValidScore(score: number): boolean {
  return Number.isInteger(score) && score >= 0 && score <= 999_999;
}