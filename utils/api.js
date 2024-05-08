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

// Commented out for now - acual api post request gets 404
// export function commentOnArticle(article_id) {
//     return newsApi.post(`/articles/2/comment`, {
//         author: 'tickle122',
//         body: 'attempt no. 1'
//     }).then((response) => {
//         console.log(response.data.postedcComment);
//         return response.data.updatedArticle
//     })
// }

// Temporary - this is a hard coded response object like you'd expect
export function commentOnArticle(article_id) {
    return {
            "comment_id": 19,
            "body": "the body of the new comment",
            "article_id": 2,
            "author": "tickle122",
            "votes": 0,
            "created_at": "2024-04-24T14:49:50.185Z"
        
    }
}