import { combineReducers } from 'redux';
// Aqui se importan los reducers
import { authReducer } from "./authReducer";


export const rootReducer = combineReducers({
  //Aquí van cada uno de los reducers
  auth: authReducer
})