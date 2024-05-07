import axios from "axios"

const newsApi = axios.create({
    baseURL: "https://nc-news-fswv.onrender.com/api"
})

export function fetchArticle(article_id) {
    return newsApi.get(`/articles/${article_id}`)
}