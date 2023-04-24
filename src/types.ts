import {BIP32Interface} from 'bip32';
import {Account} from './Account';
import {Network} from './Network';

export interface INetwork {
  name: string;
  symbol: string;
  decimal: number;
  type: number;
}

export interface IMasterKey {
  /**
   * The id of master key
   */
  id: string;

  /**
   * The name of master key
   */
  name: string;

  /**
   * The seed of master key
   */
  seed: string;

  /**
   * The mnemonic of master key
   */
  mnemonic: string;

  /**
   * The verified status of master key
   */
  verified?: boolean;

  /**
   * Derive master key to child key via blockchain
   */
  derive: (network: Network) => Account;
}

export interface IChainAccount {
  base: number;
  xpub: BIP32Interface;
  xprv?: BIP32Interface;

  /**\
   * Get account private key
   */
  toPrivateKey: () => string;

  /**
   * Get account address
   */
  toAddress: () => string;

  /**
   * Validate address
   */
  validateAddress: (address: string) => boolean;

  /**
   * Get address balance
   */
  getBalance: (address?: string) => Promise<number>;

  /**
   * Get transactions
   * @param address
   * @returns
   */
  getTransactions: (address?: string) => any;

  /**
   * Create raw transaction
   * @returns ChainTransaction
   */
  createTransaction: (address: string, amount: number) => Promise<any>;

  /**
   * Estimate max amounnt to transfer
   *
   * @param address
   * @returns number
   */
  estimateMaxTransfer: (address: string) => Promise<number>;

  /**
   * Sign and send a transaction
   *
   * @param transaction
   * @returns
   */
  sendTransaction: (transaction: any) => Promise<any>;
}

export interface IChainTransaction {
  hash: string;
  blockHash: string;
  blockNumber: number;
  destination: string;
  source: string;
  value: number;
  fee: number;
}

export type TWordCount = 12 | 15 | 18 | 21 | 24;
