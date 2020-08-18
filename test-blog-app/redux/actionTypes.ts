// Action types:
import {MainStateI, PostsType, PostType} from "./globalTypes"
import {ThunkAction} from "redux-thunk"

export const SET_POSTS = 'reducer/SET_POSTS'
export const SET_POST = 'reducer/SET_POST'
export const SET_CREATED_POST = 'reducer/SET_CREATED_POST'
export const SET_POST_ERROR = 'reducer/SET_OBTAIN_POST_ERROR'
export const SET_POSTS_ERROR = 'reducer/SET_OBTAIN_POSTS_ERROR'
export const SET_POST_CREATED_ERROR = 'reducer/SET_CREATE_POST_ERROR'
export const DELETE_POST = 'reducer/DELETE_POST'

// Action Types:
export type SetPosts = {
    type: typeof SET_POSTS
    posts: PostsType
}
export type SetPost = {
    type: typeof SET_POST
    post: PostType
}
export type SetCreatedPost = {
    type: typeof SET_CREATED_POST
    post: PostType
}
export type SetReceivedPostError = {
    type: typeof SET_POST_ERROR
    isError: boolean
}
export type SetPostsError = {
    type: typeof SET_POSTS_ERROR
    isError: boolean
}
export type SetCreatedPostError = {
    type: typeof SET_POST_CREATED_ERROR
    isError: boolean
}
export type MainThunk = ThunkAction<void, MainStateI, unknown, ActionTypes>

export type ActionTypes =
    SetPosts
    | SetPost
    | SetCreatedPost
    | SetReceivedPostError
    | SetPostsError
    | SetCreatedPostError
