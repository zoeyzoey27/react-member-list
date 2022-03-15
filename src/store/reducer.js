import { ADD_REACT_MEMBER, 
         SET_MEMBER_INPUT,
         ADD_JAVA_MEMBER, 
         DELETE_REACT_MEMBER,
         DELETE_JAVA_MEMBER, 
         EDIT_REACT_MEMBER,
         EDIT_JAVA_MEMBER } from "./constant"

export const initState = {
    member: {
        name: "",
        age: "",
        classType: 'react'
    },
    reactMembers: [],
    javaMembers: []
  }

  
const reducer = (state,action) => {
    switch (action.type){
        case SET_MEMBER_INPUT:{
            return{
                 ...state,
                 member: action.payload
            }
        }
        case ADD_REACT_MEMBER:{
            return{
               ...state,
               reactMembers: [...state.reactMembers, action.payload]
            }
        }
        case ADD_JAVA_MEMBER:{
          return{
             ...state,
             javaMembers: [...state.javaMembers, action.payload]
          }
        }
        case DELETE_REACT_MEMBER:{
          const newMembers = [...state.reactMembers]
          newMembers.splice(action.payload,1)
          return {
             ...state,
             reactMembers: newMembers 
          }
        }
        case DELETE_JAVA_MEMBER:{
          const newMembers = [...state.javaMembers]
          newMembers.splice(action.payload,1)
          return {
             ...state,
             javaMembers: newMembers 
          }
        }
        case EDIT_REACT_MEMBER:{
          const newMembers = [...state.reactMembers]
          newMembers.splice(action.payload1,1,action.payload2)
          return {
             ...state,
             reactMembers: newMembers 
          }
        }
        case EDIT_JAVA_MEMBER:{
          const newMembers = [...state.javaMembers]
          newMembers.splice(action.payload1,1,action.payload2)
          return {
             ...state,
             javaMembers: newMembers 
          }
        }
    } 
  }
export default reducer