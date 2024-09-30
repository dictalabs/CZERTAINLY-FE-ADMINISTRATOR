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
 * Rules for new Compliance Profiles
 * @export
 * @interface ComplianceRequestRulesDto
 */
export interface ComplianceRequestRulesDto {
    /**
     * UUID of the rule
     * @type {string}
     * @memberof ComplianceRequestRulesDto
     */
    uuid: string;
    /**
     * Attributes for the rule
     * @type {Array<RequestAttributeDto>}
     * @memberof ComplianceRequestRulesDto
     */
    attributes?: Array<RequestAttributeDto>;
}
