/*
 * action types
 */

export const START = 'START';

export const start = (item) => {
  return {
    type: START,
    payload: item
  };
};
