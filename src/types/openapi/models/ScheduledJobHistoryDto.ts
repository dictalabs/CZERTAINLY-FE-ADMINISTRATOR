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
    Resource,
    SchedulerJobExecutionStatus,
} from './';

/**
 * Scheduled job history
 * @export
 * @interface ScheduledJobHistoryDto
 */
export interface ScheduledJobHistoryDto {
    /**
     * Scheduled job UUID
     * @type {string}
     * @memberof ScheduledJobHistoryDto
     */
    jobUuid?: string;
    /**
     * Start time of triggered task
     * @type {string}
     * @memberof ScheduledJobHistoryDto
     */
    startTime: string;
    /**
     * End time of triggered task
     * @type {string}
     * @memberof ScheduledJobHistoryDto
     */
    endTime?: string;
    /**
     * @type {SchedulerJobExecutionStatus}
     * @memberof ScheduledJobHistoryDto
     */
    status: SchedulerJobExecutionStatus;
    /**
     * Message explaining result status
     * @type {string}
     * @memberof ScheduledJobHistoryDto
     */
    resultMessage?: string;
    /**
     * @type {Resource}
     * @memberof ScheduledJobHistoryDto
     */
    resultObjectType?: Resource;
    /**
     * Result object identification (UUID)
     * @type {Array<string>}
     * @memberof ScheduledJobHistoryDto
     */
    resultObjectIdentification?: Array<string>;
}


