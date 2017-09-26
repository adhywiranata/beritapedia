import React from 'react';
import { Provider } from 'react-redux';

import MainNavigator from './routes';
import store from './store/configureStore';

export default () => (
  <Provider store={store}>
    <MainNavigator />
  </Provider>
);

