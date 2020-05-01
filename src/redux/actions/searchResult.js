import axios from 'axios';
import { GET_RESULT } from '../actionTypes';

export const getResult = (keyword) => async (dispatch) => {
  const result = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAW-8LceJEYWeSS5G3RIL3vVkepmN6_DCM&q=${keyword}&maxResults=30&type=video`
  );

  const maxPage = 10;
  const paginatedItems = result.data.items.reduce(
    (accumulator, current, idx) =>
      idx % maxPage === 0
        ? accumulator.concat([result.data.items.slice(idx, idx + 10)])
        : accumulator,
    []
  );

  dispatch({
    type: GET_RESULT,
    payload: {
      items: paginatedItems,
    },
  });
};
