import axios from "axios"

const newsApi = axios.create({
    baseURL: "https://nc-news-fswv.onrender.com/api"
})

export function fetchArticles() {
    return newsApi.get(`/articles/`)
}

export function fetchArticleById(article_id) {
    return newsApi.get(`/articles/${article_id}`)
}