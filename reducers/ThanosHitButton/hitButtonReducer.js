import { HIT_BUTTON_CONSTANTS } from "../../constants/ThanosHitButton/hitButtonConstants";

const initialState = {
    count: 0
}

export const hitButtonReducer = ( state = initialState, action) => {
    switch(action.type) {
        case HIT_BUTTON_CONSTANTS.INCREASE_COUNT:
            return Object.assign({},state,{
                count: state.count + action.payload
            });
        default:
            return state;
    }
}

