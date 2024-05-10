import axios from "axios"

const newsApi = axios.create({
    baseURL: "https://nc-news-fswv.onrender.com/api"
})

export function fetchArticles(topic, sort_by) {

    const params = {}
    if (topic) {params.topic = topic}
    if (sort_by) {params.sort_by = sort_by}
    return newsApi.get('/articles/', {params})
    .then((response) => {
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
    })
    .then((response) => {
        return response.data.updatedArticle
    })
}

export function commentOnArticle(article_id, username, newComment) {
    return newsApi.post(`/articles/${article_id}/comments`, {
        author: username,
        body: newComment
    })
    .then((response) => {
        return response.data.postedComment
    })
}

export function deleteComment(comment_id) {
    return newsApi.delete(`/comments/${comment_id}`)
}

export function fetchTopics() {
    return newsApi.get(`/topics`).then((response) => {
        return response.data.topics
    })
}