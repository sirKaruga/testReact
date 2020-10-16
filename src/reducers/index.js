 import { counterReducer, isLoggedReducer, myname } from './reducers';
 import { combineReducers } from 'redux';

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged:isLoggedReducer,
  myName:myname
});

export default allReducers;
