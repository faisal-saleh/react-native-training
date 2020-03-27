import HttpClient from '../services/HttpClient';

export const FETCH_TODOS = 'FETCH_TODOS';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILED = 'FETCH_TODOS_FAILED';

export const fetchTodos = {type: FETCH_TODOS};
export const fetchTodoSuccess = response => ({
  type: FETCH_TODOS_SUCCESS,
  response,
});
export const fetchTodosFailure = error => ({
  type: FETCH_TODOS_FAILED,
  error,
});

export const fetchTodosAsync = () => async dispatch => {
  dispatch(fetchTodos);

  try {
    const response = await HttpClient.get(
      'https://jsonplaceholder.typicode.com/todos',
    );
    setTimeout(() => {
      dispatch(fetchTodoSuccess(response));
    }, 1000);
  } catch (error) {
    dispatch(fetchTodosFailure(error));
  }
};
