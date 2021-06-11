import React from 'react';
import ReactDOM from 'react-dom';

import { AppProviders } from 'providers/AppProviders';

import { App } from './app/App';
import * as serviceWorker from './serviceWorker';
import Api from 'common/api';

import './styles/main.scss';

const runApp = async () => {
  Api.init();
  ReactDOM.render(
    <AppProviders>
      <App />
    </AppProviders>,
    document.getElementById('root')
  );
};

runApp();

serviceWorker.unregister();
