import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import Emoji from 'react-native-emoji';

import {
  BoxCore,
  TextCore,
  ActivityIndicatorCore,
  GradientBackgroundCore,
} from '../../core';
import SourceComponent from '../../components/Sources/Card';
import { getSources, getLoadingStatus } from '../../reducers/source';

class HomePage extends Component {
  static navigationOptions = {
    title: 'BERITAPEDIA',
  }

  constructor(props) {
    super(props);

    this._renderSourceItem = this._renderSourceItem.bind(this);
  }

  componentDidMount() {
    const self = this;
    this.setState({ isLoading: true });
    axios.get('https://newsapi.org/v1/sources?language=en&apiKey=781c0d54f287466d8323a7955b9ce31a')
      .then(res => {
        const data = res.data.sources.map((source, index) => ({
          id: source.id,
          name: source.name,
          description: source.description,
          category: source.category,
        }));
        self.props.fetchSources(data);
      })
  }

  _renderListHeader() {
    return (
      <BoxCore style={{ padding: 10, marginBottom: 10, width: '100%' }}>
        <BoxCore style={{ flexDirection: 'row' }}>
          <TextCore style={{ color: 'white', fontSize: 30, fontWeight: '100' }}>
            {'Hello '}
            <Emoji name={'wave'} />
            {','}
          </TextCore>
        </BoxCore>
        <BoxCore style={{ flexDirection: 'row' }}>
          <TextCore style={{ color: 'white', fontSize: 16, lineHeight: 30 }}>
            {'pick'} 
          </TextCore>
          <TextCore style={{ color: 'white', fontSize: 16, lineHeight: 30, fontWeight: 'bold' }}>
            {' freshly curated news'}
          </TextCore>
          <TextCore style={{ color: 'white', fontSize: 16, lineHeight: 30 }}>
            {' from our sources'} 
          </TextCore>
        </BoxCore>
      </BoxCore>
    );
  }

  _renderListFooter() {
    return (
      <BoxCore style={{ padding: 10, marginBottom: 10, flexDirection: 'row', width: '100%' }}>
        <TextCore style={{ color: 'white', fontSize: 16, lineHeight: 30 }}>
          {'That\'s all!'} 
        </TextCore>
        <TextCore style={{ color: 'white', fontSize: 16, lineHeight: 30, fontWeight: 'bold' }}>
          {' Go back to top'}
        </TextCore>
        <TextCore style={{ color: 'white', fontSize: 16, lineHeight: 30 }}>
          <Emoji name={'point_up_2'} />
          {' to start from the first '}
          <Emoji name={'grinning'} /> 
        </TextCore>
      </BoxCore>
    );
  }

  _renderSourceItem({ item }) {
    return <SourceComponent {...item} onPress={() => this.props.navigation.navigate('Article')} />
  }

  render() {
    return (
      <GradientBackgroundCore>
        { this.props.isLoading && (
          <BoxCore style={{ flex: 0, alignSelf: 'center' }}>
            <ActivityIndicatorCore />
            <TextCore style={{ color: 'white', fontSize: 18, marginTop: 30 }}>
              <Emoji name={'running'} />
              Looking for awesome stuffs for you...
            </TextCore>
          </BoxCore>
          ) }
        { !this.props.isLoading && (
          <FlatList
            ListHeaderComponent={this._renderListHeader}
            ListFooterComponent={this._renderListFooter}
            data={this.props.sources}
            renderItem={this._renderSourceItem}
            keyExtractor={item => item.id}
            style={{ width: '100%', flex: 1, paddingHorizontal: 10 }}
          />
        )}
      </GradientBackgroundCore>
    );
  }
}

const mapStateToProps = ({ source }) => ({
  sources: getSources(source),
  isLoading: getLoadingStatus(source),
});

const mapDispatchToProps = dispatch => ({
  fetchSources: data => dispatch({ type: 'FETCH_SOURCES_SUCCESS', payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);