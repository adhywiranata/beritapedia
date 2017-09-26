const initialState = {
  data: [],
  isLoading: true,
  isError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SOURCES_SUCCESS': return { ...state, data: action.payload, isLoading: false };
    default: return state;
  }
};

// SELECTORS
export const getSources = state => state.data;
export const getLoadingStatus = state => state.isLoading;
export const getErrorStatus = state => state.isError;
