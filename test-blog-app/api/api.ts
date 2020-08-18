import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://simple-blog-api.crew.red/'
})

export const postAPI = {
    getPostsQuery () {
        return instance.get('posts')
    },
    deletePostQuery (id: string) {
        return instance.delete(`posts/${id}`)
    },
    getPostQuery(id: number | string) {
        return instance.get(`posts/${id}?_embed=comments`)
    },
    createPostQuery(title: string, body: string) {
        return instance.post(`posts`, {title, body})
    }
}

