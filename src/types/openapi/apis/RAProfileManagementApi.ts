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
    ActivateAcmeForRaProfileRequestDto,
    ActivateCmpForRaProfileRequestDto,
    ActivateScepForRaProfileRequestDto,
    AddRaProfileRequestDto,
    ApprovalProfileDto,
    AuthenticationServiceExceptionDto,
    BaseAttributeDto,
    CertificateDetailDto,
    EditRaProfileRequestDto,
    ErrorMessageDto,
    RaProfileAcmeDetailResponseDto,
    RaProfileCmpDetailResponseDto,
    RaProfileDto,
    RaProfileScepDetailResponseDto,
    SimplifiedComplianceProfileDto,
    UuidDto,
} from '../models';

export interface ActivateAcmeForRaProfileRequest {
    authorityUuid: string;
    raProfileUuid: string;
    acmeProfileUuid: string;
    activateAcmeForRaProfileRequestDto: ActivateAcmeForRaProfileRequestDto;
}

export interface ActivateCmpForRaProfileRequest {
    authorityUuid: string;
    raProfileUuid: string;
    cmpProfileUuid: string;
    activateCmpForRaProfileRequestDto: ActivateCmpForRaProfileRequestDto;
}

export interface ActivateScepForRaProfileRequest {
    authorityUuid: string;
    raProfileUuid: string;
    scepProfileUuid: string;
    activateScepForRaProfileRequestDto: ActivateScepForRaProfileRequestDto;
}

export interface AssociateRAProfileWithApprovalProfileRequest {
    authorityUuid: string;
    raProfileUuid: string;
    approvalProfileUuid: string;
}

export interface BulkDeleteRaProfileRequest {
    requestBody: Array<string>;
}

export interface BulkDisableRaProfileRequest {
    requestBody: Array<string>;
}

export interface BulkEnableRaProfileRequest {
    requestBody: Array<string>;
}

export interface CheckRaProfileComplianceRequest {
    requestBody: Array<string>;
}

export interface CreateRaProfileRequest {
    authorityUuid: string;
    addRaProfileRequestDto: AddRaProfileRequestDto;
}

export interface DeactivateAcmeForRaProfileRequest {
    authorityUuid: string;
    raProfileUuid: string;
}

export interface DeactivateCmpForRaProfileRequest {
    authorityUuid: string;
    raProfileUuid: string;
}

export interface DeactivateScepForRaProfileRequest {
    authorityUuid: string;
    raProfileUuid: string;
}

export interface DeleteRaProfileRequest {
    authorityUuid: string;
    raProfileUuid: string;
}

export interface DeleteRaProfileWithoutAuthorityRequest {
    raProfileUuid: string;
}

export interface DisableRaProfileRequest {
    authorityUuid: string;
    raProfileUuid: string;
}

export interface DisassociateRAProfileFromApprovalProfileRequest {
    authorityUuid: string;
    raProfileUuid: string;
    approvalProfileUuid: string;
}

export interface EditRaProfileRequest {
    authorityUuid: string;
    raProfileUuid: string;
    editRaProfileRequestDto: EditRaProfileRequestDto;
}

export interface EnableRaProfileRequest {
    authorityUuid: string;
    raProfileUuid: string;
}

export interface GetAcmeForRaProfileRequest {
    authorityUuid: string;
    raProfileUuid: string;
}

export interface GetAssociatedApprovalProfilesRequest {
    authorityUuid: string;
    raProfileUuid: string;
}

export interface GetAssociatedComplianceProfilesRequest {
    authorityUuid: string;
    raProfileUuid: string;
}

export interface GetAuthorityCertificateChainRequest {
    authorityUuid: string;
    raProfileUuid: string;
}

export interface GetCmpForRaProfileRequest {
    authorityUuid: string;
    raProfileUuid: string;
}

export interface GetRaProfileRequest {
    authorityUuid: string;
    raProfileUuid: string;
}

export interface GetRaProfileWithoutAuthorityRequest {
    raProfileUuid: string;
}

export interface GetScepForRaProfileRequest {
    authorityUuid: string;
    raProfileUuid: string;
}

export interface ListRaProfileIssueCertificateAttributesRequest {
    authorityUuid: string;
    raProfileUuid: string;
}

export interface ListRaProfileRevokeCertificateAttributesRequest {
    authorityUuid: string;
    raProfileUuid: string;
}

export interface ListRaProfilesRequest {
    enabled?: boolean;
}

/**
 * no description
 */
export class RAProfileManagementApi extends BaseAPI {

    /**
     * Activate ACME for RA Profile
     */
    activateAcmeForRaProfile({ authorityUuid, raProfileUuid, acmeProfileUuid, activateAcmeForRaProfileRequestDto }: ActivateAcmeForRaProfileRequest): Observable<RaProfileAcmeDetailResponseDto>
    activateAcmeForRaProfile({ authorityUuid, raProfileUuid, acmeProfileUuid, activateAcmeForRaProfileRequestDto }: ActivateAcmeForRaProfileRequest, opts?: OperationOpts): Observable<AjaxResponse<RaProfileAcmeDetailResponseDto>>
    activateAcmeForRaProfile({ authorityUuid, raProfileUuid, acmeProfileUuid, activateAcmeForRaProfileRequestDto }: ActivateAcmeForRaProfileRequest, opts?: OperationOpts): Observable<RaProfileAcmeDetailResponseDto | AjaxResponse<RaProfileAcmeDetailResponseDto>> {
        throwIfNullOrUndefined(authorityUuid, 'authorityUuid', 'activateAcmeForRaProfile');
        throwIfNullOrUndefined(raProfileUuid, 'raProfileUuid', 'activateAcmeForRaProfile');
        throwIfNullOrUndefined(acmeProfileUuid, 'acmeProfileUuid', 'activateAcmeForRaProfile');
        throwIfNullOrUndefined(activateAcmeForRaProfileRequestDto, 'activateAcmeForRaProfileRequestDto', 'activateAcmeForRaProfile');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<RaProfileAcmeDetailResponseDto>({
            url: '/v1/authorities/{authorityUuid}/raProfiles/{raProfileUuid}/protocols/acme/activate/{acmeProfileUuid}'.replace('{authorityUuid}', encodeURI(authorityUuid)).replace('{raProfileUuid}', encodeURI(raProfileUuid)).replace('{acmeProfileUuid}', encodeURI(acmeProfileUuid)),
            method: 'PATCH',
            headers,
            body: activateAcmeForRaProfileRequestDto,
        }, opts?.responseOpts);
    };

    /**
     * Activate CMP for RA Profile
     */
    activateCmpForRaProfile({ authorityUuid, raProfileUuid, cmpProfileUuid, activateCmpForRaProfileRequestDto }: ActivateCmpForRaProfileRequest): Observable<RaProfileCmpDetailResponseDto>
    activateCmpForRaProfile({ authorityUuid, raProfileUuid, cmpProfileUuid, activateCmpForRaProfileRequestDto }: ActivateCmpForRaProfileRequest, opts?: OperationOpts): Observable<AjaxResponse<RaProfileCmpDetailResponseDto>>
    activateCmpForRaProfile({ authorityUuid, raProfileUuid, cmpProfileUuid, activateCmpForRaProfileRequestDto }: ActivateCmpForRaProfileRequest, opts?: OperationOpts): Observable<RaProfileCmpDetailResponseDto | AjaxResponse<RaProfileCmpDetailResponseDto>> {
        throwIfNullOrUndefined(authorityUuid, 'authorityUuid', 'activateCmpForRaProfile');
        throwIfNullOrUndefined(raProfileUuid, 'raProfileUuid', 'activateCmpForRaProfile');
        throwIfNullOrUndefined(cmpProfileUuid, 'cmpProfileUuid', 'activateCmpForRaProfile');
        throwIfNullOrUndefined(activateCmpForRaProfileRequestDto, 'activateCmpForRaProfileRequestDto', 'activateCmpForRaProfile');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<RaProfileCmpDetailResponseDto>({
            url: '/v1/authorities/{authorityUuid}/raProfiles/{raProfileUuid}/protocols/cmp/activate/{cmpProfileUuid}'.replace('{authorityUuid}', encodeURI(authorityUuid)).replace('{raProfileUuid}', encodeURI(raProfileUuid)).replace('{cmpProfileUuid}', encodeURI(cmpProfileUuid)),
            method: 'PATCH',
            headers,
            body: activateCmpForRaProfileRequestDto,
        }, opts?.responseOpts);
    };

    /**
     * Activate SCEP for RA Profile
     */
    activateScepForRaProfile({ authorityUuid, raProfileUuid, scepProfileUuid, activateScepForRaProfileRequestDto }: ActivateScepForRaProfileRequest): Observable<RaProfileScepDetailResponseDto>
    activateScepForRaProfile({ authorityUuid, raProfileUuid, scepProfileUuid, activateScepForRaProfileRequestDto }: ActivateScepForRaProfileRequest, opts?: OperationOpts): Observable<AjaxResponse<RaProfileScepDetailResponseDto>>
    activateScepForRaProfile({ authorityUuid, raProfileUuid, scepProfileUuid, activateScepForRaProfileRequestDto }: ActivateScepForRaProfileRequest, opts?: OperationOpts): Observable<RaProfileScepDetailResponseDto | AjaxResponse<RaProfileScepDetailResponseDto>> {
        throwIfNullOrUndefined(authorityUuid, 'authorityUuid', 'activateScepForRaProfile');
        throwIfNullOrUndefined(raProfileUuid, 'raProfileUuid', 'activateScepForRaProfile');
        throwIfNullOrUndefined(scepProfileUuid, 'scepProfileUuid', 'activateScepForRaProfile');
        throwIfNullOrUndefined(activateScepForRaProfileRequestDto, 'activateScepForRaProfileRequestDto', 'activateScepForRaProfile');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<RaProfileScepDetailResponseDto>({
            url: '/v1/authorities/{authorityUuid}/raProfiles/{raProfileUuid}/protocols/scep/activate/{scepProfileUuid}'.replace('{authorityUuid}', encodeURI(authorityUuid)).replace('{raProfileUuid}', encodeURI(raProfileUuid)).replace('{scepProfileUuid}', encodeURI(scepProfileUuid)),
            method: 'PATCH',
            headers,
            body: activateScepForRaProfileRequestDto,
        }, opts?.responseOpts);
    };

    /**
     * Associated RA profile with the Approval profile
     */
    associateRAProfileWithApprovalProfile({ authorityUuid, raProfileUuid, approvalProfileUuid }: AssociateRAProfileWithApprovalProfileRequest): Observable<void>
    associateRAProfileWithApprovalProfile({ authorityUuid, raProfileUuid, approvalProfileUuid }: AssociateRAProfileWithApprovalProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    associateRAProfileWithApprovalProfile({ authorityUuid, raProfileUuid, approvalProfileUuid }: AssociateRAProfileWithApprovalProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(authorityUuid, 'authorityUuid', 'associateRAProfileWithApprovalProfile');
        throwIfNullOrUndefined(raProfileUuid, 'raProfileUuid', 'associateRAProfileWithApprovalProfile');
        throwIfNullOrUndefined(approvalProfileUuid, 'approvalProfileUuid', 'associateRAProfileWithApprovalProfile');

        return this.request<void>({
            url: '/v1/authorities/{authorityUuid}/raProfiles/{raProfileUuid}/approvalProfiles/{approvalProfileUuid}'.replace('{authorityUuid}', encodeURI(authorityUuid)).replace('{raProfileUuid}', encodeURI(raProfileUuid)).replace('{approvalProfileUuid}', encodeURI(approvalProfileUuid)),
            method: 'PATCH',
        }, opts?.responseOpts);
    };

    /**
     * Delete multiple RA Profiles
     */
    bulkDeleteRaProfile({ requestBody }: BulkDeleteRaProfileRequest): Observable<void>
    bulkDeleteRaProfile({ requestBody }: BulkDeleteRaProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    bulkDeleteRaProfile({ requestBody }: BulkDeleteRaProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(requestBody, 'requestBody', 'bulkDeleteRaProfile');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/v1/raProfiles',
            method: 'DELETE',
            headers,
            body: requestBody,
        }, opts?.responseOpts);
    };

    /**
     * Disable multiple RA Profiles
     */
    bulkDisableRaProfile({ requestBody }: BulkDisableRaProfileRequest): Observable<void>
    bulkDisableRaProfile({ requestBody }: BulkDisableRaProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    bulkDisableRaProfile({ requestBody }: BulkDisableRaProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(requestBody, 'requestBody', 'bulkDisableRaProfile');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/v1/raProfiles/disable',
            method: 'PATCH',
            headers,
            body: requestBody,
        }, opts?.responseOpts);
    };

    /**
     * Enable multiple RA Profiles
     */
    bulkEnableRaProfile({ requestBody }: BulkEnableRaProfileRequest): Observable<void>
    bulkEnableRaProfile({ requestBody }: BulkEnableRaProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    bulkEnableRaProfile({ requestBody }: BulkEnableRaProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(requestBody, 'requestBody', 'bulkEnableRaProfile');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/v1/raProfiles/enable',
            method: 'PATCH',
            headers,
            body: requestBody,
        }, opts?.responseOpts);
    };

    /**
     * Initiate Certificate Compliance Check
     */
    checkRaProfileCompliance({ requestBody }: CheckRaProfileComplianceRequest): Observable<void>
    checkRaProfileCompliance({ requestBody }: CheckRaProfileComplianceRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    checkRaProfileCompliance({ requestBody }: CheckRaProfileComplianceRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(requestBody, 'requestBody', 'checkRaProfileCompliance');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/v1/raProfiles/compliance',
            method: 'POST',
            headers,
            body: requestBody,
        }, opts?.responseOpts);
    };

    /**
     * Create RA Profile
     */
    createRaProfile({ authorityUuid, addRaProfileRequestDto }: CreateRaProfileRequest): Observable<UuidDto>
    createRaProfile({ authorityUuid, addRaProfileRequestDto }: CreateRaProfileRequest, opts?: OperationOpts): Observable<AjaxResponse<UuidDto>>
    createRaProfile({ authorityUuid, addRaProfileRequestDto }: CreateRaProfileRequest, opts?: OperationOpts): Observable<UuidDto | AjaxResponse<UuidDto>> {
        throwIfNullOrUndefined(authorityUuid, 'authorityUuid', 'createRaProfile');
        throwIfNullOrUndefined(addRaProfileRequestDto, 'addRaProfileRequestDto', 'createRaProfile');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<UuidDto>({
            url: '/v1/authorities/{authorityUuid}/raProfiles'.replace('{authorityUuid}', encodeURI(authorityUuid)),
            method: 'POST',
            headers,
            body: addRaProfileRequestDto,
        }, opts?.responseOpts);
    };

    /**
     * Deactivate ACME for RA Profile
     */
    deactivateAcmeForRaProfile({ authorityUuid, raProfileUuid }: DeactivateAcmeForRaProfileRequest): Observable<void>
    deactivateAcmeForRaProfile({ authorityUuid, raProfileUuid }: DeactivateAcmeForRaProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    deactivateAcmeForRaProfile({ authorityUuid, raProfileUuid }: DeactivateAcmeForRaProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(authorityUuid, 'authorityUuid', 'deactivateAcmeForRaProfile');
        throwIfNullOrUndefined(raProfileUuid, 'raProfileUuid', 'deactivateAcmeForRaProfile');

        return this.request<void>({
            url: '/v1/authorities/{authorityUuid}/raProfiles/{raProfileUuid}/protocols/acme/deactivate'.replace('{authorityUuid}', encodeURI(authorityUuid)).replace('{raProfileUuid}', encodeURI(raProfileUuid)),
            method: 'PATCH',
        }, opts?.responseOpts);
    };

    /**
     * Deactivate CMP for RA Profile
     */
    deactivateCmpForRaProfile({ authorityUuid, raProfileUuid }: DeactivateCmpForRaProfileRequest): Observable<void>
    deactivateCmpForRaProfile({ authorityUuid, raProfileUuid }: DeactivateCmpForRaProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    deactivateCmpForRaProfile({ authorityUuid, raProfileUuid }: DeactivateCmpForRaProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(authorityUuid, 'authorityUuid', 'deactivateCmpForRaProfile');
        throwIfNullOrUndefined(raProfileUuid, 'raProfileUuid', 'deactivateCmpForRaProfile');

        return this.request<void>({
            url: '/v1/authorities/{authorityUuid}/raProfiles/{raProfileUuid}/protocols/cmp/deactivate'.replace('{authorityUuid}', encodeURI(authorityUuid)).replace('{raProfileUuid}', encodeURI(raProfileUuid)),
            method: 'PATCH',
        }, opts?.responseOpts);
    };

    /**
     * Deactivate SCEP for RA Profile
     */
    deactivateScepForRaProfile({ authorityUuid, raProfileUuid }: DeactivateScepForRaProfileRequest): Observable<void>
    deactivateScepForRaProfile({ authorityUuid, raProfileUuid }: DeactivateScepForRaProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    deactivateScepForRaProfile({ authorityUuid, raProfileUuid }: DeactivateScepForRaProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(authorityUuid, 'authorityUuid', 'deactivateScepForRaProfile');
        throwIfNullOrUndefined(raProfileUuid, 'raProfileUuid', 'deactivateScepForRaProfile');

        return this.request<void>({
            url: '/v1/authorities/{authorityUuid}/raProfiles/{raProfileUuid}/protocols/scep/deactivate'.replace('{authorityUuid}', encodeURI(authorityUuid)).replace('{raProfileUuid}', encodeURI(raProfileUuid)),
            method: 'PATCH',
        }, opts?.responseOpts);
    };

    /**
     * Delete RA Profile
     */
    deleteRaProfile({ authorityUuid, raProfileUuid }: DeleteRaProfileRequest): Observable<void>
    deleteRaProfile({ authorityUuid, raProfileUuid }: DeleteRaProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    deleteRaProfile({ authorityUuid, raProfileUuid }: DeleteRaProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(authorityUuid, 'authorityUuid', 'deleteRaProfile');
        throwIfNullOrUndefined(raProfileUuid, 'raProfileUuid', 'deleteRaProfile');

        return this.request<void>({
            url: '/v1/authorities/{authorityUuid}/raProfiles/{raProfileUuid}'.replace('{authorityUuid}', encodeURI(authorityUuid)).replace('{raProfileUuid}', encodeURI(raProfileUuid)),
            method: 'DELETE',
        }, opts?.responseOpts);
    };

    /**
     * Delete RA Profile
     */
    deleteRaProfileWithoutAuthority({ raProfileUuid }: DeleteRaProfileWithoutAuthorityRequest): Observable<void>
    deleteRaProfileWithoutAuthority({ raProfileUuid }: DeleteRaProfileWithoutAuthorityRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    deleteRaProfileWithoutAuthority({ raProfileUuid }: DeleteRaProfileWithoutAuthorityRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(raProfileUuid, 'raProfileUuid', 'deleteRaProfileWithoutAuthority');

        return this.request<void>({
            url: '/v1/raProfiles/{raProfileUuid}'.replace('{raProfileUuid}', encodeURI(raProfileUuid)),
            method: 'DELETE',
        }, opts?.responseOpts);
    };

    /**
     * Disable RA Profiles
     */
    disableRaProfile({ authorityUuid, raProfileUuid }: DisableRaProfileRequest): Observable<void>
    disableRaProfile({ authorityUuid, raProfileUuid }: DisableRaProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    disableRaProfile({ authorityUuid, raProfileUuid }: DisableRaProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(authorityUuid, 'authorityUuid', 'disableRaProfile');
        throwIfNullOrUndefined(raProfileUuid, 'raProfileUuid', 'disableRaProfile');

        return this.request<void>({
            url: '/v1/authorities/{authorityUuid}/raProfiles/{raProfileUuid}/disable'.replace('{authorityUuid}', encodeURI(authorityUuid)).replace('{raProfileUuid}', encodeURI(raProfileUuid)),
            method: 'PATCH',
        }, opts?.responseOpts);
    };

    /**
     * Disassociated RA profile with the Approval profile
     */
    disassociateRAProfileFromApprovalProfile({ authorityUuid, raProfileUuid, approvalProfileUuid }: DisassociateRAProfileFromApprovalProfileRequest): Observable<void>
    disassociateRAProfileFromApprovalProfile({ authorityUuid, raProfileUuid, approvalProfileUuid }: DisassociateRAProfileFromApprovalProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    disassociateRAProfileFromApprovalProfile({ authorityUuid, raProfileUuid, approvalProfileUuid }: DisassociateRAProfileFromApprovalProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(authorityUuid, 'authorityUuid', 'disassociateRAProfileFromApprovalProfile');
        throwIfNullOrUndefined(raProfileUuid, 'raProfileUuid', 'disassociateRAProfileFromApprovalProfile');
        throwIfNullOrUndefined(approvalProfileUuid, 'approvalProfileUuid', 'disassociateRAProfileFromApprovalProfile');

        return this.request<void>({
            url: '/v1/authorities/{authorityUuid}/raProfiles/{raProfileUuid}/approvalProfiles/{approvalProfileUuid}'.replace('{authorityUuid}', encodeURI(authorityUuid)).replace('{raProfileUuid}', encodeURI(raProfileUuid)).replace('{approvalProfileUuid}', encodeURI(approvalProfileUuid)),
            method: 'DELETE',
        }, opts?.responseOpts);
    };

    /**
     * Edit RA Profile
     */
    editRaProfile({ authorityUuid, raProfileUuid, editRaProfileRequestDto }: EditRaProfileRequest): Observable<RaProfileDto>
    editRaProfile({ authorityUuid, raProfileUuid, editRaProfileRequestDto }: EditRaProfileRequest, opts?: OperationOpts): Observable<AjaxResponse<RaProfileDto>>
    editRaProfile({ authorityUuid, raProfileUuid, editRaProfileRequestDto }: EditRaProfileRequest, opts?: OperationOpts): Observable<RaProfileDto | AjaxResponse<RaProfileDto>> {
        throwIfNullOrUndefined(authorityUuid, 'authorityUuid', 'editRaProfile');
        throwIfNullOrUndefined(raProfileUuid, 'raProfileUuid', 'editRaProfile');
        throwIfNullOrUndefined(editRaProfileRequestDto, 'editRaProfileRequestDto', 'editRaProfile');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<RaProfileDto>({
            url: '/v1/authorities/{authorityUuid}/raProfiles/{raProfileUuid}'.replace('{authorityUuid}', encodeURI(authorityUuid)).replace('{raProfileUuid}', encodeURI(raProfileUuid)),
            method: 'PUT',
            headers,
            body: editRaProfileRequestDto,
        }, opts?.responseOpts);
    };

    /**
     * Enable RA Profiles
     */
    enableRaProfile({ authorityUuid, raProfileUuid }: EnableRaProfileRequest): Observable<void>
    enableRaProfile({ authorityUuid, raProfileUuid }: EnableRaProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    enableRaProfile({ authorityUuid, raProfileUuid }: EnableRaProfileRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(authorityUuid, 'authorityUuid', 'enableRaProfile');
        throwIfNullOrUndefined(raProfileUuid, 'raProfileUuid', 'enableRaProfile');

        return this.request<void>({
            url: '/v1/authorities/{authorityUuid}/raProfiles/{raProfileUuid}/enable'.replace('{authorityUuid}', encodeURI(authorityUuid)).replace('{raProfileUuid}', encodeURI(raProfileUuid)),
            method: 'PATCH',
        }, opts?.responseOpts);
    };

    /**
     * Get ACME details for RA Profile
     */
    getAcmeForRaProfile({ authorityUuid, raProfileUuid }: GetAcmeForRaProfileRequest): Observable<RaProfileAcmeDetailResponseDto>
    getAcmeForRaProfile({ authorityUuid, raProfileUuid }: GetAcmeForRaProfileRequest, opts?: OperationOpts): Observable<AjaxResponse<RaProfileAcmeDetailResponseDto>>
    getAcmeForRaProfile({ authorityUuid, raProfileUuid }: GetAcmeForRaProfileRequest, opts?: OperationOpts): Observable<RaProfileAcmeDetailResponseDto | AjaxResponse<RaProfileAcmeDetailResponseDto>> {
        throwIfNullOrUndefined(authorityUuid, 'authorityUuid', 'getAcmeForRaProfile');
        throwIfNullOrUndefined(raProfileUuid, 'raProfileUuid', 'getAcmeForRaProfile');

        return this.request<RaProfileAcmeDetailResponseDto>({
            url: '/v1/authorities/{authorityUuid}/raProfiles/{raProfileUuid}/protocols/acme'.replace('{authorityUuid}', encodeURI(authorityUuid)).replace('{raProfileUuid}', encodeURI(raProfileUuid)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * List of Approval profiles associated with the RAProfile
     */
    getAssociatedApprovalProfiles({ authorityUuid, raProfileUuid }: GetAssociatedApprovalProfilesRequest): Observable<Array<ApprovalProfileDto>>
    getAssociatedApprovalProfiles({ authorityUuid, raProfileUuid }: GetAssociatedApprovalProfilesRequest, opts?: OperationOpts): Observable<AjaxResponse<Array<ApprovalProfileDto>>>
    getAssociatedApprovalProfiles({ authorityUuid, raProfileUuid }: GetAssociatedApprovalProfilesRequest, opts?: OperationOpts): Observable<Array<ApprovalProfileDto> | AjaxResponse<Array<ApprovalProfileDto>>> {
        throwIfNullOrUndefined(authorityUuid, 'authorityUuid', 'getAssociatedApprovalProfiles');
        throwIfNullOrUndefined(raProfileUuid, 'raProfileUuid', 'getAssociatedApprovalProfiles');

        return this.request<Array<ApprovalProfileDto>>({
            url: '/v1/authorities/{authorityUuid}/raProfiles/{raProfileUuid}/approvalProfiles'.replace('{authorityUuid}', encodeURI(authorityUuid)).replace('{raProfileUuid}', encodeURI(raProfileUuid)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * Get Compliance Profiles for an RA Profile
     */
    getAssociatedComplianceProfiles({ authorityUuid, raProfileUuid }: GetAssociatedComplianceProfilesRequest): Observable<Array<SimplifiedComplianceProfileDto>>
    getAssociatedComplianceProfiles({ authorityUuid, raProfileUuid }: GetAssociatedComplianceProfilesRequest, opts?: OperationOpts): Observable<AjaxResponse<Array<SimplifiedComplianceProfileDto>>>
    getAssociatedComplianceProfiles({ authorityUuid, raProfileUuid }: GetAssociatedComplianceProfilesRequest, opts?: OperationOpts): Observable<Array<SimplifiedComplianceProfileDto> | AjaxResponse<Array<SimplifiedComplianceProfileDto>>> {
        throwIfNullOrUndefined(authorityUuid, 'authorityUuid', 'getAssociatedComplianceProfiles');
        throwIfNullOrUndefined(raProfileUuid, 'raProfileUuid', 'getAssociatedComplianceProfiles');

        return this.request<Array<SimplifiedComplianceProfileDto>>({
            url: '/v1/authorities/{authorityUuid}/raProfiles/{raProfileUuid}/complianceProfiles'.replace('{authorityUuid}', encodeURI(authorityUuid)).replace('{raProfileUuid}', encodeURI(raProfileUuid)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * Retrieve certificates of authority belonging to RA profile
     */
    getAuthorityCertificateChain({ authorityUuid, raProfileUuid }: GetAuthorityCertificateChainRequest): Observable<Array<CertificateDetailDto>>
    getAuthorityCertificateChain({ authorityUuid, raProfileUuid }: GetAuthorityCertificateChainRequest, opts?: OperationOpts): Observable<AjaxResponse<Array<CertificateDetailDto>>>
    getAuthorityCertificateChain({ authorityUuid, raProfileUuid }: GetAuthorityCertificateChainRequest, opts?: OperationOpts): Observable<Array<CertificateDetailDto> | AjaxResponse<Array<CertificateDetailDto>>> {
        throwIfNullOrUndefined(authorityUuid, 'authorityUuid', 'getAuthorityCertificateChain');
        throwIfNullOrUndefined(raProfileUuid, 'raProfileUuid', 'getAuthorityCertificateChain');

        return this.request<Array<CertificateDetailDto>>({
            url: '/v1/authorities/{authorityUuid}/raProfiles/{raProfileUuid}/caCertificates'.replace('{authorityUuid}', encodeURI(authorityUuid)).replace('{raProfileUuid}', encodeURI(raProfileUuid)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * Get CMP details for RA Profile
     */
    getCmpForRaProfile({ authorityUuid, raProfileUuid }: GetCmpForRaProfileRequest): Observable<RaProfileCmpDetailResponseDto>
    getCmpForRaProfile({ authorityUuid, raProfileUuid }: GetCmpForRaProfileRequest, opts?: OperationOpts): Observable<AjaxResponse<RaProfileCmpDetailResponseDto>>
    getCmpForRaProfile({ authorityUuid, raProfileUuid }: GetCmpForRaProfileRequest, opts?: OperationOpts): Observable<RaProfileCmpDetailResponseDto | AjaxResponse<RaProfileCmpDetailResponseDto>> {
        throwIfNullOrUndefined(authorityUuid, 'authorityUuid', 'getCmpForRaProfile');
        throwIfNullOrUndefined(raProfileUuid, 'raProfileUuid', 'getCmpForRaProfile');

        return this.request<RaProfileCmpDetailResponseDto>({
            url: '/v1/authorities/{authorityUuid}/raProfiles/{raProfileUuid}/protocols/cmp'.replace('{authorityUuid}', encodeURI(authorityUuid)).replace('{raProfileUuid}', encodeURI(raProfileUuid)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * Details of RA Profile
     */
    getRaProfile({ authorityUuid, raProfileUuid }: GetRaProfileRequest): Observable<RaProfileDto>
    getRaProfile({ authorityUuid, raProfileUuid }: GetRaProfileRequest, opts?: OperationOpts): Observable<AjaxResponse<RaProfileDto>>
    getRaProfile({ authorityUuid, raProfileUuid }: GetRaProfileRequest, opts?: OperationOpts): Observable<RaProfileDto | AjaxResponse<RaProfileDto>> {
        throwIfNullOrUndefined(authorityUuid, 'authorityUuid', 'getRaProfile');
        throwIfNullOrUndefined(raProfileUuid, 'raProfileUuid', 'getRaProfile');

        return this.request<RaProfileDto>({
            url: '/v1/authorities/{authorityUuid}/raProfiles/{raProfileUuid}'.replace('{authorityUuid}', encodeURI(authorityUuid)).replace('{raProfileUuid}', encodeURI(raProfileUuid)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * Details of RA Profile
     */
    getRaProfileWithoutAuthority({ raProfileUuid }: GetRaProfileWithoutAuthorityRequest): Observable<RaProfileDto>
    getRaProfileWithoutAuthority({ raProfileUuid }: GetRaProfileWithoutAuthorityRequest, opts?: OperationOpts): Observable<AjaxResponse<RaProfileDto>>
    getRaProfileWithoutAuthority({ raProfileUuid }: GetRaProfileWithoutAuthorityRequest, opts?: OperationOpts): Observable<RaProfileDto | AjaxResponse<RaProfileDto>> {
        throwIfNullOrUndefined(raProfileUuid, 'raProfileUuid', 'getRaProfileWithoutAuthority');

        return this.request<RaProfileDto>({
            url: '/v1/raProfiles/{raProfileUuid}'.replace('{raProfileUuid}', encodeURI(raProfileUuid)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * Get SCEP details for RA Profile
     */
    getScepForRaProfile({ authorityUuid, raProfileUuid }: GetScepForRaProfileRequest): Observable<RaProfileScepDetailResponseDto>
    getScepForRaProfile({ authorityUuid, raProfileUuid }: GetScepForRaProfileRequest, opts?: OperationOpts): Observable<AjaxResponse<RaProfileScepDetailResponseDto>>
    getScepForRaProfile({ authorityUuid, raProfileUuid }: GetScepForRaProfileRequest, opts?: OperationOpts): Observable<RaProfileScepDetailResponseDto | AjaxResponse<RaProfileScepDetailResponseDto>> {
        throwIfNullOrUndefined(authorityUuid, 'authorityUuid', 'getScepForRaProfile');
        throwIfNullOrUndefined(raProfileUuid, 'raProfileUuid', 'getScepForRaProfile');

        return this.request<RaProfileScepDetailResponseDto>({
            url: '/v1/authorities/{authorityUuid}/raProfiles/{raProfileUuid}/protocols/scep'.replace('{authorityUuid}', encodeURI(authorityUuid)).replace('{raProfileUuid}', encodeURI(raProfileUuid)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * Get issue Certificate Attributes
     */
    listRaProfileIssueCertificateAttributes({ authorityUuid, raProfileUuid }: ListRaProfileIssueCertificateAttributesRequest): Observable<Array<BaseAttributeDto>>
    listRaProfileIssueCertificateAttributes({ authorityUuid, raProfileUuid }: ListRaProfileIssueCertificateAttributesRequest, opts?: OperationOpts): Observable<AjaxResponse<Array<BaseAttributeDto>>>
    listRaProfileIssueCertificateAttributes({ authorityUuid, raProfileUuid }: ListRaProfileIssueCertificateAttributesRequest, opts?: OperationOpts): Observable<Array<BaseAttributeDto> | AjaxResponse<Array<BaseAttributeDto>>> {
        throwIfNullOrUndefined(authorityUuid, 'authorityUuid', 'listRaProfileIssueCertificateAttributes');
        throwIfNullOrUndefined(raProfileUuid, 'raProfileUuid', 'listRaProfileIssueCertificateAttributes');

        return this.request<Array<BaseAttributeDto>>({
            url: '/v1/authorities/{authorityUuid}/raProfiles/{raProfileUuid}/attributes/issue'.replace('{authorityUuid}', encodeURI(authorityUuid)).replace('{raProfileUuid}', encodeURI(raProfileUuid)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * Get revocation Attributes
     */
    listRaProfileRevokeCertificateAttributes({ authorityUuid, raProfileUuid }: ListRaProfileRevokeCertificateAttributesRequest): Observable<Array<BaseAttributeDto>>
    listRaProfileRevokeCertificateAttributes({ authorityUuid, raProfileUuid }: ListRaProfileRevokeCertificateAttributesRequest, opts?: OperationOpts): Observable<AjaxResponse<Array<BaseAttributeDto>>>
    listRaProfileRevokeCertificateAttributes({ authorityUuid, raProfileUuid }: ListRaProfileRevokeCertificateAttributesRequest, opts?: OperationOpts): Observable<Array<BaseAttributeDto> | AjaxResponse<Array<BaseAttributeDto>>> {
        throwIfNullOrUndefined(authorityUuid, 'authorityUuid', 'listRaProfileRevokeCertificateAttributes');
        throwIfNullOrUndefined(raProfileUuid, 'raProfileUuid', 'listRaProfileRevokeCertificateAttributes');

        return this.request<Array<BaseAttributeDto>>({
            url: '/v1/authorities/{authorityUuid}/raProfiles/{raProfileUuid}/attributes/revoke'.replace('{authorityUuid}', encodeURI(authorityUuid)).replace('{raProfileUuid}', encodeURI(raProfileUuid)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * List of available RA Profiles
     */
    listRaProfiles({ enabled }: ListRaProfilesRequest): Observable<Array<RaProfileDto>>
    listRaProfiles({ enabled }: ListRaProfilesRequest, opts?: OperationOpts): Observable<AjaxResponse<Array<RaProfileDto>>>
    listRaProfiles({ enabled }: ListRaProfilesRequest, opts?: OperationOpts): Observable<Array<RaProfileDto> | AjaxResponse<Array<RaProfileDto>>> {

        const query: HttpQuery = {};

        if (enabled != null) { query['enabled'] = enabled; }

        return this.request<Array<RaProfileDto>>({
            url: '/v1/raProfiles',
            method: 'GET',
            query,
        }, opts?.responseOpts);
    };

}
