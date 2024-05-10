import { useParams } from 'react-router-dom';
import { fetchArticleById, voteOnArticle } from '../../utils/api';
import { useEffect, useState } from 'react';
import Loading from './Loading';
import Error from './Error';
import ArticleComments from './ArticleComments';
import handleVote from '../../utils/handleVote';
import './VoteButton.css'

export default function ViewArticle({ users }) {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState("")
    const [currentArticle, setCurrentArticle] = useState("")
    const [currentVotes, setCurrentVotes] = useState(0)
    const [hasVoted, setHasVoted] = useState("")
    const { article_id } = useParams();
    
    useEffect(() => {
        setIsLoading(true)
        fetchArticleById(article_id)
        .then((response) => {
            setCurrentArticle(response)
            setCurrentVotes(response.votes)
            setIsLoading(false)
        })
        .catch((err) => {
            setIsLoading(false)
            setIsError(err.response.data.msg)
        })
    }, [])

   if (isError) {
    return (
        <Error message={isError}/>
    )
   } else {
        return (
            <>
                {isLoading ? <Loading /> : 
                    <main>
                        <h1>{currentArticle.title}</h1>
                        <h2>{currentArticle.author}</h2>
                        <h3>{currentArticle.created_at}</h3>
                        <img src={currentArticle.article_img_url}/>
                        <h3>{currentVotes}</h3>
                        <button onClick={() => handleVote(currentArticle, "up", hasVoted, setHasVoted, currentVotes, setCurrentVotes)} className={hasVoted === "up" ? "selected" : null}>up-vote</button>
                        <button onClick={() => handleVote(currentArticle, "down", hasVoted, setHasVoted, currentVotes, setCurrentVotes)} className={hasVoted === "down" ? "selected" : null}>down-vote</button>
                        <p>{currentArticle.body}</p>
                    </main>
                }
                <ArticleComments article_id={article_id} users={users}/>
                {isError ? <Error message={isError}/> : null}
            </>
        )
   }
}