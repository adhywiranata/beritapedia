import React from 'react';

import {
  TextCore,
} from '../../core';

export default ({ children, style = {} }) => (
  <TextCore style={[{ color: 'white', fontSize: 16, lineHeight: 30 }, style]}>
    {children}
  </TextCore>
);
