import { SET_PAGE } from '../actionTypes';

export const setPage = (page) => (dispatch) => {
  dispatch({
    type: SET_PAGE,
    payload: {
      page,
    },
  });
};
