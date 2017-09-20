import { FETCH_DATA } from '../actions/index';

const INIT_STATE = {

}

export default function(state = INIT_STATE, action) {
  switch (action.type) {
    case FETCH_DATA:
      return({
        payload: action.payload.data
      });
      break;
    default:
      // if nothing, return the last state, but instead of returning undefined, then we set null above
      return state;
  }
};
