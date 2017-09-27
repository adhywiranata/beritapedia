import { all } from 'redux-saga/effects';

import { watchFetchSources } from './sources';
import { watchFetchNews } from './news';

export default function* rootSaga() {
  yield all([
    watchFetchSources(),
    watchFetchNews(),
  ]);
}
