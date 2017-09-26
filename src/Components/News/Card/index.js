import React from 'react';
import { Image } from 'react-native';
import moment from 'moment';

import {
  BoxCore,
  TouchableCardCore,
  TextCore,
} from '../../../core';
import Styles from './styles';

export default ({ title, description, image, source, publishedAt, onPress }) => (
  <TouchableCardCore activeOpacity={0.9} style={Styles.card} onPress={onPress}>
    <BoxCore style={Styles.leftColumn}>
      <Image source={{ uri: image }} style={Styles.newsImage} />
    </BoxCore>
    <BoxCore style={Styles.rightColumn}>
      <TextCore style={Styles.titleText}>{ title }</TextCore>
      <TextCore style={Styles.dateText}>{moment(publishedAt).fromNow()}</TextCore>
      <TextCore style={Styles.descText}>{ description }</TextCore>
    </BoxCore>
  </TouchableCardCore>
);
