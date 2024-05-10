import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './CommentCard.css'
import AuthorBubble from './AuthorBubble';
import { deleteComment } from '../../utils/api';
import { useState } from 'react';


export default function CommentCard({ comment, user, currentUser, currentComments, setCurrentComments }) {
    const [isLoading, setIsLoading] = useState(false)

    function handleDelete(event) {
        setIsLoading(true)
        deleteComment(comment.comment_id)
        .then((response)=> {
            setCurrentComments((currentComments) => {
                let index = currentComments.indexOf(comment)
                return [...currentComments.slice(0, index), ...currentComments.slice(index+1)]
            })
            setIsLoading(false)
        })
        .catch((err) => {
            console.log(err);
        })
    }


    return (
        <>
            <div className='comment-card' style={{padding: '1em', margin: '1em'}}>
                <AuthorBubble user={user} className={'item1'}/>
                <div className='copy'>
                    <h2 className='item2'>{comment.author}</h2>
                    <h3 className='item3'>{comment.created_at}</h3>
                    <p className='item4'>Votes: {comment.votes}</p>
                    <p className='item5'>{comment.body}</p>
                    {comment.author === currentUser.username 
                        ? <button onClick={handleDelete}>
                            {isLoading ? 'deleting ...' : 'delete'}
                        </button> 
                        : null
                    }
                </div>
            </div>

        </>    
    )
} 