export const INCREMENT = 'INCREMENT';
export const increment = {
  type: INCREMENT,
};

export const INCREMENT_BY = 'INCREMENT_BY';
export const incrementBy = value => {
  return {
    type: INCREMENT_BY,
    value,
  };
};

export const DECREMENT = 'DECREMENT';
export const decrement = {
  type: DECREMENT,
};

export const DECREMENT_BY = 'DECREMENT_BY';
export const decrementBy = value => {
  return {
    type: DECREMENT_BY,
    value,
  };
};
