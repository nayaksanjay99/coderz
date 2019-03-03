import { GET_GROUND_WATER_PREDICTED_VALUE } from "../constants/actionTypes";

export const initialState = {
  groundWaterValues: []
};

export default function predictedDataState(state = initialState, action) {
  switch (action.type) {
    case GET_GROUND_WATER_PREDICTED_VALUE:
      return {
        groundWaterValues: action.groundWaterValues
      };
    default:
      return state;
  }
}
