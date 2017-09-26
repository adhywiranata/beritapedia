import { StackNavigator } from 'react-navigation';

import {
  ArticlePage,
  DetailPage,
  HomePage,
} from './Pages';

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
  Home: { screen: HomePage, ...screenProps },
  Article: { screen: ArticlePage, ...screenProps },
  Detail: { screen: DetailPage, ...screenProps },
});

export default MainNavigator;
