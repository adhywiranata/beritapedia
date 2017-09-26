import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

import { 
  BoxCore, 
  TouchableCardCore,
  TextCore,
  BadgeCore,
} from '../../../Core';
import Styles from './styles';

const Badge = ({ source }) => (
  <BadgeCore>
    <Icon name={'globe'} size={12} color={'white'} style={{ marginHorizontal: 5 }} />
    <TextCore style={{ color: 'white', fontSize: 12 }}>{'The Next Web'}</TextCore>
  </BadgeCore>
);

export default ({ title, description, image, source, publishedAt, onPress }) => (
  <TouchableCardCore activeOpacity={0.95} style={Styles.card} onPress={onPress}>
    <BoxCore style={Styles.leftColumn}>
      <Image source={{ uri: image }} style={Styles.newsImage} />
      <TextCore style={Styles.dateText}>{moment(publishedAt).fromNow()}</TextCore>
    </BoxCore>
    <BoxCore style={Styles.rightColumn}>
      <Badge source={source} />
      <TextCore style={Styles.titleText}>{ title }</TextCore>
      <TextCore style={Styles.descText}>{ description }</TextCore>
    </BoxCore>
  </TouchableCardCore>
);
