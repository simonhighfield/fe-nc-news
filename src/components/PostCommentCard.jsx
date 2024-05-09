import './CommentCard.css'
import './PostCommentCard.css'
import AuthorBubble from './AuthorBubble';
import { useState } from 'react';
import { commentOnArticle } from '../../utils/api';

export default function PostCommentCard({ currentUser, article_id, newCommentPosted, setNewCommentPosted, currentComments, setCurrentComments }) {
    const [newComment, setNewComment] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    
    function handleSubmit(event) {
        event.preventDefault();
        setIsLoading(true)
        commentOnArticle(article_id, currentUser.username, newComment)
        .then((postedComment) => {
            setNewComment("")
            // Updating the state only refreshes currentComments.map in ArticleComments.jsx; whereas useEffect reloads the whole page
            setCurrentComments((currentComments) =>
                [postedComment,...currentComments] 
            )
            setIsLoading(false)
        })
    }


    return (
        <section className='comment-card' style={{padding: '1em', margin: '1em'}}>
            <AuthorBubble className={'item1'} user={currentUser}/>
            <div className='copy'>
                <h2 className='item2'>{currentUser.username}</h2>
                <form className='item5' onSubmit={handleSubmit}>
                    <textarea
                        placeholder='Write a comment ...'
                        value={newComment}
                        onChange={(event) => {setNewComment(event.target.value)}}
                    ></textarea>
                    <button>post comment</button>
                </form>
            </div>
        </section>
    )
} 