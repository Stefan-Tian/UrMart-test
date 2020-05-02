import { GET_RESULT, CACHE_RESULT } from '../actionTypes';

const initialState = {
  items: [],
  cachedItems: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RESULT:
      return {
        ...state,
        items: action.payload.items,
      };
    case CACHE_RESULT:
      return {
        ...state,
        cachedItems: {
          ...state.cachedItems,
          [action.payload.keyword]: action.payload.items,
        },
      };
    default:
      return state;
  }
};
