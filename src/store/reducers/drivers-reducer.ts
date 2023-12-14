import {
  DriverActionTypes,
  LOAD_DRIVERS_FAILURE,
  LOAD_DRIVERS_REQUEST,
  LOAD_DRIVERS_SUCCESS,
  LOAD_DRIVER_SUCCESS,
  LOAD_RACES_SUCCESS
} from "../actions/actions-types";
import { IDriver, IRace } from "./types";

export interface IDriverState {
  drivers: IDriver[];
  driver: IDriver;
  races?: IRace[];
  loading: boolean;
  error: any;
}
const initialDriverState = {
  drivers: [],
  loading: true,
  error: null,
};

export function DriverReducer(
  state = initialDriverState,
  action: DriverActionTypes
) {
  switch (action.type) {
    case LOAD_DRIVERS_REQUEST:
      return { ...state };
    case LOAD_DRIVERS_SUCCESS:
      return {
        ...state,
        drivers: action.payload,
        loading: false
      };
    case LOAD_DRIVER_SUCCESS:
      return {
        ...state,
        driver: action.payload,
        loading: false
      };
    case LOAD_RACES_SUCCESS:
      return {
        ...state,
        races: action.payload,
        loading: false
      };
    case LOAD_DRIVERS_FAILURE:
      return { ...state, error: action.payload.message, loading: false };
    default:
      return state;
  }
}
export default DriverReducer;
