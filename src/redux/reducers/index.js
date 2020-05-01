import { combineReducers } from 'redux';
import searchResult from './searchResult';
import pageFilter from './pageFilter';

export default combineReducers({ searchResult, pageFilter });
