import { PostType, QueryPostI} from '../redux/globalTypes';

export const postValidator = (post: any): boolean => {
    if (!post) return false;
    const post_ = { ...post };
    return !!(post_.id && post_.title && post_.body && post_.title.trim() && post_.body.trim());
}
export const standardizePost = (post: QueryPostI): PostType => {
    const post_: PostType = { ...post, id: post.id.toString() };
    if (post_.comments?.length) {
        post_.comments = post_.comments.map(comment => {
            return {
                ...comment,
                id: comment.id.toString(),
                postId: comment.postId.toString(),
            };
        });
    }
    return post_;
}
