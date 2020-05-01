import { GET_RESULT } from '../actionTypes';

const initialState = {
  items: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RESULT:
      return {
        items: action.payload.items,
      };
    default:
      return state;
  }
};
