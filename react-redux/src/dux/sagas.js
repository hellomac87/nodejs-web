import { all } from "redux-saga/effects";

import { watchUpdateUserSaga } from "./user";
import { watchUpdateTokenSaga } from "./tokens";

export default function* rootSaga() {
  yield all([watchUpdateUserSaga, watchUpdateTokenSaga]);
}
