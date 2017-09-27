import React from 'react';
import Emoji from 'react-native-emoji';

import {
  COLORS,
} from '../../utilities/constants';
import {
  ActivityIndicatorCore,
  BoxCore,
  TextCore,
} from '../../core';

const defaultStyle = {
  color: COLORS.white,
  fontSize: 18,
  marginTop: 30,
  backgroundColor: 'transparent',
};

export default ({ emoji, text }) => (
  <BoxCore style={{ flex: 0, alignSelf: 'center' }}>
    <ActivityIndicatorCore />
    <TextCore style={defaultStyle}>
      <Emoji name={emoji} />
      {text}
    </TextCore>
  </BoxCore>
);
