import { types } from "../types/types";

const initialState = {
  title: '',
  content: ''
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.sendForm:
      console.log(action);
      return {
        ...state,
        title: action.payload.title,
        content: action.payload.content
      };

    default:
      return state;
  }
};
