import { createStore, combineReducers, applyMiddleware } from 'redux'
import immutable from "redux-immutable-state-invariant"
import { composeWithDevTools } from "redux-devtools-extension"
import { logger } from "redux-logger"
// import  from './reducers/'



export default createStore(
  combineReducers({ 
    // rootReducer
  }),
  composeWithDevTools(applyMiddleware(logger, immutable()))
)