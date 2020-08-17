import { combineReducers } from 'redux';
// Aqui se importan los reducers
import { authReducer } from "./authReducer";
import { postReducer } from './postReducer';


export const rootReducer = combineReducers({
  //Aquí van cada uno de los reducers
  auth: authReducer,
  posts: postReducer
})