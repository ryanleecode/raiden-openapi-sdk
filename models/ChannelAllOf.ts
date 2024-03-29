// tslint:disable
/**
 * Raiden API
 * https://raiden-network.readthedocs.io/en/latest/rest_api.html
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ChannelState } from './';

/**
 * @export
 * @interface ChannelAllOf
 */
export interface ChannelAllOf {
  /**
   * Identifier of the channel
   * @type {number}
   * @memberof ChannelAllOf
   */
  channelIdentifier: number;
  /**
   * [EIP55](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-55.md)-encoded address of the token network the channel is part of
   * @type {string}
   * @memberof ChannelAllOf
   */
  tokenNetworkIdentifier: string;
  /**
   * Amount of the `token_address` token we have available for payments.
   * @type {number}
   * @memberof ChannelAllOf
   */
  balance: number;
  /**
   * Amount of the `token_address` token we have withdrawn into the contract for this channel.
   * @type {number}
   * @memberof ChannelAllOf
   */
  totalWithdraw?: number;
  /**
   *
   * @type {ChannelState}
   * @memberof ChannelAllOf
   */
  state: ChannelState;
  /**
   * The maximum number of blocks allowed between the setting of a hashlock and the revealing of the related secret.
   * @type {number}
   * @memberof ChannelAllOf
   */
  revealTimeout: number;
}
