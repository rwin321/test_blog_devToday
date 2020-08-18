interface CommentI {
    postId: string;
    body: string;
    id: string;
}

export interface QueryPostI {
    id: string | number;
    title: string;
    body: string;
    comments?: CommentI[];
}

export interface PostI extends QueryPostI {
    id: string;
}

export interface ErrorI {
    errorQueryPost: boolean,
    obtainPosts: boolean,
    createPost: boolean,
}

export type PostType = PostI | null
export type PostsType = PostI[] | null

export interface MainStateI {
    posts: PostsType;
    fetchedPost: PostType;
    createdPost: PostType;
    errorType: ErrorI;
}


