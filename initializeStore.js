/**
 * @module initializeStore This module is used to initialize Redux store.
 */
import { combineReducers, createStore } from "redux";
import { hitButtonReducer } from "./reducers/ThanosHitButton/hitButtonReducer";

export const initializeStore = () => {
    const AppReducers = combineReducers({
        hitButtonReducer,
    });

    /**
     * @function rootReducer This function creates a root reducer.
     * @param {Object} state 
     * @param {Object} action 
     */
    
    const rootReducer = (state,action) => {
        return AppReducers(state,action);
    }

    let store = createStore(rootReducer);

    return store;
}