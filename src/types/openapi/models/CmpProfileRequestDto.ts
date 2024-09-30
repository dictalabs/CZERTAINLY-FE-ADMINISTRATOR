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

import type {
    ProtectionMethod,
    RequestAttributeDto,
} from './';

/**
 * @export
 * @interface CmpProfileRequestDto
 */
export interface CmpProfileRequestDto {
    /**
     * Description of the CMP Profile
     * @type {string}
     * @memberof CmpProfileRequestDto
     */
    description?: string;
    /**
     * RA Profile UUID that the CMP Profile is associated with
     * @type {string}
     * @memberof CmpProfileRequestDto
     */
    raProfileUuid?: string;
    /**
     * List of Attributes to issue Certificate for the associated RA Profile. Required when raProfileUuid is provided
     * @type {Array<RequestAttributeDto>}
     * @memberof CmpProfileRequestDto
     */
    issueCertificateAttributes?: Array<RequestAttributeDto>;
    /**
     * List of Attributes to revoke Certificate for the associated RA Profile. Required when raProfileUuid is provided
     * @type {Array<RequestAttributeDto>}
     * @memberof CmpProfileRequestDto
     */
    revokeCertificateAttributes?: Array<RequestAttributeDto>;
    /**
     * List of Custom Attributes for CMP Profile
     * @type {Array<RequestAttributeDto>}
     * @memberof CmpProfileRequestDto
     */
    customAttributes?: Array<RequestAttributeDto>;
    /**
     * @type {ProtectionMethod}
     * @memberof CmpProfileRequestDto
     */
    requestProtectionMethod: ProtectionMethod;
    /**
     * @type {ProtectionMethod}
     * @memberof CmpProfileRequestDto
     */
    responseProtectionMethod: ProtectionMethod;
    /**
     * Shared secret for the CMP Request. Required when requestProtectionMethod is sharedSecret
     * @type {string}
     * @memberof CmpProfileRequestDto
     */
    sharedSecret?: string;
    /**
     * UUID of the Certificate to be used as signing certificate for CMP responses. Required when responseProtectionMethod is signature
     * @type {string}
     * @memberof CmpProfileRequestDto
     */
    signingCertificateUuid?: string;
    /**
     * Name of the CMP Profile
     * @type {string}
     * @memberof CmpProfileRequestDto
     */
    name: string;
    /**
     * Variant of the CMP Profile
     * @type {string}
     * @memberof CmpProfileRequestDto
     */
    variant: CmpProfileRequestDtoVariantEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum CmpProfileRequestDtoVariantEnum {
    V2 = 'v2',
    V23gpp = 'v2_3gpp',
    V3 = 'v3'
}

