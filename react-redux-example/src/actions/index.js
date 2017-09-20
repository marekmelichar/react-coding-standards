import axios from 'axios';

/*
 * action types
 */

export const FETCH_DATA = 'FETCH_DATA';
export const ERROR_FETCH_DATA = 'ERROR_FETCH_DATA';
export const POST_DATA = 'POST_DATA';
export const ERROR_POST_DATA = 'ERROR_POST_DATA';
export const START = 'START';


// this is when using the "redux-promise" package
// when we dont need to wait for the response, the middleware will take care of it
export const fetchData = () => {
  const request = axios.get(`${API_URL}/posts/1`)
    .catch(err => {
      return {
        type: ERROR_FETCH_DATA,
        payload: err
      }
    })

  return {
    type: FETCH_DATA,
    payload: request
  }
}

// this is when using the "redux-thunk" package
// when we want to send some argument together with request,
// and we want to wait for the response here, and send the response as a payload from here
export const postData = (arg1, arg2) => {
  const request = axios.post(`${API_URL}/posts`, {
    arg1,
    arg2
  }).catch(err => {
      return {
        type: ERROR_POST_DATA,
        payload: err
      }
    })

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({
        type: POST_DATA,
        payload: data
      })
    })
  }
}

export const start = (item) => {
  return {
    type: START,
    payload: item
  };
};
