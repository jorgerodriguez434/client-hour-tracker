/**
 * What we are building here are action creators
 * What are actions creators? And why do we use them?
 * Every action has a type
 * 
 * Actions describe what happened
 * Reducers describe how the state changed

 */
import * as constants from "./actions.constants";

export const setName = name => ({
  type: constants.SET_NAME,
  name
});

export const setLastName = lastName => ({
  type: constants.SET_LAST_NAME,
  lastName
});

export const addClient = client => ({
  type: constants.ADD_CLIENT,
  client
});

export const updateHours = hours => ({
  type: constants.UPDATE_HOURS,
  hours
});
