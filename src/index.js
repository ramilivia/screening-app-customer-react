import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import api from './redux/api/api.reducer';
import screen from './redux/screen/screen.reducer';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
    api,
    screen
});

ReactDOM.render(
    <Provider store={createStore(rootReducer)}>
        <App/>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
