import React, { Component } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

import {
  BoxCore,
  CardCore,
  TextCore,
  ActivityIndicatorCore,
  GradientBackgroundCore,
} from '../../core';

import {
  NewsDetailComponent,
} from '../../components/News';

export default class DetailPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'DETAIL',
    headerLeft: (
      <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.goBack()} style={{ paddingHorizontal: 10 }}>
        <TextCore style={{ fontWeight: '500', color: '#F5F5F5', fontSize: 12 }}>BACK</TextCore>
      </TouchableOpacity>
    ),
  })

  render() {
    return (
      <GradientBackgroundCore>
        <ScrollView style={{ flex: 1, width: '100%', padding: 20 }}>
          <NewsDetailComponent />
        </ScrollView>
      </GradientBackgroundCore>
    );
  }
}