import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import App from './src';

class Beritapedia extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('beritapedia', () => Beritapedia);