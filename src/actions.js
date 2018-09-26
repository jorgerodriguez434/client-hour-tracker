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

export const receiveClients = clients => ({
  type: constants.RECEIVE_CLIENTS,
  clients
});

export const setId = id => ({
  type: constants.SET_ID,
  id
});

export const setHours = hours => ({
  type: constants.SET_HOURS,
  hours
});

export const setCaseHours = hours => ({
  type: constants.SET_CASE_HOURS,
  hours
});

export const setCaseName = name => ({
  type: constants.SET_CASE_NAME,
  name
});

export const setCaseDescription = description => ({
  type: constants.SET_CASE_DESCRIPTION,
  description
});

export const setCase = (name, description) => ({
  type: constants.SET_CASE,
  name,
  description
});

export const addCase = (caseName, caseDescription) => ({
    type: constants.ADD_CASE,
    caseName,
    caseDescription
  });

  export const emptyCases = () => ({
    type: constants.EMPTY_CASES,
  });