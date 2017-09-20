import { combineReducers } from 'redux';

import apiData from './reducer_api_data';
import Start from './reducer_starting';

// everything inside is a piece of state
const rootReducer = combineReducers({
  api_data: apiData,
  start: Start
});

export default rootReducer;
