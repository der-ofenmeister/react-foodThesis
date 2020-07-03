import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import tableReducer from './redux-store/reducers/table';
import listReducer from './redux-store/reducers/list';
import searchReducer from './redux-store/reducers/search';

//import registerServiceWorker from "./registerServiceWorker";
import * as serviceWorker from './serviceWorker';



const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    table: tableReducer,
    list: listReducer,
    search: searchReducer,
});

const store = createStore(rootReducer, composeEnhances(
    applyMiddleware(thunk)
));


const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();

