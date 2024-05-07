import { useEffect, useState } from "react"
import { fetchArticleComments } from "../../utils/api"
import Loading from './Loading';
import Error from './Error';
import CommentCard from "./CommentCard";

export default function ArticleComments(props) {

    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [currentComments, setCurrentComments] = useState([])
    const { article_id, users } = props;

    useEffect(() => {
        setIsLoading(true)
        fetchArticleComments(article_id)
        .then((response) => {
            setCurrentComments(response.data.comments)
            setIsLoading(false)
        })
        .catch((err) => {
            setIsLoading(false)
            setIsError(true)
        })
    }, [])

    function getUserData (users, content) {
        return users.filter((user) => {
            return user.username === content.author
        })[0]
    }

    return (
        <>
            <h2>comments</h2>
            {isLoading ? <Loading /> : 
                <>
                    <ul>
                        {currentComments.map((comment) => {

                            let user = getUserData(users, comment)
                            
                            return (
                                <CommentCard key={comment.comment_id} comment={comment} user={user}/>
                            )
                        })}
                    </ul>
                </>
            }
            {isError ? <Error/> : null}
        
        </>
    )
}