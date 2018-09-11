/**
 * What is a reducer?
 * A reducer descibes how the state changed
 * You need an initial state, and a reducer function
 * with swtich cases, but I am going to do if else statements
 * because that is how I understand it better
 */
import * as constants from "./actions.constants";
export const initialState = {
  firstName: "",
  lastName: "",
  clients: [],
  id: "",
  hours: 0
};

export const reducer = (state = initialState, action) => {
  console.log(`${action.type} has dispatched!`);
  if (action.type === constants.SET_NAME) {
    return Object.assign({}, state, {
      firstName: action.name
    });
  }

  if (action.type === constants.SET_LAST_NAME) {
    return Object.assign({}, state, {
      lastName: action.lastName
    });
  }

  if (action.type === constants.ADD_CLIENT) {
    return Object.assign({}, state, {
      clients: [...state.clients, action.client]
    });
  }

  if (action.type === constants.RECEIVE_CLIENTS) {
    return Object.assign({}, state, {
      clients: action.clients
    });
  }

  if (action.type === constants.SET_ID) {
    return Object.assign({}, state, {
      id: action.id
    });
  }

  if (action.type === constants.SET_HOURS) {
    return Object.assign({}, state, {
      hours: action.hours
    });
  }

  return state;
};
