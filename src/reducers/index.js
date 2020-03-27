import {combineReducers} from 'redux';

import calc from './calc';
import todos from './todos';

export default combineReducers({
  calc,
  todos,
});
