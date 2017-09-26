import { StackNavigator } from 'react-navigation';

import {
  ArticlePage,
  DetailPage,
  HomePage,
  SearchPage,
} from './pages';

const screenProps = {
  navigationOptions: {
    headerTitleStyle: {
      color: 'white',
      alignSelf: 'center',
    },
    headerStyle: {
      backgroundColor: '#c94b4b',
      elevation: 0,
    },
  },
};

const MainNavigator = StackNavigator({
  Article: { screen: ArticlePage, ...screenProps },
  Home: { screen: HomePage, ...screenProps },
  Detail: { screen: DetailPage, ...screenProps },
  Search: { screen: SearchPage, ...screenProps },
});

export default MainNavigator;
