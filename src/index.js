import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

// Reducers
const commentReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_COMMENT":
            return [...state, action.payload];
        case "ON_SUBMIT":
            return [];
        default:
            return state;
    }
}; // end commentReducer

const contentReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_CONTENT":
            return [...state, action.payload]
        case "ON_SUBMIT":
            return [];
        default:
            return state;
    }
}; // end contentReducer

const feelingReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_FEELING":
            return [...state, action.payload];
        case "ON_SUBMIT":
            return [];
        default:
            return state;
    }
}; // end feelingReducer

const supportReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_SUPPORT":
            return [...state, action.payload];
        case "ON_SUBMIT":
            return [];
        default:
            return state;
    }
}; // end supportReducer

// Store
const storeInstance = createStore(combineReducers({
    // Add reducers as needed
    feelingReducer,
    contentReducer,
    supportReducer,
    commentReducer
}),
applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
document.getElementById('root'));
registerServiceWorker();
