import { createStore, combineReducers, applyMiddleware } from 'redux'
import immutable from "redux-immutable-state-invariant"
import { composeWithDevTools } from "redux-devtools-extension"
import { logger } from "redux-logger"
import data from "./reducers/DataReducer";


export default createStore(
  combineReducers({ 
    data
  }),
  composeWithDevTools(applyMiddleware(logger, immutable()))
)