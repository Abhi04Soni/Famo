import React, { createContext, useContext, useReducer } from 'react'
import { UserContext } from './Context'

export const ChatContext = createContext()
export const ChatContextProvider = ({ children }) => {
  const { user: currentUser } = useContext(UserContext)
  const INITIAL_STATE = {
    chatId: 'null',
    user: {}
  }
  const chatReducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE_USER':
        return {
          user: action.payload,
          chatId:
            currentUser > action.payload.uid
              ? currentUser + action.payload.uid
              : action.payload.uid + currentUser
        }
      case 'DELETE_USER':
        console.log('del user')
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE)

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  )
}
