import { START } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case START:
      return({
        payload: action.payload
      });
      break;
    default:
      // if nothing, return the last state, but instead of returning undefined, then we set null above
      return state;
  }
};
