import { combineReducers, createStore } from "redux";
import { hitButtonReducer } from "./reducers/ThanosHitButton/hitButtonReducer";

export const initializeStore = () => {
    const AppReducers = combineReducers({
        hitButtonReducer,
    });
    
    const rootReducer = (state,action) => {
        return AppReducers(state,action);
    }

    let store = createStore(rootReducer);

    return store;
}