// import {PostsType} from "../../types/types";
import Router from "next/router";
import MainLayout from "../../components/MainLayout/MainLayout";
import s from '../../styles/Posts.module.css'

const Posts = () => {

    const linkClickHandler = () => {
        Router.push('/')
    }

    return <MainLayout>
        <div className={s.mainContainer}>
            <h1>Posts</h1>
            <button onClick={linkClickHandler}>go back to home</button>
        </div>
    </MainLayout>
}

export default Posts