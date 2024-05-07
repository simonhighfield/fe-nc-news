import Card from 'react-bootstrap/Card';
import './ArticleCard.css'

export default function ArticleCard(props) {
    const { article } = props

    return (
        <>
            <Card className="article-card">
                <Card.Img variant="top" src={article.article_img_url} />
                <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>
                        {article.author} 
                        <br/>
                        {article.created_at}</Card.Text>
                </Card.Body>
            </Card>
        </>    
    )
} 