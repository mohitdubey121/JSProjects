import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { searchRobots, requestRobots } from './reducers';
import { createLogger } from 'redux-logger';
import './index.css';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import App from './containers/App';

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunkMiddleware, logger)))
console.log(store)
ReactDOM.render(
        <Provider store={store}>
                <App h="mohit" />
        </Provider>
        , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();