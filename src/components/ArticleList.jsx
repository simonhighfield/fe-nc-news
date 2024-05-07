import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './ArticleList.css'

const endpoint = "https://nc-news-fswv.onrender.com/api/articles"

export default function ArticleList() {
    
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get(endpoint)
        .then((response) => {
            setArticles(response.data.articles)
        })
    }, [])


    return (
        <>
            <h2>articles</h2>
            <ul className="article-list">
                {articles.map((article) => {
                    return (
                        <ArticleCard key={article.article_id} article={article}></ArticleCard>
                    );
                })}
            </ul>
        </>
    )
} 