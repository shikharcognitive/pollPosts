interface postActionTypes {
    FETCH_POST_REQUEST:string,
    FETCH_POST_SUCCESS:string,
    FETCH_POST_FAILURE:string,

}

export const FETCH_POST_REQUEST : postActionTypes['FETCH_POST_REQUEST'] = 'FETCH_POST_REQUEST';
export const FETCH_POST_SUCCESS : postActionTypes['FETCH_POST_SUCCESS'] = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE : postActionTypes['FETCH_POST_FAILURE']= 'FETCH_POST_FAILURE';
