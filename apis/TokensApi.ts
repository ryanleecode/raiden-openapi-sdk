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

import { Observable } from 'rxjs';
import {
  BaseAPI,
  throwIfRequired,
  HttpHeaders,
  HttpQuery,
  COLLECTION_FORMATS,
} from '../runtime';
import { Errors, Partner, TokenNetworkAddress } from '../models';

export interface GetTokenRequest {
  tokenAddress: string;
}

export interface GetTokenPartnersRequest {
  tokenAddress: string;
}

export interface RegisterTokenRequest {
  tokenAddress: string;
}

/**
 * no description
 */
export class TokensApi extends BaseAPI {
  /**
   * Returns the address of the corresponding token network for the given token, if the token is registered.
   * Address of the corresponding token network
   */
  getToken = (requestParameters: GetTokenRequest): Observable<string> => {
    throwIfRequired(requestParameters, 'tokenAddress', 'getToken');

    const headers: HttpHeaders = {};

    const query: HttpQuery = {};

    return this.request<string>({
      path: `/tokens/{token_address}`.replace(
        `{token_address}`,
        encodeURIComponent(String(requestParameters.tokenAddress)),
      ),
      method: 'GET',
      headers,
      query,
    });
  };

  /**
   * Returns a list of all partners with whom you have non-settled channels for a certain token.
   * List of all partners with whom you have non-settled channels
   */
  getTokenPartners = (
    requestParameters: GetTokenPartnersRequest,
  ): Observable<Array<Partner>> => {
    throwIfRequired(requestParameters, 'tokenAddress', 'getTokenPartners');

    const headers: HttpHeaders = {};

    const query: HttpQuery = {};

    return this.request<Array<Partner>>({
      path: `/tokens/{token_address}/partners`.replace(
        `{token_address}`,
        encodeURIComponent(String(requestParameters.tokenAddress)),
      ),
      method: 'GET',
      headers,
      query,
    });
  };

  /**
   * Returns a list of addresses of all registered tokens.
   */
  getTokens = (): Observable<Array<string>> => {
    const headers: HttpHeaders = {};

    const query: HttpQuery = {};

    return this.request<Array<string>>({
      path: `/tokens`,
      method: 'GET',
      headers,
      query,
    });
  };

  /**
   * If a token is not registered yet (i.e.: A token network for that token does not exist in the registry), we need to register it by deploying a token network contract for that token.
   * Registers a token
   */
  registerToken = (
    requestParameters: RegisterTokenRequest,
  ): Observable<TokenNetworkAddress> => {
    throwIfRequired(requestParameters, 'tokenAddress', 'registerToken');

    const headers: HttpHeaders = {};

    const query: HttpQuery = {};

    return this.request<TokenNetworkAddress>({
      path: `/tokens/{token_address}`.replace(
        `{token_address}`,
        encodeURIComponent(String(requestParameters.tokenAddress)),
      ),
      method: 'PUT',
      headers,
      query,
    });
  };
}
