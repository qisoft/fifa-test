import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.less';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { configureStore } from './redux/store';

const store = configureStore();
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
  module.hot.accept('./App', () => {
    const UpdatedApp = require('./App').default;
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
  });
}