import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './components/todo/TodoReducer'
import App from './App';
import './index.css';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

let store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
