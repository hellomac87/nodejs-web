const defaultState = {
  appLoading: false,
  loadingStates: {}
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case LOADING_STATE_UPDATE:
      return {
        ...state,
        loadingStates: {
          ...state.loadingStates,
          [payload.loadingId]: payload.loadingStates
        }
      };
    case LOADING_UPDATE:
      return {
        ...state,
        appLoading: payload.loadingStates
      };
  }
};

export default reducer;
