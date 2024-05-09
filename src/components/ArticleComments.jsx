import { useEffect, useState } from "react"
import { commentOnArticle, fetchArticleComments } from "../../utils/api"
import Loading from './Loading';
import Error from './Error';
import CommentCard from "./CommentCard";
import getUserData from "../../utils/getUserData"
import PostCommentCard from "./PostCommentCard";

export default function ArticleComments({ article_id, users }) {

    // Hardcoded in current user, at this level for now. Move upwards later
    let currentUser = getUserData(users, 'tickle122')

    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState("")
    const [currentComments, setCurrentComments] = useState([])

    useEffect(() => {
        setIsLoading(true)
        fetchArticleComments(article_id)
        .then((response) => {
            setCurrentComments(response)
            setIsLoading(false)
        })
        .catch((err) => {
            setIsLoading(false)
            setIsError(err.response.data.msg)
        })
    }, [])

    return (
        <section>
            <h2>comments</h2>
            {isLoading ? <Loading /> : 
                <ul>
                    <PostCommentCard currentUser={currentUser} article_id={article_id} currentComments={currentComments} setCurrentComments={setCurrentComments}/>
                    {currentComments.map((comment) => {
                        let user = getUserData(users, comment.author)   
                        return (
                            <CommentCard key={comment.comment_id} comment={comment} user={user}/>
                        )
                    })}
                </ul>
            
            }
            {isError ? <Error message={isError}/> : null}
        </section>
    )
}