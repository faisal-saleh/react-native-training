import {INCREMENT, INCREMENT_BY, DECREMENT, DECREMENT_BY} from '../actions';

const initialState = {
  count: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case INCREMENT_BY:
      return {
        ...state,
        count: state.count + action.value,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case DECREMENT_BY:
      return {
        ...state,
        count: state.count + action.value,
      };
    default:
      return state;
  }
};
