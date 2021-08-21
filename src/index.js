import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import {createStore, combineReducers, applyMiddleWare} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

// Store
const storeInstance = createStore(combineReducers({
    // Add reducers as needed
    feelingReducer,
    contentReducer,
    supportReducer,
    commentReducer
}),
applyMiddleWare(logger)
);

ReactDOM.render(<App store={storeInstance}/>, document.getElementById('root'));
registerServiceWorker();
