import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

<<<<<<< HEAD
=======
// redux 관련 import
import { createStore } from 'redux'
import reducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(reducers);

<<<<<<< HEAD
>>>>>>> parent of 77779fd... error
ReactDOM.render(<App />, document.getElementById('root'));
=======
ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>,
 document.getElementById('root'));
>>>>>>> bd1372fdd7711376b66321b6742c2c1c914054e9

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
