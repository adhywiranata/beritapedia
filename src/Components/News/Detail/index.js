import React from 'react';
import { Image } from 'react-native';
import moment from 'moment';

import Styles from './styles';
import {
  BoxCore,
  ButtonCore,
  CardCore,
  TextCore,
} from '../../../core';

export default ({ article, onShowModal }) => (
  <CardCore style={Styles.card}>
    <Image
      style={Styles.newsImage}
      source={{ uri: article.image }}
    />
    <BoxCore style={Styles.infoRow}>
      <TextCore style={Styles.dateText}>
        {`Published ${moment(article.publishedAt).calendar().toLowerCase()}`}
      </TextCore>
    </BoxCore>
    <TextCore style={Styles.titleText}>{article.title}</TextCore>
    <TextCore style={Styles.descText}>{article.description}</TextCore>
    <ButtonCore style={Styles.button} activeOpacity={0.9} onPress={onShowModal}>
      <TextCore style={Styles.buttonText}>Read more</TextCore>
    </ButtonCore>
  </CardCore>
);
