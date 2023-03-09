import { createAction } from 'Utils/createAction';

const initialState = [];

export const GET_POSTS = createAction('GET_POSTS');
export const ADD_POST = createAction('ADD_POST');
export const DELETE_POST = createAction('DELETE_POST');

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return [...state, ...action.payload.res];
    case 'ADD_POST':
      return [action.payload, ...state];
    case 'DELETE_POST':
      return state.filter((post) => post.id !== action.payload.id);
    default:
      return state;
  }
};

export default reducer;
