import { put, call, takeEvery } from 'redux-saga/effects';

import {
  fetchNewsLoading,
  fetchNewsSuccess,
  fetchNewsFailure,
} from '../actions/news';

import {
  fetchNews,
} from '../utilities/apis';

import { FETCH_NEWS } from '../actions/constants';

export function* fetchNewsSaga(action) {
  yield put(fetchNewsLoading());
  const sourceId = action.payload;
  const newsData = yield call(fetchNews, sourceId);
  try {
    const data = newsData.data.articles.map((article, index) => ({
      id: index,
      source: article.source,
      author: article.author,
      title: article.title,
      description: article.description,
      image: article.urlToImage,
      url: article.url,
      publishedAt: article.publishedAt,
    }));
    yield put(fetchNewsSuccess(data));
  } catch (e) {
    yield put(fetchNewsFailure(e));
  }
}

export function* watchFetchNews() {
  yield takeEvery(FETCH_NEWS, fetchNewsSaga);
}

