import {combineReducers, compose, createStore} from "redux";
import {common, initialCommon} from './reducers/common'


const rootReducer = combineReducers({
    common
});

const initialState = {
    common: {...initialCommon}
};


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers()
);

export default store;
