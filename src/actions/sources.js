import {
  FETCH_SOURCES_LOADING,
  FETCH_SOURCES_SUCCESS,
  FETCH_SOURCES_FAILURE,
} from './constants';

export const fetchSourcesLoading = () => ({ type: FETCH_SOURCES_LOADING });
export const fetchSourcesSuccess = data => ({ type: FETCH_SOURCES_SUCCESS, payload: data });
export const fetchSourcesFailure = err => ({ type: FETCH_SOURCES_FAILURE, payload: err });