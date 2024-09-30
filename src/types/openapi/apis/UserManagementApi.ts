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
import type { OperationOpts, HttpHeaders } from '../runtime';
import type {
    AddUserRequestDto,
    AuthenticationServiceExceptionDto,
    RoleDto,
    SubjectPermissionsDto,
    UpdateUserRequestDto,
    UserDetailDto,
    UserDto,
    UserIdentificationRequestDto,
} from '../models';

export interface AddRoleRequest {
    userUuid: string;
    roleUuid: string;
}

export interface CreateUserRequest {
    addUserRequestDto: AddUserRequestDto;
}

export interface DeleteUserRequest {
    userUuid: string;
}

export interface DisableUserRequest {
    userUuid: string;
}

export interface EnableUserRequest {
    userUuid: string;
}

export interface GetPermissionsRequest {
    userUuid: string;
}

export interface GetUserRequest {
    userUuid: string;
}

export interface GetUserRolesRequest {
    userUuid: string;
}

export interface IdentifyUserRequest {
    userIdentificationRequestDto: UserIdentificationRequestDto;
}

export interface RemoveRoleRequest {
    userUuid: string;
    roleUuid: string;
}

export interface UpdateRolesRequest {
    userUuid: string;
    requestBody: Array<string>;
}

export interface UpdateUserRequest {
    userUuid: string;
    updateUserRequestDto: UpdateUserRequestDto;
}

/**
 * no description
 */
export class UserManagementApi extends BaseAPI {

    /**
     * Add role to User
     */
    addRole({ userUuid, roleUuid }: AddRoleRequest): Observable<UserDetailDto>
    addRole({ userUuid, roleUuid }: AddRoleRequest, opts?: OperationOpts): Observable<AjaxResponse<UserDetailDto>>
    addRole({ userUuid, roleUuid }: AddRoleRequest, opts?: OperationOpts): Observable<UserDetailDto | AjaxResponse<UserDetailDto>> {
        throwIfNullOrUndefined(userUuid, 'userUuid', 'addRole');
        throwIfNullOrUndefined(roleUuid, 'roleUuid', 'addRole');

        return this.request<UserDetailDto>({
            url: '/v1/users/{userUuid}/roles/{roleUuid}'.replace('{userUuid}', encodeURI(userUuid)).replace('{roleUuid}', encodeURI(roleUuid)),
            method: 'PUT',
        }, opts?.responseOpts);
    };

    /**
     * Create User
     */
    createUser({ addUserRequestDto }: CreateUserRequest): Observable<UserDetailDto>
    createUser({ addUserRequestDto }: CreateUserRequest, opts?: OperationOpts): Observable<AjaxResponse<UserDetailDto>>
    createUser({ addUserRequestDto }: CreateUserRequest, opts?: OperationOpts): Observable<UserDetailDto | AjaxResponse<UserDetailDto>> {
        throwIfNullOrUndefined(addUserRequestDto, 'addUserRequestDto', 'createUser');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<UserDetailDto>({
            url: '/v1/users',
            method: 'POST',
            headers,
            body: addUserRequestDto,
        }, opts?.responseOpts);
    };

    /**
     * Delete User
     */
    deleteUser({ userUuid }: DeleteUserRequest): Observable<void>
    deleteUser({ userUuid }: DeleteUserRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    deleteUser({ userUuid }: DeleteUserRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(userUuid, 'userUuid', 'deleteUser');

        return this.request<void>({
            url: '/v1/users/{userUuid}'.replace('{userUuid}', encodeURI(userUuid)),
            method: 'DELETE',
        }, opts?.responseOpts);
    };

    /**
     * Disable User
     */
    disableUser({ userUuid }: DisableUserRequest): Observable<UserDetailDto>
    disableUser({ userUuid }: DisableUserRequest, opts?: OperationOpts): Observable<AjaxResponse<UserDetailDto>>
    disableUser({ userUuid }: DisableUserRequest, opts?: OperationOpts): Observable<UserDetailDto | AjaxResponse<UserDetailDto>> {
        throwIfNullOrUndefined(userUuid, 'userUuid', 'disableUser');

        return this.request<UserDetailDto>({
            url: '/v1/users/{userUuid}/disable'.replace('{userUuid}', encodeURI(userUuid)),
            method: 'PATCH',
        }, opts?.responseOpts);
    };

    /**
     * Enable User
     */
    enableUser({ userUuid }: EnableUserRequest): Observable<UserDetailDto>
    enableUser({ userUuid }: EnableUserRequest, opts?: OperationOpts): Observable<AjaxResponse<UserDetailDto>>
    enableUser({ userUuid }: EnableUserRequest, opts?: OperationOpts): Observable<UserDetailDto | AjaxResponse<UserDetailDto>> {
        throwIfNullOrUndefined(userUuid, 'userUuid', 'enableUser');

        return this.request<UserDetailDto>({
            url: '/v1/users/{userUuid}/enable'.replace('{userUuid}', encodeURI(userUuid)),
            method: 'PATCH',
        }, opts?.responseOpts);
    };

    /**
     * Get User permissions
     */
    getPermissions({ userUuid }: GetPermissionsRequest): Observable<SubjectPermissionsDto>
    getPermissions({ userUuid }: GetPermissionsRequest, opts?: OperationOpts): Observable<AjaxResponse<SubjectPermissionsDto>>
    getPermissions({ userUuid }: GetPermissionsRequest, opts?: OperationOpts): Observable<SubjectPermissionsDto | AjaxResponse<SubjectPermissionsDto>> {
        throwIfNullOrUndefined(userUuid, 'userUuid', 'getPermissions');

        return this.request<SubjectPermissionsDto>({
            url: '/v1/users/{userUuid}/permissions'.replace('{userUuid}', encodeURI(userUuid)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * Get user details
     */
    getUser({ userUuid }: GetUserRequest): Observable<UserDetailDto>
    getUser({ userUuid }: GetUserRequest, opts?: OperationOpts): Observable<AjaxResponse<UserDetailDto>>
    getUser({ userUuid }: GetUserRequest, opts?: OperationOpts): Observable<UserDetailDto | AjaxResponse<UserDetailDto>> {
        throwIfNullOrUndefined(userUuid, 'userUuid', 'getUser');

        return this.request<UserDetailDto>({
            url: '/v1/users/{userUuid}'.replace('{userUuid}', encodeURI(userUuid)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * Get User Roles
     */
    getUserRoles({ userUuid }: GetUserRolesRequest): Observable<Array<RoleDto>>
    getUserRoles({ userUuid }: GetUserRolesRequest, opts?: OperationOpts): Observable<AjaxResponse<Array<RoleDto>>>
    getUserRoles({ userUuid }: GetUserRolesRequest, opts?: OperationOpts): Observable<Array<RoleDto> | AjaxResponse<Array<RoleDto>>> {
        throwIfNullOrUndefined(userUuid, 'userUuid', 'getUserRoles');

        return this.request<Array<RoleDto>>({
            url: '/v1/users/{userUuid}/roles'.replace('{userUuid}', encodeURI(userUuid)),
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * Identify User
     */
    identifyUser({ userIdentificationRequestDto }: IdentifyUserRequest): Observable<UserDetailDto>
    identifyUser({ userIdentificationRequestDto }: IdentifyUserRequest, opts?: OperationOpts): Observable<AjaxResponse<UserDetailDto>>
    identifyUser({ userIdentificationRequestDto }: IdentifyUserRequest, opts?: OperationOpts): Observable<UserDetailDto | AjaxResponse<UserDetailDto>> {
        throwIfNullOrUndefined(userIdentificationRequestDto, 'userIdentificationRequestDto', 'identifyUser');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<UserDetailDto>({
            url: '/v1/users/identify',
            method: 'POST',
            headers,
            body: userIdentificationRequestDto,
        }, opts?.responseOpts);
    };

    /**
     * List Users
     */
    listUsers(): Observable<Array<UserDto>>
    listUsers(opts?: OperationOpts): Observable<AjaxResponse<Array<UserDto>>>
    listUsers(opts?: OperationOpts): Observable<Array<UserDto> | AjaxResponse<Array<UserDto>>> {
        return this.request<Array<UserDto>>({
            url: '/v1/users',
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     * Remove role from User
     */
    removeRole({ userUuid, roleUuid }: RemoveRoleRequest): Observable<UserDetailDto>
    removeRole({ userUuid, roleUuid }: RemoveRoleRequest, opts?: OperationOpts): Observable<AjaxResponse<UserDetailDto>>
    removeRole({ userUuid, roleUuid }: RemoveRoleRequest, opts?: OperationOpts): Observable<UserDetailDto | AjaxResponse<UserDetailDto>> {
        throwIfNullOrUndefined(userUuid, 'userUuid', 'removeRole');
        throwIfNullOrUndefined(roleUuid, 'roleUuid', 'removeRole');

        return this.request<UserDetailDto>({
            url: '/v1/users/{userUuid}/roles/{roleUuid}'.replace('{userUuid}', encodeURI(userUuid)).replace('{roleUuid}', encodeURI(roleUuid)),
            method: 'DELETE',
        }, opts?.responseOpts);
    };

    /**
     * Add roles to User
     */
    updateRoles({ userUuid, requestBody }: UpdateRolesRequest): Observable<UserDetailDto>
    updateRoles({ userUuid, requestBody }: UpdateRolesRequest, opts?: OperationOpts): Observable<AjaxResponse<UserDetailDto>>
    updateRoles({ userUuid, requestBody }: UpdateRolesRequest, opts?: OperationOpts): Observable<UserDetailDto | AjaxResponse<UserDetailDto>> {
        throwIfNullOrUndefined(userUuid, 'userUuid', 'updateRoles');
        throwIfNullOrUndefined(requestBody, 'requestBody', 'updateRoles');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<UserDetailDto>({
            url: '/v1/users/{userUuid}/roles'.replace('{userUuid}', encodeURI(userUuid)),
            method: 'PATCH',
            headers,
            body: requestBody,
        }, opts?.responseOpts);
    };

    /**
     * Update User
     */
    updateUser({ userUuid, updateUserRequestDto }: UpdateUserRequest): Observable<UserDetailDto>
    updateUser({ userUuid, updateUserRequestDto }: UpdateUserRequest, opts?: OperationOpts): Observable<AjaxResponse<UserDetailDto>>
    updateUser({ userUuid, updateUserRequestDto }: UpdateUserRequest, opts?: OperationOpts): Observable<UserDetailDto | AjaxResponse<UserDetailDto>> {
        throwIfNullOrUndefined(userUuid, 'userUuid', 'updateUser');
        throwIfNullOrUndefined(updateUserRequestDto, 'updateUserRequestDto', 'updateUser');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<UserDetailDto>({
            url: '/v1/users/{userUuid}'.replace('{userUuid}', encodeURI(userUuid)),
            method: 'PUT',
            headers,
            body: updateUserRequestDto,
        }, opts?.responseOpts);
    };

}
