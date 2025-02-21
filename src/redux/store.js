
import {legacy_createStore} from "redux";
import {rootReducer} from "./rootReducer.js";


export const store = legacy_createStore(rootReducer);
