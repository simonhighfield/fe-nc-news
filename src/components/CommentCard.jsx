import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './CommentCard.css'

export default function CommentCard(props) {
    const { comment, commentAuthor } = props

    return (
        <>
            <div className='comment-card'>
                <h2>{comment.author}</h2>
                <h3>{comment.created_at}</h3>
                <img src={commentAuthor.avatar_url}/>
                <p>{comment.body}</p>
                <p>Votes: {comment.votes}</p>
            </div>

        </>    
    )
} 