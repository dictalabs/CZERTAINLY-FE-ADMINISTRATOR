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
    CertificateRequestFormat,
    CertificateType,
    ResponseAttributeDto,
} from './';

/**
 * Certificate request data
 * @export
 * @interface CertificateRequestDto
 */
export interface CertificateRequestDto {
    /**
     * @type {CertificateType}
     * @memberof CertificateRequestDto
     */
    certificateType?: CertificateType;
    /**
     * @type {CertificateRequestFormat}
     * @memberof CertificateRequestDto
     */
    certificateRequestFormat?: CertificateRequestFormat;
    /**
     * Public key algorithm
     * @type {string}
     * @memberof CertificateRequestDto
     */
    publicKeyAlgorithm: string;
    /**
     * Certificate signature algorithm
     * @type {string}
     * @memberof CertificateRequestDto
     */
    signatureAlgorithm: string;
    /**
     * Certificate request content
     * @type {string}
     * @memberof CertificateRequestDto
     */
    content: string;
    /**
     * Certificate common name
     * @type {string}
     * @memberof CertificateRequestDto
     */
    commonName: string;
    /**
     * Subject DN of the Certificate
     * @type {string}
     * @memberof CertificateRequestDto
     */
    subjectDn: string;
    /**
     * Subject alternative names
     * @type {{ [key: string]: object; }}
     * @memberof CertificateRequestDto
     */
    subjectAlternativeNames?: { [key: string]: object; };
    /**
     * CSR Attributes
     * @type {Array<ResponseAttributeDto>}
     * @memberof CertificateRequestDto
     */
    attributes?: Array<ResponseAttributeDto>;
    /**
     * Signature Attributes
     * @type {Array<ResponseAttributeDto>}
     * @memberof CertificateRequestDto
     */
    signatureAttributes?: Array<ResponseAttributeDto>;
}


