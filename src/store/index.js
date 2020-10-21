import { createStore } from 'redux';
import counterReducer from '../store/reducers/reducers';

const store = createStore(counterReducer);

export default store;
