import { combineReducers } from 'redux';

import Start from './reducer_starting';

// everything inside is a piece of state
const rootReducer = combineReducers({
  start: Start
});

export default rootReducer;
