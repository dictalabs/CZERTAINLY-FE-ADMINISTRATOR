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
import { BaseAPI, throwIfNullOrUndefined } from '../runtime';
import type { OperationOpts, HttpQuery } from '../runtime';
import type {
    AuditLogFilter,
    AuditLogResponseDto,
    AuthenticationServiceExceptionDto,
    ErrorMessageDto,
    Pageable,
} from '../models';

export interface ExportAuditLogsRequest {
    filter: AuditLogFilter;
    pageable: Pageable;
}

export interface ListAuditLogsRequest {
    filter: AuditLogFilter;
    pageable: Pageable;
}

export interface PurgeAuditLogsRequest {
    filter: AuditLogFilter;
    pageable: Pageable;
}

/**
 * no description
 */
export class AuditLogApi extends BaseAPI {

    /**
     * Export Audit logs
     */
    exportAuditLogs({ filter, pageable }: ExportAuditLogsRequest): Observable<Blob>
    exportAuditLogs({ filter, pageable }: ExportAuditLogsRequest, opts?: OperationOpts): Observable<AjaxResponse<Blob>>
    exportAuditLogs({ filter, pageable }: ExportAuditLogsRequest, opts?: OperationOpts): Observable<Blob | AjaxResponse<Blob>> {
        throwIfNullOrUndefined(filter, 'filter', 'exportAuditLogs');
        throwIfNullOrUndefined(pageable, 'pageable', 'exportAuditLogs');

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
   
        };

        if (filter != null) {
            Object.assign(query, {filter});
        }

        if (pageable!= null) {
            Object.assign(query, {pageable});
        }

        return this.request<Blob>({
            url: '/v1/auditLogs/export',
            method: 'GET',
            query,
            responseType: 'blob',
        }, opts?.responseOpts);
    };

    /**
     * List Audit logs
     */
    listAuditLogs({ filter, pageable }: ListAuditLogsRequest): Observable<AuditLogResponseDto>
    listAuditLogs({ filter, pageable }: ListAuditLogsRequest, opts?: OperationOpts): Observable<AjaxResponse<AuditLogResponseDto>>
    listAuditLogs({ filter, pageable }: ListAuditLogsRequest, opts?: OperationOpts): Observable<AuditLogResponseDto | AjaxResponse<AuditLogResponseDto>> {
        throwIfNullOrUndefined(filter, 'filter', 'listAuditLogs');
        throwIfNullOrUndefined(pageable, 'pageable', 'listAuditLogs');

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
           
        };
        if (filter != null) {
            Object.assign(query, {filter});
        }

        if (pageable!= null) {
            Object.assign(query, {pageable});
        }


        return this.request<AuditLogResponseDto>({
            url: '/v1/auditLogs',
            method: 'GET',
            query,
        }, opts?.responseOpts);
    };

    /**
     * List Audit Objects
     */
    listObjects(): Observable<Array<string>>
    listObjects(opts?: OperationOpts): Observable<AjaxResponse<Array<string>>>
    listObjects(opts?: OperationOpts): Observable<Array<string> | AjaxResponse<Array<string>>> {
        return this.request<Array<string>>({
            url: '/v1/auditLogs/objects',
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * List Status
     */
    listOperationStatuses(): Observable<Array<string>>
    listOperationStatuses(opts?: OperationOpts): Observable<AjaxResponse<Array<string>>>
    listOperationStatuses(opts?: OperationOpts): Observable<Array<string> | AjaxResponse<Array<string>>> {
        return this.request<Array<string>>({
            url: '/v1/auditLogs/statuses',
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * List Audit Operations
     */
    listOperations(): Observable<Array<string>>
    listOperations(opts?: OperationOpts): Observable<AjaxResponse<Array<string>>>
    listOperations(opts?: OperationOpts): Observable<Array<string> | AjaxResponse<Array<string>>> {
        return this.request<Array<string>>({
            url: '/v1/auditLogs/operations',
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * Purge Audit logs
     */
    purgeAuditLogs({ filter, pageable }: PurgeAuditLogsRequest): Observable<void>
    purgeAuditLogs({ filter, pageable }: PurgeAuditLogsRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    purgeAuditLogs({ filter, pageable }: PurgeAuditLogsRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(filter, 'filter', 'purgeAuditLogs');
        throwIfNullOrUndefined(pageable, 'pageable', 'purgeAuditLogs');

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
        };

        if (filter != null) {
            Object.assign(query, {filter});
        }

        if (pageable!= null) {
            Object.assign(query, {pageable});
        }

        return this.request<void>({
            url: '/v1/auditLogs/purge',
            method: 'GET',
            query,
        }, opts?.responseOpts);
    };

}
