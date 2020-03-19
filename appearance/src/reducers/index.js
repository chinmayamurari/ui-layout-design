import {combineReducers} from 'redux';
import Todos from './todos';
import Display from './visibilityFilter';

export default combineReducers({
  Todos,
  Display,
});
