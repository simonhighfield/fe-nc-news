import { useParams } from 'react-router-dom';
import { fetchArticleById } from '../../utils/api';
import { useEffect, useState } from 'react';
import Loading from './Loading';
import Error from './Error';

export default function ViewArticle() {
    
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [currentArticle, setCurrentArticle] = useState("")
    const { article_id } = useParams();
    
    useEffect(() => {
        setIsLoading(true)
        fetchArticleById(article_id)
        .then((response) => {
            setCurrentArticle(response.data.article)
            setIsLoading(false)
        })
        .catch((err) => {
            setIsLoading(false)
            setIsError(true)
        })
    }, [])

    return (
        <>
            {isLoading ? <Loading /> : 
                <>
                    <h1>{currentArticle.title}</h1>
                    <h2>{currentArticle.author}</h2>
                    <h3>{currentArticle.created_at}</h3>
                    <img src={currentArticle.article_img_url}/>
                    <p>{currentArticle.body}</p>
                </>
            }
            {isError ? <Error/> : null}
        </>
    )
} 