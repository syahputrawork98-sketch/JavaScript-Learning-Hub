/**
 * SUB-MODULE: SubHub_Unit.mjs
 * Mentransmisikan data energi ke Main Hub.
 */

export const UNIT_NAME = "VOLTA-99";
export const CORE_VOLTAGE = 220;

export function getStatus() {
    return `[${UNIT_NAME}] Status: STABLE at ${CORE_VOLTAGE}V`;
}

export default class Generator {
    constructor() {
        this.active = false;
    }
    ignite() {
        this.active = true;
        console.log(`[${UNIT_NAME}] Generator Ignited!`);
    }
}
