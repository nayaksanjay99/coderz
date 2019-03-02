import { GET_USER, UPDATE_USER, DELETE_USER } from "../constants/actionTypes";

export const initialState = {
  id: "",
  fname: "",
  lname: "",
  mail: "",
  notifications: [],
  isAdmin: false
};

export default function productOptions(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        id: action.id,
        fname: action.fname,
        lname: action.lname,
        mail: action.mail,
        notification: action.notification,
        isAdmin: action.isAdmin
      };
    case UPDATE_USER:
      return {
        ...state,
        fname: action.fname,
        lname: action.lname,
        mail: action.mail
      };
    case DELETE_USER:
      return {
        initialState
      };
    default:
      return state;
  }
}