/**
 * what is a store?
 * What is the purpose of a store?
 * How do you structure a store?
 * What do you need to form a store?
 * What is Redux?
 *
 * Before thinking of a store, you must have a reducer
 * Before thinkning a reducer, you must have actions
 *
 * first, import the reducer
 */

import { reducer } from "./reducer";
import { createStore } from "redux";

const store = createStore(reducer);
export default store;
