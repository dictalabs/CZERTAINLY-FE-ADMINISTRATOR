// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 2.13.1-SNAPSHOT
 * Contact: info@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Observable } from 'rxjs';
import type { AjaxResponse } from 'rxjs/ajax';
import { BaseAPI, throwIfNullOrUndefined, encodeURI } from '../runtime';
import type { OperationOpts, HttpHeaders, HttpQuery } from '../runtime';
import type {
    AuthenticationServiceExceptionDto,
    ErrorMessageDto,
    NotificationRequestDto,
    NotificationResponseDto,
} from '../models';

export interface BulkDeleteNotificationRequest {
    requestBody: Array<string>;
}

export interface BulkMarkNotificationAsReadRequest {
    requestBody: Array<string>;
}

export interface DeleteNotificationRequest {
    uuid: string;
}

export interface ListNotificationsRequest {
    request: NotificationRequestDto;
}

export interface MarkNotificationAsReadRequest {
    uuid: string;
}

/**
 * no description
 */
export class InternalNotificationApi extends BaseAPI {

    /**
     * Delete a list of notifications for logged user
     */
    bulkDeleteNotification({ requestBody }: BulkDeleteNotificationRequest): Observable<void>
    bulkDeleteNotification({ requestBody }: BulkDeleteNotificationRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    bulkDeleteNotification({ requestBody }: BulkDeleteNotificationRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(requestBody, 'requestBody', 'bulkDeleteNotification');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/v1/notifications',
            method: 'DELETE',
            headers,
            body: requestBody,
        }, opts?.responseOpts);
    };

    /**
     * Mark a list of notifications as read for logged user
     */
    bulkMarkNotificationAsRead({ requestBody }: BulkMarkNotificationAsReadRequest): Observable<void>
    bulkMarkNotificationAsRead({ requestBody }: BulkMarkNotificationAsReadRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    bulkMarkNotificationAsRead({ requestBody }: BulkMarkNotificationAsReadRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(requestBody, 'requestBody', 'bulkMarkNotificationAsRead');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/v1/notifications',
            method: 'PATCH',
            headers,
            body: requestBody,
        }, opts?.responseOpts);
    };

    /**
     * Delete a notification for logged user
     */
    deleteNotification({ uuid }: DeleteNotificationRequest): Observable<void>
    deleteNotification({ uuid }: DeleteNotificationRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    deleteNotification({ uuid }: DeleteNotificationRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(uuid, 'uuid', 'deleteNotification');

        return this.request<void>({
            url: '/v1/notifications/{uuid}'.replace('{uuid}', encodeURI(uuid)),
            method: 'DELETE',
        }, opts?.responseOpts);
    };

    /**
     * List notifications for logged user
     */
    listNotifications({ request }: ListNotificationsRequest): Observable<NotificationResponseDto>
    listNotifications({ request }: ListNotificationsRequest, opts?: OperationOpts): Observable<AjaxResponse<NotificationResponseDto>>
    listNotifications({ request }: ListNotificationsRequest, opts?: OperationOpts): Observable<NotificationResponseDto | AjaxResponse<NotificationResponseDto>> {
        throwIfNullOrUndefined(request, 'request', 'listNotifications');

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
        };
        
        if (request !=null) {
            Object.assign(query, request);
        }

        return this.request<NotificationResponseDto>({
            url: '/v1/notifications',
            method: 'GET',
            query,
        }, opts?.responseOpts);
    };

    /**
     * Mark notification as read for logged user
     */
    markNotificationAsRead({ uuid }: MarkNotificationAsReadRequest): Observable<void>
    markNotificationAsRead({ uuid }: MarkNotificationAsReadRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    markNotificationAsRead({ uuid }: MarkNotificationAsReadRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(uuid, 'uuid', 'markNotificationAsRead');

        return this.request<void>({
            url: '/v1/notifications/{uuid}'.replace('{uuid}', encodeURI(uuid)),
            method: 'PATCH',
        }, opts?.responseOpts);
    };

}
