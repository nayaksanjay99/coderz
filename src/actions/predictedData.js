import { GET_GROUND_WATER_PREDICTED_VALUE } from "../constants/actionTypes";
import getGroundWaterPredictions from "../services/getPredictedData";

export const getPredictedDataForGroundWater = (
  state,
  district,
  block,
  endYear
) => dispatch => {
  return getGroundWaterPredictions(state, district, block, endYear).then(
    predictions => {
      return dispatch({
        type: GET_GROUND_WATER_PREDICTED_VALUE,
        groundWaterValues: predictions
      });
    }
  );
};
