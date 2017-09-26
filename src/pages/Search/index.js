import React, { Component } from 'react';
import { Modal, ScrollView, TouchableOpacity, WebView, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Emoji from 'react-native-emoji';
import { connect } from 'react-redux';

import Styles from './styles';
import {
  BoxCore,
  CardCore,
  TextCore,
  ActivityIndicatorCore,
  GradientBackgroundCore,
  NavBackCore,
  NavTouchIconCore,
} from '../../core';

import {
  NewsDetailComponent,
} from '../../components/News';

import {
  ListHeadingComponent,
} from '../../components/Layouts';
import { getNews, getLoadingStatus } from '../../reducers/news';

class SearchPage extends Component {
  static navigationOptions = ({
    header: null,
  })

  constructor(props) {
    super(props);
    this.state = {
      searchKeyword: '',
      notFound: true,
    };

    this._setSearchKeyword = this._setSearchKeyword.bind(this);
  }

  _setSearchKeyword(searchKeyword) {
    this.setState({
      searchKeyword,
    });
  }

  _renderGreet() {
    return (
      <BoxCore style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <BoxCore style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
          <ListHeadingComponent style={{ fontSize: 30, lineHeight: 100 }}>
            <Emoji name={'nerd_face'} />
            {' Search for Articles'}
          </ListHeadingComponent>
          <ListHeadingComponent>
            {'Search the news using the search box above!'}
          </ListHeadingComponent>
        </BoxCore>
      </BoxCore>
    );
  }

  _renderNotFound() {
    return (
      <BoxCore style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 30 }}>
        <BoxCore style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
          <ListHeadingComponent style={{ fontSize: 30, lineHeight: 100 }}>
            <Emoji name={'thinking_face'} />
            {' Not Found!'}
          </ListHeadingComponent>
          <ListHeadingComponent>
            {'Hmmm.. no articles found! Interesting... let\'s try different keyword, shall we?'}
          </ListHeadingComponent>
        </BoxCore>
      </BoxCore>
    );
  }

  render() {
    const { searchKeyword, notFound } = this.state;
    const { news, navigation } = this.props;
    const filterNews = newsItem => newsItem.title.toLowerCase().includes(searchKeyword.toLowerCase());
    const filteredNews = news.filter(filterNews);
    return (
      <GradientBackgroundCore style={{ padding: 20 }}>
        <BoxCore style={{ flex: 0, flexDirection: 'row', paddingBottom: 5, backgroundColor: 'white', width: '100%', justifyContent: 'flex-start', alignItems: 'center', elevation: 2 }}>
          <NavTouchIconCore icon={'chevron-left'} onPress={this.props.navigation.goBack} textStyle={{ color: '#353535' }} style={{ margin: 0, padding: 0 }} />
          <TextInput
            value={this.state.searchKeyword}
            onChangeText={this._setSearchKeyword}
            placeholder={'Search for articles...'}
            style={{ width: '80%', fontSize: 18, paddingVertical: 10 }}
            underlineColorAndroid={'transparent'}
          />
        </BoxCore>
        {searchKeyword === '' && this._renderGreet()}
        {filteredNews.length > 0 && searchKeyword !== '' && (
          <FlatList
            ListHeaderComponent={this._renderListHeader}
            ListFooterComponent={this._renderListFooter}
            data={filteredNews}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                <BoxCore style={{ padding: 20, backgroundColor: 'rgba(255, 255, 255, 0.9)', margin: 0 }}>
                  <TextCore>{ item.title }</TextCore>
                </BoxCore>
              </TouchableOpacity>
            )}
            extraData={this.navigation}
            keyExtractor={item => item.id}
            style={{ width: '100%', flex: 1 }}
          />)
        }
        {filteredNews.length === 0 && searchKeyword !== '' && this._renderNotFound()}
      </GradientBackgroundCore>
    );
  }
}

const mapStateToProps = ({ news }) => ({
  news: getNews(news),
});

export default connect(mapStateToProps, null)(SearchPage);
