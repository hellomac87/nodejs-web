function* updateUserSaga({ payload }) {
  const inputId = payload.realName ? "realName" : "";

  if (yield select(getLoadingState, inputId)) {
    yield put(updateLoadingState(inputId, null));
  }

  yield put(updateLoadingState(inputId, "loading"));
  try {
    yield all([delay(600), api.updateUser(payload)]);
    yield put(updateLoadingState(inputId, "saved"));
    yield delay(2000);
    yield put(updateLoadingState(inputId, null));
  } catch (error) {
    console.warn(err);
  }
}
