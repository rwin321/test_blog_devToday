import { ChangeEvent, useEffect, useState } from 'react'
import { ErrorI, MainStateI, PostType } from '../../redux/globalTypes'
import { connect } from 'react-redux'
import { createPost, setCreatedPost, setCreatePostError } from '../../redux/actions'
import { getCreatedPost, getErrorType } from '../../redux/selectors'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { Container } from '../../components/styled/styledComponent'
import NavBarLayout from "../../components/NavBar/NavBarLayout"

interface NewPostPagePropsI {
    createdPost: PostType;
    errorType: ErrorI;
    setCreatedPost: (post: PostType) => void;
    setCreatePostError: (isError: boolean) => void;
    createPost: (title: string, body: string) => void;
}

const NewPostPage = (props: NewPostPagePropsI): any => {
    const [title, setTitle]: [string, (title: string) => void] = useState('')
    const [body, setBody]: [string, (body: string) => void] = useState('')
    const [fetching, setFetching] = useState(false);

    const router = useRouter();

    useEffect(() => () => {
        props.setCreatedPost(null)
        props.setCreatePostError(false)
    }, [props.createdPost])

    if (props.createdPost) {
        router.push('/posts/[id]', `/posts/${props.createdPost.id}`)
    }

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const handleBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setBody(e.target.value)
    }
    const handlePost = () => {
        setFetching(true)
        props.createPost(title, body)
    }

    return <NavBarLayout title={'Creating post page'}>
        <Container>
            {fetching && !props.errorType.createPost && <h4>loading...</h4>}

            { props.errorType.createPost && <p>
                <b>Unexpected error</b> | Post wasn't created
            </p>}

            {!fetching && !props.errorType.createPost && <PostWrapper>
                <StyledLabel htmlFor="post_title">Title</StyledLabel>
                <StyledInput autoFocus value={title} onChange={handleTitleChange} id="post_title" type="text"/>
                <StyledTextarea value={body} onChange={handleBodyChange}/>
                <SendButton onClick={handlePost} disabled={!title.trim() || !body.trim()}>send</SendButton>
            </PostWrapper>}
        </Container>
    </NavBarLayout>
}

const PostWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    padding-top: 75px;
    max-width: 800px;
    background-color: rgba(50, 94, 84, 0.75);
`

const StyledLabel = styled.label`
    position: absolute;
    right: 88%;
    top: 10%;
    font-size: 20px;
`

const StyledInput = styled.input`
    width: 85%;
    font-size: 33px;
    margin-bottom: 20px;
    border: 1px solid black;
    border-radius: 13px;
`

const StyledTextarea = styled.textarea`
    width: 85%;
    font-size: 16px;
    resize: none;
    height: calc(100vh - 250px);
    border-bottom: 50px solid rgba(50, 94, 84, 0.75);
`

const SendButton = styled.button`
    position: absolute;
    left: 100%;
    font-weight: 600;
    font-style: normal;
    font-size: 17px;
    color: #000;
    text-decoration: none;
    border: 2px solid black;
    border-radius: 20px;
    text-transform: uppercase;
    padding: 4px 12px;
    margin: 0 0 15px;
    background-color: #fff;
    cursor: pointer;
    &:disabled {
        color: darkgray;
        border: 2px solid darkgray;
    }
    @media screen and (max-width: 880px) {
        position: static;
        margin-top: 10px;
    }
`

const mapStateToProps = (state: MainStateI) => ({
    createdPost: getCreatedPost(state),
    errorType: getErrorType(state),
})



const NewPostPageContainer = connect(mapStateToProps, {
    createPost,
    setCreatedPost,
    setCreatePostError,
})(NewPostPage)

export default NewPostPageContainer