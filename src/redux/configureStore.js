import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Leaders } from './content';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            leaders: Leaders
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}