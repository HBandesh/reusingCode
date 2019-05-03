import { HIT_BUTTON_CONSTANTS } from "../../constants/ThanosHitButton/hitButtonConstants";

export const setPlpProducts = payload => {
    return {
        type: HIT_BUTTON_CONSTANTS.INCREASE_COUNT,
        payload,
    }
}