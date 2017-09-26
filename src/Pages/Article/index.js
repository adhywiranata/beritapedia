import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';

import {
  BoxCore,
  TextCore,
  ActivityIndicatorCore,
  GradientBackgroundCore,
} from '../../core';
import { NewsCardComponent } from '../../components/News';

export default class ArticlePage extends Component {
  static navigationOptions = {
    title: 'THE NEXT WEB',
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      news: [],
    }

    this._renderNewsItem = this._renderNewsItem.bind(this);
  }

  componentDidMount() {
    const self = this;
    this.setState({ isLoading: true });
    axios.get('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=781c0d54f287466d8323a7955b9ce31a')
      .then(res => {
        const data = res.data.articles.map((article, index) => ({
          id: index,
          source: article.source,
          author: article.author,
          title: article.title,
          description: article.description,
          image: article.urlToImage,
          publishedAt: article.publishedAt,
        }));
        self.setState({
          isLoading: false,
          news: data,
        });
      })
  }

  _renderNewsItem({ item }) {
    return <NewsCardComponent {...item} onPress={() => this.props.navigation.navigate('Detail')} />
  }

  render() {
    return (
      <GradientBackgroundCore>
        { this.state.isLoading && (
          <BoxCore style={{ flex: 0, alignSelf: 'center' }}>
            <ActivityIndicatorCore />
            <TextCore style={{ color: 'white', fontSize: 18, marginTop: 30 }}>Getting news from The Next Web for you..</TextCore>
          </BoxCore>
          ) }
        { !this.state.isLoading && (
          <FlatList
            data={this.state.news}
            renderItem={this._renderNewsItem}
            keyExtractor={item => item.id}
            style={{ width: '100%', flex: 1 }}
          />
        )}
      </GradientBackgroundCore>
    );
  }
}