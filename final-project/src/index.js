import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { loadPvpRank, loadRealmStatus } from './actionCreators';
store.dispatch(loadPvpRank());
store.dispatch(loadRealmStatus());

ReactDOM.render((
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
