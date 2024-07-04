import './CommentCard.css'
import './PostCommentCard.css'
import AuthorBubble from './AuthorBubble';
import { useState } from 'react';
import { commentOnArticle } from '../../utils/api';

export default function PostCommentCard({ currentUser, article_id, currentComments, setCurrentComments }) {
    const [newComment, setNewComment] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    
    function handleSubmit(event) {
        event.preventDefault();
        if (newComment.length > 0) {
            setNewComment("posting ...")
            setIsLoading(true)
            commentOnArticle(article_id, currentUser.username, newComment)
            .then((postedComment) => {
                setNewComment("")
                addPostedtoCurrentComments(postedComment);
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err.response.data.msg);
            })
        }
        
        function addPostedtoCurrentComments(postedComment) {
            // Updating the state only refreshes currentComments.map in ArticleComments.jsx; whereas useEffect reloads the whole page
            setCurrentComments((currentComments) => [postedComment, ...currentComments]
            );
        }
    }

    function inactiveButton(event) {
        event.preventDefault();
    }

    return (
        <section className='comment-card' style={{padding: '1em', margin: '1em'}}>
            <AuthorBubble className={'item1'} user={currentUser}/>
            <div className='copy'>
                <h2 className='item2'>{currentUser.username}</h2>
                <form className='item5' onSubmit={isLoading === false ? handleSubmit : inactiveButton}>
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