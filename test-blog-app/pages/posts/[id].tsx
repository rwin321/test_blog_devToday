import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { requestedPost, setReceivedPostError, setPost } from '../../redux/actions'
import { ErrorI, MainStateI, PostType } from '../../redux/globalTypes'
import { getErrorType, getFetchedPost } from '../../redux/selectors'
import React, { useEffect } from 'react'
import { NextPageContext } from 'next'
import { postAPI } from '../../api/api'
import { postValidator } from '../../assets/validators'
import { Container } from '../../components/styled/styledComponent'
import NavBarLayout from "../../components/NavBar/NavBarLayout"
import Link from "next/link"
import styled from "styled-components"

interface IPostPageProps {
    fetchedPost: PostType
    ssrPost: PostType
    errorType: ErrorI
    setPost: (post: PostType) => void
    requestedPost: (postId: string) => void
    setReceivedPostError: (isError: boolean) => void
}
interface PostNextPageContext extends NextPageContext {
    query: {
        id: string
    }
}

const PostPage = (props: IPostPageProps) => {
    const router = useRouter()
    console.log(router)
    const post = props.fetchedPost || props.ssrPost

    useEffect(() => {
        if (!post && !props.errorType.errorQueryPost && router.query.id) {
            const postId = Array.isArray(router.query.id)
                ? router.query.id[0]
                : router.query.id
            props.requestedPost(postId)
        }
        return () => {
            props.setPost(null);
            props.setReceivedPostError(false);
        }
    }, [router.query.id])

    return <NavBarLayout title={'Post page'}>
        { !post && <div>is loading</div> }
        <Container>
            {!post && !props.errorType.errorQueryPost && <h2>loading...</h2>}

            {!post && props.errorType.errorQueryPost && <p>
                <p>Please, <Link href={'/'}><a>go back to safety</a></Link></p>
                <span>| Looks like queried post doesn't exist</span>
            </p>}

            { post && !props.errorType.errorQueryPost && <>
                <SectionBlock>
                    <PostTitle>title: {post.title}</PostTitle>
                    <pre>{post.body}</pre>
                    <hr/>
                    <h4>Comments:</h4>
                    <ul>{post.comments?.length
                        ? post.comments.map(i => {
                            return <li key={i.id}>{`user${i.id}: ${i.body}`}</li>;
                        })
                        : <li>There are no comments yet</li>
                    }</ul>
                </SectionBlock>
            </>}
        </Container>
    </NavBarLayout>
};

const PostTitle = styled.h2`
    & {
        font-size: 20px;
        font-style: solid;
        
    }
    &:doubleClick {
        font-size: 25px;
        color: rgba(113, 220, 209, 0.85);
        text-shadow: 2px 2px 5px black;
    }
`
const SectionBlock = styled.section`
    display: block;
    position: center;
    font-family: Roboto;
`

PostPage.getInitialProps = async ({ req, query }: PostNextPageContext) => {
    if (!req) return { ssrPost: null }
    try {
        const postId = query.id
        const response = await postAPI.getPostQuery(postId);
        const post: PostType = postValidator(response.data) ? response.data : null
        return { ssrPost: post }
    } catch (err) {
        console.log(err)
        return { ssrPost: null }
    }
};

const mapStateToProps = (state: MainStateI) => ({
    fetchedPost: getFetchedPost(state),
    errorType: getErrorType(state),
});

const PostPageContainer = connect(mapStateToProps, {
    requestedPost,
    setPost,
    setReceivedPostError,
})(PostPage)

export default PostPageContainer
