import {FETCH_POST_FAILURE, FETCH_POST_REQUEST, FETCH_POST_SUCCESS} from './actionTypes';

interface reducerInitialState {
    posts : Array<any>,
    error : any,
    pending : any
};

const initialState:reducerInitialState = {
    posts: [],
    pending : false,
    error: null

}

const postReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case FETCH_POST_REQUEST:
            return {
                ...state,
                pending: true
            }
        case FETCH_POST_SUCCESS:
            return {
                ...state,
                posts : action.payload,
                pending: false,
                error : null
            }
        case FETCH_POST_FAILURE:
            return {
                ...state,
                posts : [],
                error : 'something went wrong',
                pending: false
            }
        default:
            return {...state}
    }
}

export default  postReducer;