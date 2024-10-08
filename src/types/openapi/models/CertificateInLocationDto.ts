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
    CertificateState,
    CertificateValidationStatus,
    MetadataResponseDto,
    ResponseAttributeDto,
} from './';

/**
 * List of Certificates in Location
 * @export
 * @interface CertificateInLocationDto
 */
export interface CertificateInLocationDto {
    /**
     * UUID of the Certificate
     * @type {string}
     * @memberof CertificateInLocationDto
     */
    certificateUuid: string;
    /**
     * @type {CertificateState}
     * @memberof CertificateInLocationDto
     */
    state: CertificateState;
    /**
     * @type {CertificateValidationStatus}
     * @memberof CertificateInLocationDto
     */
    validationStatus: CertificateValidationStatus;
    /**
     * Common Name of the Subject DN field of the Certificate
     * @type {string}
     * @memberof CertificateInLocationDto
     */
    commonName: string;
    /**
     * Serial number in HEX of the Certificate
     * @type {string}
     * @memberof CertificateInLocationDto
     */
    serialNumber: string;
    /**
     * Metadata of the Certificate in Location
     * @type {Array<MetadataResponseDto>}
     * @memberof CertificateInLocationDto
     */
    metadata?: Array<MetadataResponseDto>;
    /**
     * Applied push attributes
     * @type {Array<ResponseAttributeDto>}
     * @memberof CertificateInLocationDto
     */
    pushAttributes?: Array<ResponseAttributeDto>;
    /**
     * Applied issue attributes
     * @type {Array<ResponseAttributeDto>}
     * @memberof CertificateInLocationDto
     */
    csrAttributes?: Array<ResponseAttributeDto>;
    /**
     * If the Certificate in Location has associated private key
     * @type {boolean}
     * @memberof CertificateInLocationDto
     */
    withKey?: boolean;
}


