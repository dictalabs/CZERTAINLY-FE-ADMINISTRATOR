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
    DataAttribute,
} from './';

/**
 * Credential attribute content data
 * @export
 * @interface CredentialAttributeContentData
 */
export interface CredentialAttributeContentData {
    /**
     * Object identifier
     * @type {string}
     * @memberof CredentialAttributeContentData
     */
    uuid: string;
    /**
     * Object Name
     * @type {string}
     * @memberof CredentialAttributeContentData
     */
    name: string;
    /**
     * Credential Kind
     * @type {string}
     * @memberof CredentialAttributeContentData
     */
    kind: string;
    /**
     * List of Credential Attributes
     * @type {Array<DataAttribute>}
     * @memberof CredentialAttributeContentData
     */
    attributes: Array<DataAttribute>;
}
