import {FETCH_TODOS, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILED} from '../actions';

const initialState = {
  items: undefined,
  isLoading: false,
  error: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...initialState,
        isLoading: true,
      };
    case FETCH_TODOS_SUCCESS:
      return {
        ...initialState,
        items: action.response,
      };
    case FETCH_TODOS_FAILED:
      return {
        ...initialState,
        error: action.error,
      };
    default:
      return state;
  }
};
