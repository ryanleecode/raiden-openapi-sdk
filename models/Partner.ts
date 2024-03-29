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

/**
 * @export
 * @interface Partner
 */
export interface Partner {
  /**
   * The partner we have a channel with
   * @type {string}
   * @memberof Partner
   */
  partnerAddress: string;
  /**
   * A link to the channel resource
   * @type {string}
   * @memberof Partner
   */
  channel: string;
}
