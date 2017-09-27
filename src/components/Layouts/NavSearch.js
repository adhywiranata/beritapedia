import React from 'react';
import {
  Platform,
  TextInput,
} from 'react-native';

import {
  COLORS,
} from '../../utilities/constants';
import {
  NavTouchIconCore,
  BoxCore,
} from '../../core';

const defaultBoxStyle = {
  flex: 0,
  flexDirection: 'row',
  paddingTop: Platform.OS === 'ios' ? 20 : 0,
  paddingBottom: 5,
  backgroundColor: COLORS.white,
  width: '100%',
  justifyContent: 'flex-start',
  alignItems: 'center',
  elevation: 2,
};
const defaultTextInputStyle = {
  width: '80%',
  fontSize: 18,
  paddingVertical: 10,
};

export default ({ backLink, onChangeText, value, placeholder }) => (
  <BoxCore style={defaultBoxStyle}>
    <NavTouchIconCore
      icon={'chevron-left'}
      onPress={backLink}
      textStyle={{ color: '#353535' }}
      style={{ margin: 0, padding: 0 }}
    />
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={defaultTextInputStyle}
      underlineColorAndroid={'transparent'}
    />
  </BoxCore>
);
