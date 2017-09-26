const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default: return state;
  }
};

// SELECTORS
export const getNews = state => state.data;
export const getLoadingStatus = state => state.isLoading;
export const getErrorStatus = state => state.isError;
