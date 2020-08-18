import { MainStateI } from './globalTypes'

export const getPosts = (state: MainStateI) => state.posts
export const getFetchedPost= (state: MainStateI) => state.fetchedPost
export const getCreatedPost = (state: MainStateI) => state.createdPost
export const getErrorType= (state: MainStateI) => state.errorType