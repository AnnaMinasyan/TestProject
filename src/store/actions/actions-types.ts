import { IDriver, IRace } from "../reducers/types";

export const LOAD_DRIVERS_REQUEST = 'LOAD_DRIVERS_REQUEST';
export const LOAD_DRIVERS_SUCCESS = 'LOAD_DRIVERS_SUCCESS';
export const LOAD_DRIVERS_FAILURE = 'LOAD_DRIVERS_FAILURE';


export const LOAD_DRIVER_REQUEST = 'LOAD_DRIVER_REQUEST';
export const LOAD_DRIVER_SUCCESS = 'LOAD_DRIVER_SUCCESS';
export const LOAD_DRIVER_FAILURE = 'LOAD_DRIVER_FAILURE';

export const LOAD_RACES_REQUEST = 'LOAD_RACES_REQUEST';
export const LOAD_RACES_SUCCESS = 'LOAD_RACES_SUCCESS';
export const LOAD_RACES_FAILURE = 'LOAD_RACES_FAILURE';

interface LoadDriverssRequest {
  type: typeof LOAD_DRIVERS_REQUEST;
}
interface LoadDriversSuccess {
  type: typeof LOAD_DRIVERS_SUCCESS;
  payload: { drivers: IDriver[] };
}

interface LoadDriversFailure {
  type: typeof LOAD_DRIVERS_FAILURE;
  payload: { message: string };
}


interface LoadDriverSuccess {
  type: typeof LOAD_DRIVER_SUCCESS;
  payload: { driver: IDriver };
}
interface LoadRacesSuccess {
  type: typeof LOAD_RACES_SUCCESS;
  payload: { races: IRace[] };
}

export type DriverActionTypes =
  LoadDriverssRequest |
  LoadDriversSuccess |
  LoadDriverSuccess |
  LoadDriversFailure |
  LoadRacesSuccess

