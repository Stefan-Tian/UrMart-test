import { SET_PAGE } from '../actionTypes';

const initialState = 1;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return action.payload.page;
    default:
      return state;
  }
};
