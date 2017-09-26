import { combineReducers } from 'redux';

import news from './news';
import source from './source';

export default combineReducers({
  news,
  source,
});
