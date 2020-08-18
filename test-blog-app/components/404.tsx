import React from 'react'
import Link from "next/link";
import s from '../styles/error.module.css'

type ErrorPage = () => void

const ErrorPage: React.FC<ErrorPage> = (): any => {
    return (
        <>
            <div className={s.mainContainer}>
                <h1 className={s.items}>Error 404</h1>
                <p className={s.items}>Please, <Link href={'/'}><a>go back to safety</a></Link></p>
            </div>

        </>
    )
}

export default ErrorPage