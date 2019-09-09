import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/table';
import thunk from 'redux-thunk';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://www.filltext.com',
});

const store = createStore(reducer, applyMiddleware(thunk.withExtraArgument(axiosInstance)));

export default store;