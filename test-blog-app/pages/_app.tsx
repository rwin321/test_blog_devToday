import '../styles/globals.css'
import '../styles/nprogress.css'
import { AppProps } from 'next/dist/pages/_app'
import { Provider } from 'react-redux'
import store from '../redux/store'
import { Router } from 'next/router'
import NProgress from 'nprogress'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const BlogApp = ({ Component, pageProps }: AppProps) => {
  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  )
}

export default BlogApp