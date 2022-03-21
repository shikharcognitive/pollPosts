import axios from "axios";
import {all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchPostSuccess } from "./actions";
import {FETCH_POST_FAILURE, FETCH_POST_REQUEST, FETCH_POST_SUCCESS} from './actionTypes';

interface ResponseGenerator{
    config?:any,
    data?:any,
    headers?:any,
    request?:any,
    status?:number,
    statusText?:string
}

const getPosts=()=> axios.get('https://hn.algolia.com/api/v1/search_by_date?query=story&page=1');

function* fetchPostsSaga () {
    try {

        const response:ResponseGenerator= yield call<any>(getPosts);
        yield put(fetchPostSuccess(response.data.hits));

    } catch (err) {
        throw err;
    }
};

function* postsSaga () {
    yield all([
        takeLatest(FETCH_POST_REQUEST, fetchPostsSaga)
    ])
}

export  default postsSaga;