import React, { Component } from 'react';
import { Modal, ScrollView, TouchableOpacity, WebView } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import Styles from './styles';
import {
  BoxCore,
  CardCore,
  TextCore,
  ActivityIndicatorCore,
  GradientBackgroundCore,
  NavBackCore,
} from 'beritapedia/src/core';

import {
  NewsDetailComponent,
} from 'beritapedia/src/components/News';

export default class DetailPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'DETAIL',
    headerLeft: (
      <NavBackCore navigation={navigation} />
    ),
    headerRight: <BoxCore />,
  })

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };

    this._setModalVisibility = this._setModalVisibility.bind(this);
  }

  _setModalVisibility() {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  }

  render() {
    const article = { ...this.props.navigation.state.params };
    return (
      <GradientBackgroundCore>
        <ScrollView style={{ flex: 0, width: '100%', padding: 20 }}>
          <NewsDetailComponent article={article} onShowModal={this._setModalVisibility} />
        </ScrollView>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={this._setModalVisibility}
          >
         <BoxCore>
          <BoxCore>
            <BoxCore style={Styles.modalHeader}>
              <TouchableOpacity onPress={this._setModalVisibility} style={Styles.modalButton}>
                <Icon name={'close'} style={Styles.modalButtonText} />
                <TextCore style={Styles.urlText}>{article.url.substring(0, 45)}...</TextCore>
              </TouchableOpacity>
            </BoxCore>
            <WebView source={{uri: article.url}} />
          </BoxCore>
         </BoxCore>
        </Modal>
      </GradientBackgroundCore>
    );
  }
}