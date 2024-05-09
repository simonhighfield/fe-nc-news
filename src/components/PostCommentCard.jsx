import './CommentCard.css'
import './PostCommentCard.css'
import AuthorBubble from './AuthorBubble';
import { useState } from 'react';
import { commentOnArticle } from '../../utils/api';



// steps:

// render from api? ORRRRRRRR maybe instead of refreshing, get it to be highlighted WHILST posting, and then manually push it to the list using state ... rather than rerender whole thing
// 3. move currentUser state to the top level
// 4. get API post working
// 5. display newly posted comment optimistically? OR comments list should refresh with newly posted


export default function PostCommentCard({ currentUser, article_id, newCommentPosted, setNewCommentPosted }) {

    const [newComment, setNewComment] = useState("")
    
    function handleSubmit(event) {
        event.preventDefault();
        commentOnArticle(article_id, currentUser.username, newComment)
        .then(() => {
            setNewCommentPosted(true)
        })
        setNewComment("")
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