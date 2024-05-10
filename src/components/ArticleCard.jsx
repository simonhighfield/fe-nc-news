import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './ArticleCard.css'

export default function ArticleCard({ article }) {
    const date = new Date(article.created_at).toLocaleDateString('en-GB', { hour12: false })
    console.log(article);
    return (
        <Card className="article-card">
            <Card.Img variant="top" src={article.article_img_url} />
            <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>
                    {article.author}
                    <br/>
                    {date}
                    <br/>
                    Votes: {article.votes}
                    <br/>
                    Comment: {article.comment_count}                 
                </Card.Text>
            <Link to={`/articles/${article.article_id}`}>
                <Button variant="primary">View Article</Button>
            </Link>
            </Card.Body>
        </Card>
    )
} 