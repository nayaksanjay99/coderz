import { combineReducers } from "redux";
import userState from "./user";
import inputState from './inputs'

const rootReducer = combineReducers({
  userState,
  inputState
});

export default rootReducer;
