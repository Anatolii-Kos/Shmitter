export const CHANGE_AVATAR='CHANGE_AVATAR'
export const CHANGE_NAME='CHANGE_NAME'
export const CHANGE_FOLLOWERS='CHANGE_FOLLOWERS'
export const CHANGE_FOLLOWING='CHANGE_FOLLOWING'

export const changeAvatar= url =>({
    type: CHANGE_AVATAR,
    payload: url
});

export const changeName = name =>({
    type: CHANGE_NAME,
    payload: name
});

export const changeFollowers = sum =>({
    type: CHANGE_FOLLOWERS,
    payload: sum
})
export const changeFollowing = sum =>({
    type: CHANGE_FOLLOWING,
    payload: sum
})
