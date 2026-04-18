export class WalletConnectionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'WalletConnectionError';
  }
}
export class TransactionError extends Error {
  public txId?: string;
  constructor(message: string, txId?: string) {
    super(message);
    this.name = 'TransactionError';
    this.txId = txId;
  }
}
export class InsufficientBalanceError extends Error {
  public balance: number;
  public required: number;
  constructor(balance: number, required: number) {
    super('Insufficient balance: ' + balance + ' uSTX, need ' + required + ' uSTX');
    this.name = 'InsufficientBalanceError';
    this.balance = balance;
    this.required = required;
  }
}