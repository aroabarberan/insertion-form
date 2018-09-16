import { createStore, combineReducers, applyMiddleware } from 'redux'
import immutable from "redux-immutable-state-invariant"
import { composeWithDevTools } from "redux-devtools-extension"
import { logger } from "redux-logger"
import fileUpload from "./reducers/FileUploadReducer";


export default createStore(
  combineReducers({ 
    fileUpload
  }),
  composeWithDevTools(applyMiddleware(logger, immutable()))
)