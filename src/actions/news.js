import {
  FETCH_NEWS_LOADING,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
} from './constants';

export const fetchNewsLoading = () => ({ type: FETCH_NEWS_LOADING });
export const fetchNewsSuccess = data => ({ type: FETCH_NEWS_SUCCESS, payload: data });
export const fetchNewsFailure = err => ({ type: FETCH_NEWS_FAILURE, payload: err });
