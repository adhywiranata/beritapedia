import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import {
  COLORS,
} from '../utilities/constants';

const textDefaultStyle = {
  color: COLORS.white,
  fontWeight: 'bold',
  fontSize: 40,
};

export default ({ onPress, icon, textStyle = {}, style = {} }) => (
  <TouchableOpacity
    activeOpacity={0.9}
    onPress={() => onPress()}
    style={[{ paddingHorizontal: 10 }, style]}
  >
    <Icon name={icon} style={[textDefaultStyle, textStyle]} />
  </TouchableOpacity>
);
