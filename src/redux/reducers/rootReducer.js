import { combineReducers } from 'redux';
// Aqui se importan los reducers
import { authReducer } from './authReducer';
import { postReducer } from './postReducer';
import { modalReducer } from './modalReducer';
import { formReducer } from './formReducer';

export const rootReducer = combineReducers({
	auth: authReducer,
	posts: postReducer,
	modal: modalReducer,
	form: formReducer,
});
