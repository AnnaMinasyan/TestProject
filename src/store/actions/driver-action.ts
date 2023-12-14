import { ThunkAction } from 'redux-thunk'
import { api_drivers } from '../../service/drivers';
import { LOAD_DRIVERS_FAILURE, LOAD_DRIVERS_REQUEST, LOAD_DRIVERS_SUCCESS, LOAD_DRIVER_SUCCESS, LOAD_RACES_SUCCESS } from './actions-types';
import { IDriverState } from '../reducers/drivers-reducer';
import { Action } from 'redux';

export function loadDrivers(): ThunkAction<void, IDriverState, null, Action<string>> {
  return (dispatch) => {
    dispatch({ type: LOAD_DRIVERS_REQUEST });
    return api_drivers
      .getDrivers()
      .then((data) => {        
        dispatch({
          type: LOAD_DRIVERS_SUCCESS,
          payload:  data.data.MRData.DriverTable.Drivers ,
        });
      })
      .catch((error) => {
        dispatch({ type: LOAD_DRIVERS_FAILURE, payload: error });
      });
  };
}
export function loadDriverById(id:string): ThunkAction<void, IDriverState, null, Action<string>> {
  return (dispatch) => {
    dispatch({ type: LOAD_DRIVERS_REQUEST });
    return api_drivers
      .getDriverById(id)
      .then((data) => {
        
        dispatch({
          type: LOAD_DRIVER_SUCCESS,
          payload:  data.data.MRData.DriverTable.Drivers[0] ,
        });
      })
      .catch((error) => {
        dispatch({ type: LOAD_DRIVERS_FAILURE, payload: error });
      });
  };
}
export function loadRacesById(id:string): ThunkAction<void, IDriverState, null, Action<string>> {
  return (dispatch) => {
    dispatch({ type: LOAD_DRIVERS_REQUEST });
    return api_drivers
      .getRacesById(id)
      .then((data) => {
        dispatch({
          type: LOAD_RACES_SUCCESS,
          payload:  data.data.MRData.RaceTable.Races ,
        });
      })
      .catch((error) => {
        dispatch({ type: LOAD_DRIVERS_FAILURE, payload: error });
      });
  };
}