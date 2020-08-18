import React from "react";
import Link from 'next/link'
import s from './NavBar.module.css'
import Head from "next/head";

interface NavBarLayoutProps {
    title?: string
    children?: any
}

const NavBarLayout: React.FC<NavBarLayoutProps> = ( props) => {
    return (
        <>
            <Head>
                <title>{ props.title }</title>
                <meta name={'keywords'} content={'nextjs, react, redux, ts, test'}/>
                <meta name={'description'} content={'nextjs_test_blog_app'}/>
                <meta charSet={'utf-8'}/>
            </Head>
            <nav className={s.navBar}>
                    <span className={s.link}><Link href={'/'}><a>Posts</a></Link></span>
                    <span className={s.link}><Link href={'/posts/new'}><a>Create</a></Link></span>
            </nav>
            <main>
                { props.children }
            </main>
        </>
    )
}

export default NavBarLayout