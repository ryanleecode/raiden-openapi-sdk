// tslint:disable
/**
 * Raiden API
 * https://raiden-network.readthedocs.io/en/stable/rest_api.html
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ChannelAllOf, ChannelPartial, ChannelState } from './';

/**
 * @export
 * @interface Channel
 */
export interface Channel {
  /**
   * [EIP55](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-55.md)-encoded address of the partner with whom we have opened a channel
   * @type {string}
   * @memberof Channel
   */
  partnerAddress: string;
  /**
   * [EIP55](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-55.md)-encoded address of the token we are trading in the channel
   * @type {string}
   * @memberof Channel
   */
  tokenAddress: string;
  /**
   * Amount of the `token_address` token we have deposited into the contract for this channel.
   * @type {number}
   * @memberof Channel
   */
  totalDeposit: number;
  /**
   * The number of blocks that are required to be mined from the time that close() is called until the channel can be settled with a call to settle()
   * @type {number}
   * @memberof Channel
   */
  settleTimeout: number;
  /**
   * Identifier of the channel
   * @type {number}
   * @memberof Channel
   */
  channelIdentifier: number;
  /**
   * [EIP55](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-55.md)-encoded address of the token network the channel is part of
   * @type {string}
   * @memberof Channel
   */
  tokenNetworkIdentifier: string;
  /**
   * Amount of the `token_address` token we have available for payments.
   * @type {number}
   * @memberof Channel
   */
  balance: number;
  /**
   * Amount of the `token_address` token we have withdrawn into the contract for this channel.
   * @type {number}
   * @memberof Channel
   */
  totalWithdraw?: number;
  /**
   *
   * @type {ChannelState}
   * @memberof Channel
   */
  state: ChannelState;
  /**
   * The maximum number of blocks allowed between the setting of a hashlock and the revealing of the related secret.
   * @type {number}
   * @memberof Channel
   */
  revealTimeout: number;
}
