const NOT_FOUND_ROUTE = "NAVIGATE/NAVIGATE_NOT_FOUND_ROUTE";

const defaultState = {
  notFoundRoute: false
};

const reducer = (state, defaultState, { type, payload }) => {
  switch (type) {
    case NOT_FOUND_ROUTE:
      return {
        notFoundRoute: payload.notFoundRoute
      };
    default:
      return state;
  }
};

export default reducer;

export const navigateNotFoundRoute = entering => ({
  type: NOT_FOUND_ROUTE,
  payload: {
    notFoundRoute: entering
  }
});
