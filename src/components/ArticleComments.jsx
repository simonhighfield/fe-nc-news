import { useEffect, useState } from "react"
import { fetchArticleComments } from "../../utils/api"
import Loading from './Loading';
import Error from './Error';
import CommentCard from "./CommentCard";
import getUserData from "../../utils/getUserData"

export default function ArticleComments({ article_id, users }) {

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
                    {currentComments.map((comment) => {
                        let user = getUserData(users, comment)                           
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