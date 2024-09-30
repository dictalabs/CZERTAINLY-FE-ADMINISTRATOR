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
    RequestAttributeDto,
} from './';

/**
 * @export
 * @interface RandomDataRequestDto
 */
export interface RandomDataRequestDto {
    /**
     * Number of random bytes to generate
     * @type {number}
     * @memberof RandomDataRequestDto
     */
    length: number;
    /**
     * Random generator Attributes
     * @type {Array<RequestAttributeDto>}
     * @memberof RandomDataRequestDto
     */
    attributes?: Array<RequestAttributeDto>;
}
