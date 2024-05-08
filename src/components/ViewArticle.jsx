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
    const { article_id } = useParams();
    const { users } = props
    
    useEffect(() => {
        setIsLoading(true)
        fetchArticleById(article_id)
        .then((response) => {
            setCurrentArticle(response)
            setIsLoading(false)
        })
        .catch((err) => {
            setIsLoading(false)
            setIsError(true)
        })
    }, [])

    function handleVote() {
        voteOnArticle(currentArticle.article_id)
    }

    return (
        <>
            {isLoading ? <Loading /> : 
                <main>
                    <h1>{currentArticle.title}</h1>
                    <h2>{currentArticle.author}</h2>
                    <h3>{currentArticle.created_at}</h3>
                    <img src={currentArticle.article_img_url}/>
                    <h3>{currentArticle.votes}</h3>
                    <button onClick={handleVote}>vote</button>
                    <p>{currentArticle.body}</p>
                </main>
            }
            {isError ? <Error/> : null}
            <ArticleComments article_id={article_id} users={users}/>
        </>
    )
} 