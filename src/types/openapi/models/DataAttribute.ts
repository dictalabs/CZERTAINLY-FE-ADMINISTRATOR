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
    AttributeCallback,
    AttributeContentType,
    AttributeType,
    BaseAttributeConstraint,
    BaseAttributeContentDto,
    DataAttributeProperties,
} from './';

/**
 * Data attribute allows to store and transfer dynamic data. Its content can be edited and send in requests to store.
 * @export
 * @interface DataAttribute
 */
export interface DataAttribute {

     /**
     * Content of the Attribute
     * @type {Array<BaseAttributeContentDto>}
     * @memberof DataAttribute
     */
     content?: Array<BaseAttributeContentDto>;
    /**
     * UUID of the Attribute for unique identification
     * @type {string}
     * @memberof DataAttribute
     */
    uuid: string;
    /**
     * Name of the Attribute that is used for identification
     * @type {string}
     * @memberof DataAttribute
     */
    name: string;
    /**
     * Optional description of the Attribute, should contain helper text on what is expected
     * @type {string}
     * @memberof DataAttribute
     */
    description?: string;
    /**
     * @type {AttributeType}
     * @memberof DataAttribute
     */
    type: AttributeType;
    /**
     * @type {AttributeContentType}
     * @memberof DataAttribute
     */
    contentType: AttributeContentType;
    /**
     * @type {DataAttributeProperties}
     * @memberof DataAttribute
     */
    properties: DataAttributeProperties;
    /**
     * Optional regular expressions and constraints used for validating the Attribute content
     * @type {Array<BaseAttributeConstraint>}
     * @memberof DataAttribute
     */
    constraints?: Array<BaseAttributeConstraint>;
    /**
     * @type {AttributeCallback}
     * @memberof DataAttribute
     */
    attributeCallback?: AttributeCallback;
}


