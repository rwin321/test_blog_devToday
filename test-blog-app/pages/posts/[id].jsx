// import {PostIdType} from "../../types/types";
import Router, {useRouter} from "next/router";
import MainLayout from '../../components/MainLayout/MainLayout'
import s from '../../styles/id.module.css'

const Post = () => {

    const router = useRouter()
    console.log(router)

    const linkClickHandler = () => {
        Router.push('/')
    }

    return <MainLayout>
        <div className={s.mainContainer}>
            <h1>Post {router.query.id}</h1>
            <button onClick={linkClickHandler}>go back to home</button>
        </div>
    </MainLayout>
}

export default Post