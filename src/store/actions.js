import { SET_MEMBER_INPUT,
    ADD_REACT_MEMBER,
    ADD_JAVA_MEMBER,
    DELETE_JAVA_MEMBER,
    DELETE_REACT_MEMBER,
    EDIT_REACT_MEMBER,
    EDIT_JAVA_MEMBER } from "./constant";

export const setMemberInput = payload => ({
    type: SET_MEMBER_INPUT,
    payload
})

export const addReactMember = payload => ({
    type: ADD_REACT_MEMBER,
    payload
})

export const addJavaMember = payload => ({
    type: ADD_JAVA_MEMBER,
    payload
})

export const deleteReactMember = payload => ({
    type: DELETE_REACT_MEMBER,
    payload
})

export const deleteJavaMember = payload => ({
    type: DELETE_JAVA_MEMBER,
    payload
})

export const editReactMember = (payload1,payload2) => ({
    type: EDIT_REACT_MEMBER,
    payload1,
    payload2
})

export const editJavaMember = (payload1,payload2) => ({
    type: EDIT_JAVA_MEMBER,
    payload1,
    payload2
})



