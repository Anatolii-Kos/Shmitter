// type User = {
//     name: string,
//     avatar: string,
// }

import {CHANGE_AVATAR, CHANGE_NAME} from "./accountActions.js";

const defaultState = {
    name: 'Monster',
    avatar: 'https://gravatar.com/avatar'
}

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {...state, name: action.payload || state.name};
        case CHANGE_AVATAR:
            return {...state, avatar: action.payload || state.avatar};
        default:
                return state;
    }

}
