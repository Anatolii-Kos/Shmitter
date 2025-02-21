
import {legacy_createStore} from "redux";
import {rootReducer} from "./rootReducer.js";

const initialState = {
    user: {
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar'
    },
    stats:{
        followers: 0,
        following: 0
    }
}

export const store = legacy_createStore(rootReducer, initialState);
