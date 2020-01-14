import { SET_VEHICLES_LIST, SET_SELECTED_MODEL } from '../constants/action-types';

//define the initial state
const initialState = {
  vehiclesList: [],
  selectedModel: {},
  filters: {},
}

//define a reducer with an intitalized state and logic to handle action
const VehiclesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VEHICLES_LIST:
      const { vehiclesList } = action.payload;
      return { ...state, vehiclesList }
    case SET_SELECTED_MODEL:
      const { selectedModel } = action.payload;
      return { ...state, selectedModel }
    default:
      return state;
  }
}

export default VehiclesReducer;
