import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {DriverReducer} from './reducers/drivers-reducer';

const rootReducer = combineReducers({
 user: DriverReducer,
});

const store = createStore(
 rootReducer,
 applyMiddleware(thunk),
);

export default store;