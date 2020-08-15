// import {PostType} from "../../../types/types"
import Router from 'next/router'
import MainLayout from '../../../components/MainLayout/MainLayout'

import s from '../../../styles/HomePage.module.css'



const CreatePostPage = () => {

    const linkClickHandler = () => {
        Router.push('/')
    }

    // @ts-ignore
    return <MainLayout>
        <div className={s.mainContainer}>
            <h2>New post</h2>
            <button>Create post</button>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
            <button onCLick={linkClickHandler}>go back home</button>
        </div>
    </MainLayout>

}

export default CreatePostPage