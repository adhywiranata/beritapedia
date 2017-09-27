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
      borderColor: 'transparent',
      borderWidth: 0,
      elevation: 0,
    },
  },
};

const MainNavigator = StackNavigator({
  Home: { screen: HomePage, ...screenProps },
  Article: { screen: ArticlePage, ...screenProps },
  Detail: { screen: DetailPage, ...screenProps },
  Search: { screen: SearchPage, ...screenProps },
});

export default MainNavigator;
