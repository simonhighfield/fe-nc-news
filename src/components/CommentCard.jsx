import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './CommentCard.css'
import AuthorBubble from './AuthorBubble';

export default function CommentCard(props) {
    const { comment, user } = props

    return (
        <>
            <div className='comment-card' style={{padding: '1em', margin: '1em'}}>
                <AuthorBubble user={user} className={'item1'}/>
                <div className='copy'>
                    <h2 className='item2'>{comment.author}</h2>
                    <h3 className='item3'>{comment.created_at}</h3>
                    <p className='item4'>Votes: {comment.votes}</p>
                    <p className='item5'>{comment.body}</p>
                </div>
            </div>

        </>    
    )
} 