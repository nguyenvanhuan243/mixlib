import {INetwork} from './types';

export class Network implements INetwork {
  /**
   * The name of Network like Bitcoin, Ethereum
   */
  name: string;

  /**
   * The symbol of Network: BTC, ETH, XRP and BSC
   */
  symbol: string;

  /**
   * The decimal number of Network
   */
  decimal: number;

  /**
   * The coin type of Network used for the derive path
   */
  type: number;

  /**
   * The contructor of Network
   * @param name
   * @param symbol
   * @param decimal
   * @param type
   */
  constructor(name: string, symbol: string, decimal: number, type: number) {
    this.name = name;
    this.symbol = symbol;
    this.decimal = decimal;
    this.type = type;
  }
}
