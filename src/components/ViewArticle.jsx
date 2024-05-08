import { useParams } from 'react-router-dom';
import { fetchArticleById, voteOnArticle } from '../../utils/api';
import { useEffect, useState } from 'react';
import Loading from './Loading';
import Error from './Error';
import ArticleComments from './ArticleComments';

export default function ViewArticle(props) {
    
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [currentArticle, setCurrentArticle] = useState("")
    const [currentVotes, setCurrentVotes] = useState(0)
    const [hasVoted, setHasVoted] = useState("")
    const { article_id } = useParams();
    const { users } = props
    
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
            setIsError(true)
        })
    }, [])

    function handleVote(voteDirection) {

        // if has voted down, 

        if (voteDirection === "up" && hasVoted === "") {
            setCurrentVotes(currentVotes + 1)
            setHasVoted("up")
            voteOnArticle(currentArticle.article_id, 1).catch((err) => {
                setIsError(true)
                setCurrentVotes(currentVotes - 1)
            })
        }

        if (voteDirection === "up" && hasVoted === "up") {
            setCurrentVotes(currentVotes - 1)
            setHasVoted("")
            voteOnArticle(currentArticle.article_id, -1).catch((err) => {
                setIsError(true)
                setCurrentVotes(currentVotes - 1)
            })
        }

        if (voteDirection === "up" && hasVoted === "down") {
            setCurrentVotes(currentVotes + 2)
            setHasVoted("up")
            voteOnArticle(currentArticle.article_id, 2).catch((err) => {
                setIsError(true)
                setCurrentVotes(currentVotes + 2)
            })
        }

        if (voteDirection === "down" && hasVoted === "") {
            setCurrentVotes(currentVotes - 1)
            setHasVoted("down")
            voteOnArticle(currentArticle.article_id, - 1).catch((err) => {
                setIsError(true)
                setCurrentVotes(currentVotes + 1)
            })
        }

        if (voteDirection === "down" && hasVoted === "down") {
            setCurrentVotes(currentVotes + 1)
            setHasVoted("")
            voteOnArticle(currentArticle.article_id, 1).catch((err) => {
                setIsError(true)
                setCurrentVotes(currentVotes + 1)
            })
        }

        if (voteDirection === "down" && hasVoted === "up") {
            setCurrentVotes(currentVotes - 2)
            setHasVoted("down")
            voteOnArticle(currentArticle.article_id, -2).catch((err) => {
                setIsError(true)
                setCurrentVotes(currentVotes - 2)
            })
        }
    }

    return (
        <>
            {isLoading ? <Loading /> : 
                <main>
                    <h1>{currentArticle.title}</h1>
                    <h2>{currentArticle.author}</h2>
                    <h3>{currentArticle.created_at}</h3>
                    <img src={currentArticle.article_img_url}/>
                    <h3>{currentVotes}</h3>
                    <button onClick={() => handleVote("up")}>up-vote</button>
                    <button onClick={() => handleVote("down")}>down-vote</button>
                    <p>{currentArticle.body}</p>
                </main>
            }
            {isError ? <Error/> : null}
            <ArticleComments article_id={article_id} users={users}/>
        </>
    )
} 