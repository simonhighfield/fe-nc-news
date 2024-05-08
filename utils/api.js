import axios from "axios"

const newsApi = axios.create({
    baseURL: "https://nc-news-fswv.onrender.com/api"
})

export function fetchArticles() {
    return newsApi.get(`/articles/`).then((response) => {
        return response.data.articles
    })
}

export function fetchArticleById(article_id) {
    return newsApi.get(`/articles/${article_id}`).then((response) => {
        return response.data.article
    })
}

export function fetchArticleComments(article_id) {
    return newsApi.get(`/articles/${article_id}/comments`).then((response) => {
        return response.data.comments
    })
}

export function fetchUsers() {
    return newsApi.get(`/users`).then((response) => {
        return response.data.users
    })
}

export function voteOnArticle(article_id, incriment) {
    return newsApi.patch(`/articles/${article_id}`, {
        inc_votes: incriment
    }).then((response) => {
        return response.data.updatedArticle
    })
}