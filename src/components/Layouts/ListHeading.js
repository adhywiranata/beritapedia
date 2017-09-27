import React from 'react';

import {
  COLORS,
} from '../../utilities/constants';
import {
  TextCore,
} from '../../core';

const defaultStyle = {
  color: COLORS.white,
  fontSize: 16,
  lineHeight: 40,
  backgroundColor: 'transparent',
};

export default ({ children, style = {} }) => (
  <TextCore style={[defaultStyle, style]}>
    {children}
  </TextCore>
);
