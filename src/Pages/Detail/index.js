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
} from '../../core';

import {
  NewsDetailComponent,
} from '../../components/News';

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
    return (
      <GradientBackgroundCore>
        <ScrollView style={{ flex: 1, width: '100%', padding: 20 }}>
          <NewsDetailComponent onShowModal={this._setModalVisibility} />
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
                {/* <TextCore style={Styles.modalButtonText}>CLOSE</TextCore> */}
                <Icon name={'close'} style={Styles.modalButtonText} />
              </TouchableOpacity>
            </BoxCore>
            <WebView source={{uri: 'https://github.com/facebook/react-native'}} />
          </BoxCore>
         </BoxCore>
        </Modal>
      </GradientBackgroundCore>
    );
  }
}