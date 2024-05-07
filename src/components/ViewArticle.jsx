import { useParams } from 'react-router-dom';
import { fetchArticle } from '../../utils/api';
import { useEffect, useState } from 'react';

export default function ViewArticle() {
    
    const [currentArticle, setCurrentArticle] = useState("")
    const { article_id } = useParams();
    
    useEffect(() => {
        fetchArticle(article_id)
        .then((response) => {
            setCurrentArticle(response.data.article)
        })
    }, [])

    return (
        <>
            <h1>{currentArticle.title}</h1>
            <h2>{currentArticle.author}</h2>
            <h3>{currentArticle.created_at}</h3>
            <img src={currentArticle.article_img_url}/>
            <p>{currentArticle.body}</p>

        </>
    )
} 