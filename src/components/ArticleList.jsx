import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './ArticleList.css'
import Loading from './Loading';
import Error from './Error';
import { fetchArticles } from '../../utils/api';

export default function ArticleList() {
    
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState("")
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        setIsLoading(true)
        fetchArticles()
        .then((response) => {
            setArticles(response)
            setIsLoading(false)
        })
        .catch((err) => {
            setIsLoading(false)
            setIsError(err.response.data.msg)
        })
    }, [])


    return (
        <main>
            <h2>articles</h2>
            {isLoading ? <Loading /> : 
                <ul className="article-list">
                    {articles.map((article) => {
                        return (
                            <ArticleCard key={article.article_id} article={article}></ArticleCard>
                        );
                    })}
                </ul>
            }
        {isError ? <Error message={isError}/> : null}
        </main>
    )
} 