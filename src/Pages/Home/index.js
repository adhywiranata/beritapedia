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
import {
  ListHeadingComponent,
  ScreenLoadingComponent,
} from '../../components/Layouts';
import SourceComponent from '../../components/Sources/Card';
import { getSources, getLoadingStatus } from '../../reducers/source';
import { fetchSourcesSuccess } from '../../actions/sources';
import { FETCH_SOURCES } from '../../actions/constants';

class HomePage extends Component {
  static navigationOptions = {
    title: 'BERITAPEDIA',
  }

  constructor(props) {
    super(props);

    this._renderSourceItem = this._renderSourceItem.bind(this);
  }

  componentDidMount() {
    this.props.fetchSources();
  }

  _renderListHeader() {
    return (
      <BoxCore style={{ padding: 10, marginBottom: 10, width: '100%' }}>
        <BoxCore style={{ flexDirection: 'row' }}>
          <ListHeadingComponent style={{ color: 'white', fontSize: 30, fontWeight: '100' }}>
            {'Hello '}
            <Emoji name={'wave'} />
            {','}
          </ListHeadingComponent>
        </BoxCore>
        <BoxCore style={{ flexDirection: 'row' }}>
          <ListHeadingComponent>
            {'pick'} 
          </ListHeadingComponent>
          <ListHeadingComponent style={{ fontWeight: 'bold' }}>
            {' freshly curated news'}
          </ListHeadingComponent>
          <ListHeadingComponent>
            {' from our sources'} 
          </ListHeadingComponent>
        </BoxCore>
      </BoxCore>
    );
  }

  _renderListFooter() {
    return (
      <BoxCore style={{ flex: 1, flexWrap: 'wrap', padding: 10, marginBottom: 10, flexDirection: 'row', width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
        <ListHeadingComponent>
          {'That\'s all!'} 
        </ListHeadingComponent>
        <ListHeadingComponent style={{ fontWeight: 'bold' }}>
          {' Go back to top'}
        </ListHeadingComponent>
        <ListHeadingComponent>
          <Emoji name={'point_up_2'} />
          {' and start from the first '}
          <Emoji name={'grinning'} /> 
        </ListHeadingComponent>
      </BoxCore>
    );
  }

  _renderSourceItem({ item }) {
    return <SourceComponent {...item} onPress={() => this.props.navigation.navigate('Article', { sourceId: item.id, sourceName: item.name })} />
  }

  render() {
    return (
      <GradientBackgroundCore>
        { this.props.isLoading && (
          <ScreenLoadingComponent emoji={'running'} text={'Looking for awesome stuffs for you...'} />
          ) }
        { !this.props.isLoading && (
          <FlatList
            ListHeaderComponent={this._renderListHeader}
            ListFooterComponent={this._renderListFooter}
            data={this.props.sources}
            renderItem={this._renderSourceItem}
            keyExtractor={item => item.id}
            initialNumToRender={5}
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
  fetchSources: () => dispatch({ type: FETCH_SOURCES }),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);