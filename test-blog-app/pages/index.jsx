// import {PostsType} from "../types/types";
import {PostsType} from "../types/types";
import Head from 'next/head'
import MainLayout from './../components/MainLayout/MainLayout'
import s from '../styles/HomePage.module.css'


const Posts = () => {
    return <MainLayout>
        <div>
            // @ts-ignore
            <section className={s.mainContainer}>
                <h3>Blog</h3>
                <img
                    src="https://lh3.googleusercontent.com/proxy/V4_Y0NxNC0ryyFnXeQyM9TbgOjwdLKuzrLrsghylMDsuPC1-M0RT2ih-nwZ8rkGKEzv68-SkFReFhVJ9um6Z7KbXw6iHp9eGhXj_WFYjc7Xp"
                    alt="/"/>
            </section>
        </div>
    </MainLayout>
}

export default Posts