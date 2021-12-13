import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './reducers/missions';
import rocketsReducer from './reducers/rockets';

const reducer = combineReducers({
  missionsReducer, rocketsReducer,
});

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk, logger)),
);

export default store;
