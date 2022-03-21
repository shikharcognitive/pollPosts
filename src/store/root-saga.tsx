import {all, fork} from 'redux-saga/effects';
import postsSaga from './posts/saga';

export function* rootSaga() {
    yield all([fork(postsSaga)]);
}