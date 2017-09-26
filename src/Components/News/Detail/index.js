import React from 'react';
import { Image } from 'react-native';

import Styles from './styles';
import {
  BoxCore,
  ButtonCore,
  CardCore,
  TextCore,
} from '../../../core';

export default ({ onShowModal }) => (
  <CardCore style={Styles.card}>
    <Image
      style={Styles.newsImage}
      source={{ uri: 'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/08/using-smartphone-in-bed-social.jpg' }}
    />
    <BoxCore style={Styles.infoRow}>
      <TextCore style={Styles.dateText}>Published by Tech in Asia on January 13th 2017</TextCore>
    </BoxCore>
    <TextCore style={Styles.titleText}>
      {'SpaceX’s Interplanetary Spaceship and Rocket simulation is out of this world'}
    </TextCore>
    <TextCore style={Styles.descText}>
      {'Elon Musk today gave us our first glimpse at what interplanetary travel and colonization could look like. In an Instagram post, Musk provided a series of five videos offering a look ...'}
    </TextCore>
    <ButtonCore style={Styles.button} activeOpacity={0.9} onPress={onShowModal}>
      <TextCore style={Styles.buttonText}>Read more at Tech in Asia</TextCore>
    </ButtonCore>
  </CardCore>
);
