const initialState = {
  data: [],
  source: {
    id: null,
    name: '',
  },
  isLoading: true,
  isError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_NEWS_LOADING': return { ...state, isLoading: true };
    case 'FETCH_NEWS_SUCCESS': {
      return { ...state, data: action.payload, isLoading: false };
    }
    default: return state;
  }
};

// SELECTORS
export const getNews = state => state.data;
export const getLoadingStatus = state => state.isLoading;
export const getErrorStatus = state => state.isError;
