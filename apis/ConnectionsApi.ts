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
import { ChannelAllocation, Connection, Errors } from '../models';

export interface JoinNetworkRequest {
  tokenAddress: string;
  channelAllocation: ChannelAllocation;
}

export interface LeaveNetworkRequest {
  tokenAddress: string;
}

/**
 * no description
 */
export class ConnectionsApi extends BaseAPI {
  /**
   * The request will return a JSON object where each key is a token address for which you have open channels.
   * Query details of all joined token networks.
   */
  getConnections = (): Observable<{ [key: string]: Connection }> => {
    const headers: HttpHeaders = {};

    const query: HttpQuery = {};

    return this.request<{ [key: string]: Connection }>({
      path: `/connections`,
      method: 'GET',
      headers,
      query,
    });
  };

  /**
   * The request will only return once all blockchain calls for opening and/or depositing to a channel have completed. <br /> <br /> The request’s payload has `initial_channel_target` and `joinable_funds_target` as optional arguments. If not provided they default to `initial_channel_target = 3` and `joinable_funds_target = 0.4`. <br /><br />If the `initial_channel_target` is bigger than the current number of participants of the token network then the funds will still be split according to the `initial_channel_target` but the number of channels made will be equal to the number of participants in the network. So eventually you will end up with less channels, but each channel will have the expected number of funds allocated to it. The remaining channels will be opened once more peers become available.
   * Join a token network.
   */
  joinNetwork = (requestParameters: JoinNetworkRequest): Observable<void> => {
    throwIfRequired(requestParameters, 'tokenAddress', 'joinNetwork');
    throwIfRequired(requestParameters, 'channelAllocation', 'joinNetwork');

    const headers: HttpHeaders = {
      'Content-Type': 'application/json',
    };

    const query: HttpQuery = {};

    return this.request<void>({
      path: `/connections/{token_address}`.replace(
        `{token_address}`,
        encodeURIComponent(String(requestParameters.tokenAddress)),
      ),
      method: 'PUT',
      headers,
      query,
      body: requestParameters.channelAllocation,
    });
  };

  /**
   * The request will only return once all blockchain calls for closing/settling a channel have completed.
   * Leave a token network.
   */
  leaveNetwork = (
    requestParameters: LeaveNetworkRequest,
  ): Observable<Array<string>> => {
    throwIfRequired(requestParameters, 'tokenAddress', 'leaveNetwork');

    const headers: HttpHeaders = {};

    const query: HttpQuery = {};

    return this.request<Array<string>>({
      path: `/connections/{token_address}`.replace(
        `{token_address}`,
        encodeURIComponent(String(requestParameters.tokenAddress)),
      ),
      method: 'DELETE',
      headers,
      query,
    });
  };
}
