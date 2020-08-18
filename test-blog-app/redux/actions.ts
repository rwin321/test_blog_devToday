import {postAPI} from '../api/api'
import {PostsType, PostType} from "./globalTypes"
import {
    SetPost,
    SetPosts,
    SetCreatedPost,
    SetReceivedPostError,
    SetPostsError,
    SetCreatedPostError,
    SET_POSTS, SET_POST, SET_CREATED_POST, SET_POST_ERROR, SET_POSTS_ERROR, SET_POST_CREATED_ERROR
} from './actionTypes'
import { postValidator, standardizePost } from "../assets/validators"
import { MainThunk } from './actionTypes'

// Action creators:

export const setPosts = (posts: PostsType): SetPosts => ({
    type: SET_POSTS,
    posts,
})
export const setPost = (post: PostType): SetPost => ({
    type: SET_POST,
    post,
})
export const setCreatedPost = (post: PostType): SetCreatedPost => ({
    type: SET_CREATED_POST,
    post,
})
export const setReceivedPostError = (isError: boolean): SetReceivedPostError => ({
    type: SET_POST_ERROR,
    isError,
})
export const setReceivedPostsError = (isError: boolean): SetPostsError => ({
    type: SET_POSTS_ERROR,
    isError,
})
export const setCreatePostError = (isError: boolean): SetCreatedPostError => ({
    type: SET_POST_CREATED_ERROR,
    isError,
})

// Thunk action creators:


export const requestedPosts = (): MainThunk => (dispatch) => {
    postAPI
        .getPostsQuery()
        .then(res => {
            const posts: PostsType = res
                .data
                .filter(postValidator)
                .map(standardizePost)
            posts!.reverse()
            dispatch(setPosts(posts))
        })
        .catch(err => {
            console.log(err)
            dispatch(setReceivedPostsError(true))
        })
}
export const requestedPost = (id: string): MainThunk => (dispatch) => {
    postAPI.getPostQuery(id)
        .then(res => {
            const post: PostType = postValidator(res.data) ? res.data : null
            if (!post) setReceivedPostError(true)
            else dispatch(setPost(standardizePost(post)))
        })
        .catch(err => {
            console.log(err);
            dispatch(setReceivedPostError(true))
        })
}
export const createPost = (title: string, post: string): MainThunk => (dispatch) => {
    postAPI.createPostQuery(title.trim(), post.trim())
        .then(res => {
            dispatch(setCreatedPost(res.data))
        })
        .catch(err => {
            console.log(err)
            dispatch(setCreatePostError(true))
        })
}
