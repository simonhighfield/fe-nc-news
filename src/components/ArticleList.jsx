import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
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
            <ul>
                <Container>
                    {/* <Row> */}
                    {articles.map((article, index) => {
                        return (
                        // <Col sm="4" key={article.article_id}>
                            <Card key={article.article_id} className="article-card">
                                <Card.Img variant="top" src={article.article_img_url} />
                                <Card.Body>
                                    <Card.Title>{article.title}</Card.Title>
                                    <Card.Text>
                                        {article.author} 
                                        <br/>
                                        {article.created_at}</Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
       
                        // </Col>
                        );
                    })}
                    {/* </Row> */}
                </Container>
            </ul>
        </>
        
    )
} 