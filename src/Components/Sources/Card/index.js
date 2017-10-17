import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  BoxCore,
  TouchableCardCore,
  TextCore,
  BadgeCore,
} from 'beritapedia/src/core';
import Styles from './styles';

const Badge = ({ label }) => (
  <BadgeCore style={{ paddingVertical: 5, marginTop: 5, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Icon name={'tag'} size={12} color={'white'} style={{ marginRight: 5, marginTop: 4 }} />
    <TextCore style={{ color: 'white', fontSize: 12, lineHeight: 18 }}>{label}</TextCore>
  </BadgeCore>
);

export default ({ name, description, category, onPress }) => (
  <TouchableCardCore activeOpacity={0.95} style={Styles.card} onPress={onPress}>
    <BoxCore style={Styles.rightColumn}>
      <TextCore style={Styles.titleText}>{ name }</TextCore>
      <TextCore style={Styles.descText}>{ description }</TextCore>
      <Badge label={category} />
    </BoxCore>
  </TouchableCardCore>
);
