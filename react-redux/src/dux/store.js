import { createStore, applyMiddleware } from "redux";
import createSagaMiddlware from "redux-saga";

import rootReducer from "./root-reducer";
import thunk from "redux-thunk";
import rootSaga from "./sagas";
import sagaMiddleWare from "lib/sagaMiddleWare";

const store = createStore(
  rootReducer,
  composeEchancers(applyMiddleware(thunk, sagaMiddleWare))
);

sagaMiddleWare.run(rootSaga);

export default store;
