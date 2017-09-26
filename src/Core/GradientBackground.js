import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default ({ children, ...props }) => (
  <LinearGradient colors={['#C94B4B', '#4B134F']} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    { children }
  </LinearGradient>
);