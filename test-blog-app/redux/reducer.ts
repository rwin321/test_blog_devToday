import { MainStateI } from './globalTypes'
import {ActionTypes} from './actionTypes'
import {
    SET_POST_CREATED_ERROR,
    SET_CREATED_POST,
    SET_POST_ERROR,
    SET_POST,
    SET_POSTS
} from './actionTypes'


const initialState: MainStateI = {
    posts: null,
    fetchedPost: null,
    createdPost: null,
    errorType: {
        errorQueryPost: false,
        obtainPosts: false,
        createPost: false,
    },
}


export default function Reducer (state = initialState, action: ActionTypes): MainStateI {
    switch (action.type) {
        case SET_POSTS: {
            return { ...state, posts: action.posts }
        }
        case SET_POST: {
            return { ...state, fetchedPost: action.post }
        }
        case SET_CREATED_POST: {
            if (!action.post) return { ...state, createdPost: action.post };
            if (state.posts?.length)
                return { ...state, createdPost: action.post, posts: [action.post, ...state.posts] };
            else
                return { ...state, createdPost: action.post };
        }
        case SET_POST_ERROR: {
            return { ...state, errorType: { ...state.errorType, errorQueryPost: action.isError } }
        }
        case SET_POST_CREATED_ERROR: {
            return { ...state, errorType: { ...state.errorType, createPost: action.isError } }
        }
        default:
            return state
    }
}
