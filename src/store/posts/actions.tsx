import {FETCH_POST_FAILURE, FETCH_POST_REQUEST, FETCH_POST_SUCCESS} from './actionTypes';

interface postpayloadType {
    postsSuccess : Array<any>
    error: string
}

export  const fetchPostRequest = (payload:any):any => ({
    type:FETCH_POST_REQUEST,
    payload
});

export  const fetchPostSuccess = (payload : postpayloadType['postsSuccess'] ):any=> ({
    type:FETCH_POST_SUCCESS,
    payload
});

export  const fetchPostFailure = (payload : postpayloadType['error'] ):any=> ({
    type:FETCH_POST_FAILURE,
    payload
});