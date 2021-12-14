import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missions from './reducers/missions';
import rockets from './reducers/rockets';
import dragons from './reducers/dragons';

const reducer = combineReducers({
  missions, rockets, dragons,
});

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk, logger)),
);

window.store = store;

export default store;
