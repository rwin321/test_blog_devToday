import Link from 'next/link'
// import {MainLayoutType} from "../../types/types";
import s from './MainLayout.module.css'

const MainLayout = ({ children }) => {
    return (
        <>
            <nav>
                <div className={s.linkContainer}>
                    <span className={s.links}><Link href={'/posts'}><a>Posts</a></Link></span>
                    <span className={s.links}><Link href={'/posts/id'}><a>Post</a></Link></span>
                    <span className={s.links}><Link href={'/posts/new'}><a>Create</a></Link></span>
                </div>
            </nav>
            <main>
                { children}
            </main>
            <style jsx>{`
                nav {
                    position: fixed;
                    height: 60px;
                    left: 0;
                    top: 0;
                    right: 0;
                    background: lightblue;
                    display: flex;
                    justify-content: space-around;
                    align-items: center
                }
            `}</style>
        </>
    )
}

export default MainLayout