/**
 * What is a reducer?
 * A reducer descibes how the state changed
 * You need an initial state, and a reducer function
 * with swtich cases, but I am going to do if else statements
 * because that is how I understand it better
 */
import * as constants from "./actions.constants";
export const initialState = {
  name: "",
  lastName: "",
  clients: []
};

export const reducer = (state = initialState, action) => {
  console.log(`${action.type} has dispatched!`);
  if (action.type === constants.SET_NAME) {
    return Object.assign({}, state, {
      name: action.name
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

  return state;
};
