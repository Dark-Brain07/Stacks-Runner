export interface AccountInfo { balance: string; locked: string; unlock_height: number; nonce: number; }
export interface TransactionResult { txid: string; error?: string; reason?: string; }
export interface ContractInfo { source_code: string; publish_height: number; }
export interface MempoolTransaction { tx_id: string; tx_status: string; tx_type: string; fee_rate: string; sender_address: string; nonce: number; }