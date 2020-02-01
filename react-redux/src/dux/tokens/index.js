import { delay } from "redux-saga";
import { all, takeLatest, put, select } from "redux-saga/effect";

import { uploadLoadingState, getLoadingState } from "../shared";
import { postUpdateToken } from "../../lib/api";

const TOKEN_UPDATE = "TOKENS/TOKEN_UPDATE";

export const updateToken = ({ name, orgId, tokenId }) => ({
  type: TOKEN_UPDATE,
  payload: { name, orgId, tokenId }
});

function* updateTokenSaga({ payload }) {
  const { tokenId } = payload;

  if (yield select(getLoadingState, tokenId)) {
    yield put(updateLoadingState(tokenId, null));
  }

  yield delay(500);
  yield put(updateLoadingState(tokenId, "loading"));

  try {
    yield all([delay(600), postUpdateToken(payload)]);
    yield put(updateLoadingState(tokenId, "save"));
    yield put(updateLoadingState(tokenId, null));
  } catch (e) {
    console.warn(e);
  }
}

export function* wathUpdateTokenSaga() {
  yield takeLatest(TOKEN_UPDATE, updateTokenSaga);
}
