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
    AttributeCallbackMapping,
} from './';

/**
 * Optional definition of callback for getting the content of the Attribute based on the action
 * @export
 * @interface AttributeCallback
 */
export interface AttributeCallback {
    /**
     * Context part of callback URL
     * @type {string}
     * @memberof AttributeCallback
     */
    callbackContext: string;
    /**
     * HTTP method of the callback
     * @type {string}
     * @memberof AttributeCallback
     */
    callbackMethod: string;
    /**
     * Mappings for the callback method
     * @type {Array<AttributeCallbackMapping>}
     * @memberof AttributeCallback
     */
    mappings: Array<AttributeCallbackMapping>;
}
