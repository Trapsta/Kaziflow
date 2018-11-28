import { combineReducers } from 'redux';
import interviews from './interviews';
import reviews from './reviews';
import salaries from './salaries';

export default combineReducers({
  interviews,
  reviews,
  salaries
});