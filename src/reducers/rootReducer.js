import { combineReducers } from 'redux';
// Aqui se importan los reducers
import { authReducer } from "./authReducer";
import { postReducer } from './postReducer';
import { modalReducer } from './modalReducer';


export const rootReducer = combineReducers({
  //Aquí van cada uno de los reducers
  auth: authReducer,
  posts: postReducer,
  modal: modalReducer
})