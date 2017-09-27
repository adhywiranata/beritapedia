import { put, call, takeEvery } from 'redux-saga/effects';

import {
  fetchSourcesLoading,
  fetchSourcesSuccess,
  fetchSourcesFailure,
} from '../actions/sources';

import {
  fetchSources,
} from '../utilities/apis';

import { FETCH_SOURCES } from '../actions/constants';

export function* fetchSourcesSaga() {
  yield put(fetchSourcesLoading());
  const sourcesData = yield call(fetchSources);
  try {
    yield put(fetchSourcesSuccess(sourcesData.data.sources));
  } catch (e) {
    yield put(fetchSourcesFailure(e));
  }
}

export function* watchFetchSources() {
  yield takeEvery(FETCH_SOURCES, fetchSourcesSaga);
}

