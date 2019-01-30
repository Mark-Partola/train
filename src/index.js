import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/base.css';
import AppRoot from './components/app-root/app-root';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppRoot />, document.getElementById('root'));

serviceWorker.unregister();
