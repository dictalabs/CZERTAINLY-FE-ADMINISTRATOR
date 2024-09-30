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
    ResponseAttributeDto,
} from './';

/**
 * @export
 * @interface EntityInstanceDto
 */
export interface EntityInstanceDto {
    /**
     * Object identifier
     * @type {string}
     * @memberof EntityInstanceDto
     */
    uuid: string;
    /**
     * Object Name
     * @type {string}
     * @memberof EntityInstanceDto
     */
    name: string;
    /**
     * List of Entity instance Attributes
     * @type {Array<ResponseAttributeDto>}
     * @memberof EntityInstanceDto
     */
    attributes: Array<ResponseAttributeDto>;
    /**
     * List of Custom Attributes
     * @type {Array<ResponseAttributeDto>}
     * @memberof EntityInstanceDto
     */
    customAttributes?: Array<ResponseAttributeDto>;
    /**
     * Status of Entity instance
     * @type {string}
     * @memberof EntityInstanceDto
     */
    status: string;
    /**
     * UUID of Entity Provider
     * @type {string}
     * @memberof EntityInstanceDto
     */
    connectorUuid: string;
    /**
     * Name of Entity Provider
     * @type {string}
     * @memberof EntityInstanceDto
     */
    connectorName: string;
    /**
     * Entity instance Kind
     * @type {string}
     * @memberof EntityInstanceDto
     */
    kind: string;
}
