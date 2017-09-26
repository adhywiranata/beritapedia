import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import {
  COLORS,
} from '../utilities/constants';

const textStyle = {
  color: COLORS.white,
  fontWeight: 'bold',
  fontSize: 40,
};

export default ({ navigation }) => (
  <TouchableOpacity
    activeOpacity={0.9}
    onPress={() => navigation.goBack()}
    style={{ paddingHorizontal: 10 }}
  >
    <Icon name={'chevron-left'} style={textStyle} />
  </TouchableOpacity>
);
