import { SET_PAGE } from '../actionTypes';

export const setPage = (page) => (dispatch) => {
  console.log(dispatch);
  dispatch({
    type: SET_PAGE,
    payload: {
      page,
    },
  });
};
