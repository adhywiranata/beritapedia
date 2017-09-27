import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import Emoji from 'react-native-emoji';
import { connect } from 'react-redux';

import {
  BoxCore,
  TextCore,
  ActivityIndicatorCore,
  GradientBackgroundCore,
  NavBackCore,
  NavTouchIconCore,
} from '../../core';
import {
  ListHeadingComponent,
  ScreenLoadingComponent,
} from '../../components/Layouts';
import { NewsCardComponent } from '../../components/News';
import { getNews, getLoadingStatus } from '../../reducers/news';
import { FETCH_NEWS } from '../../actions/constants';

class ArticlePage extends Component {
  static navigationOptions = ({ navigation, props }) => ({
    title: 'ARTICLES',
    headerLeft: (
      <NavTouchIconCore onPress={() => navigation.goBack()} icon={'chevron-left'} />
    ),
    headerRight: (
      <NavTouchIconCore onPress={() => navigation.navigate('Search')} icon={'search'} />
    ),
  })

  constructor(props) {
    super(props);

    this._renderNewsItem = this._renderNewsItem.bind(this);
    this._renderListHeader = this._renderListHeader.bind(this);
    this._renderListFooter = this._renderListFooter.bind(this);
  }

  componentDidMount() {
    const sourceId = this.props.navigation.state.params ? this.props.navigation.state.params.sourceId : 'the-next-web';
    this.props.fetchNews(sourceId);
  }

  _renderListHeader() {
    const sourceName = this.props.navigation.state.params ? this.props.navigation.state.params.sourceName : 'The Next Web';
    return (
      <BoxCore style={{ paddingHorizontal: 20, paddingVertical: 0, marginBottom: 10, width: '100%' }}>
        <BoxCore style={{ flexDirection: 'row' }}>
          <ListHeadingComponent>{'News from '}</ListHeadingComponent>
          <ListHeadingComponent style={{ fontWeight: 'bold' }}>
            {sourceName}
          </ListHeadingComponent>
          <ListHeadingComponent>
            {' for you '} 
            <Emoji name={'smile'} />
          </ListHeadingComponent>
        </BoxCore>
      </BoxCore>
    );
  }

  _renderListFooter() {
    return (
      <BoxCore style={{ padding: 10, marginBottom: 10, flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
        <ListHeadingComponent>
          {'You\'ve caught up with the world! '}
          <Emoji name={'smirk'} /> 
        </ListHeadingComponent>
      </BoxCore>
    );
  }

  _renderNewsItem({ item }) {
    return (
      <NewsCardComponent
        {...item}
        onPress={() => this.props.navigation.navigate('Detail', { ...item })}
      />
    );
  }

  render() {
    const sourceName = this.props.navigation.state.params ? this.props.navigation.state.params.sourceName : 'The Next Web';
    return (
      <GradientBackgroundCore>
        { this.props.isLoading && (
          <ScreenLoadingComponent emoji={'sparkles'} text={`Pulling news from ${sourceName}`} />
        ) }
        { !this.props.isLoading && (
          <FlatList
            ListHeaderComponent={this._renderListHeader}
            ListFooterComponent={this._renderListFooter}
            data={this.props.news}
            renderItem={this._renderNewsItem}
            keyExtractor={item => item.id}
            style={{ width: '100%', flex: 1 }}
          />
        )}
      </GradientBackgroundCore>
    );
  }
}

const mapStateToProps = ({ news }) => ({
  news: getNews(news),
  isLoading: getLoadingStatus(news),
});

const mapDispatchToProps = dispatch => ({
  fetchNews: sourceId => dispatch({ type: FETCH_NEWS, payload: sourceId }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);