import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMuddleware from 'redux-thunk';
import reducer from './reducers';

import './index.css';
import Users from './containers/Users';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunkMuddleware),
)

ReactDOM.render(
    <Provider store={store}>
        <Users />
    </Provider>, 
document.getElementById('root'));
registerServiceWorker();
