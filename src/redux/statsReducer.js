import {CHANGE_FOLLOWERS, CHANGE_FOLLOWING,} from "./accountActions.js";

export const statsReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_FOLLOWERS:
            return{...state, followers: (state.followers + action.payload)<0? 0: (state.followers + action.payload) }
        case CHANGE_FOLLOWING:
            return {...state, following: (state.following + action.payload)<0 ? 0:  (state.following + action.payload) }
        default:
            return state;
    }
}
