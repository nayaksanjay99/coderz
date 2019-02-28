import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router'
import {createStore} from 'redux'
import {Provider} from  'react-redux'
import rootReducer from './Reducers/rootReducer'

const store=createStore(rootReducer);

ReactDOM.render(<Provider store={store}><Router/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
