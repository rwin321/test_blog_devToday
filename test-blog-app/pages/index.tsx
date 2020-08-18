import NavBarLayout from "../components/NavBar/NavBarLayout"
import { connect } from 'react-redux'
import { ErrorI, MainStateI, PostsType } from '../redux/globalTypes'
import { requestedPosts, setReceivedPostError } from '../redux/actions'
import { getErrorType, getPosts } from '../redux/selectors'
import { useEffect } from 'react'
import { NextPageContext } from 'next'
import { postAPI } from '../api/api'
import { standardizePost, postValidator } from '../assets/validators'
import Link from 'next/link'
import { Container, Item } from '../components/styled/styledComponent'
import styled from 'styled-components'

interface RecentPostsI {
    posts: PostsType;
    ssrPosts: PostsType;
    errorType: ErrorI;
    requestedPosts: () => void;
    setReceivedPostError: (isError: boolean) => void;
}

const MainPage = (props: RecentPostsI) => {
    const posts = props.posts || props.ssrPosts

    if (!posts) props.requestedPosts()

    useEffect(() => () => {
        props.setReceivedPostError(false)
    }, [])

    return <NavBarLayout title={'Latest posts page'}>
        <Container>
            {!posts && !props.errorType.obtainPosts && <h2>loading...</h2>}


            {!posts && props.errorType.obtainPosts && <p>
                <b>Unexpected Error</b> | Failed to get posts
            </p>}

            {
                posts && !props.errorType.obtainPosts && <>
                <H1><Span>Latest Posts</Span></H1>
                <ul>{ posts.map(post => {
                    return <li key={post.id}>
                        <Item>
                            <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                                <a>{post.title}</a>
                            </Link>
                        </Item>
                    </li>;
                }) }
                </ul>
            </>
            }
        </Container>
    </NavBarLayout>;
}

MainPage.getInitialProps = async ({ req }: NextPageContext) => {
    if (!req) return { ssrPosts: null }
    try {
        let ssrPosts: PostsType
        const response = await postAPI.getPostsQuery()
        ssrPosts = response
            .data
            .filter(postValidator)
            .map(standardizePost)
        ssrPosts!.reverse()
        return { ssrPosts }
    } catch (err) {
        console.log(err)
        return { ssrPosts: null }
    }
};

const H1 = styled.h1`
    display: flex;
    justify-content: center;
    color: black;
    position: fixed;
    bottom: 84%;
    right: 50%;
    position: sticky;
`
const Span = styled.span`
    display: inline;
    font-size: 20px;
    font-style: italic;
    text-decoration: none;
    padding: 10px 0;
    
`

const mapStateToProps = (state: MainStateI) => ({
    posts: getPosts(state),
    errorType: getErrorType(state),
})


const IndexContainer = connect(mapStateToProps, {
    requestedPosts,
    setReceivedPostError
})(MainPage)

export default IndexContainer
