import { SET_VEHICLES_LIST, SET_SELECTED_MODEL } from '../constants/action-types';

export const setVehicleList = payload => ({
  type: SET_VEHICLES_LIST,
  payload
});


export const setSelectedModel = payload => ({
  type: SET_SELECTED_MODEL,
  payload
});