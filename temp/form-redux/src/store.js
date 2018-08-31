import { createStore, combineReducers, applyMiddleware } from 'redux'
import immutable from "redux-immutable-state-invariant"
import { composeWithDevTools } from "redux-devtools-extension"
import { logger } from "redux-logger"
import friends from './reducers/FriendReducer'



export default createStore(
  combineReducers({ 
    friends
  }),
  composeWithDevTools(applyMiddleware(logger, immutable()))
)