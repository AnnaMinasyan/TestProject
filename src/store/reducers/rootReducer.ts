import { combineReducers } from 'redux';
import { DriverReducer } from './drivers-reducer';

export const RootReducer = combineReducers({
  drivers: DriverReducer, 
});