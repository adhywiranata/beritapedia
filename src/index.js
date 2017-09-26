import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MainNavigator from './routes';

export default class App extends Component {
  render() {
    return (
      <MainNavigator />
    );
  }
}
