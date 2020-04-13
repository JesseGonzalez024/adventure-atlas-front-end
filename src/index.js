import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router} from "react-router-dom";

// import {Provider} from 'react-redux';
// import { createStore } from 'redux';

// import rootReducer from './reducers/rootReducer'
import App from './App'; 


// Add Broswer Chrome Extensions??

// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <Router >
      {/* <Provider store={store}> */}
        <App />
      {/* </Provider> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
