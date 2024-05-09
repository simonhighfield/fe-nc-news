import './CommentCard.css'
import AuthorBubble from './AuthorBubble';
import { useState } from 'react';
import { commentOnArticle } from '../../utils/api';



// steps: 
// 3. move currentUser state to the top level
// 4. get API post working
// 5. display newly posted comment optimistically? OR comments list should refresh with newly posted


export default function PostCommentCard({ currentUser, article_id }) {

    const [newComment, setNewComment] = useState("")
    
    function handleSubmit(event) {
        event.preventDefault();
        commentOnArticle(article_id, currentUser.username, newComment)
        setNewComment("")
    }


    return (
        <section className='comment-card' style={{padding: '1em', margin: '1em'}}>
            <AuthorBubble className={'item1'} user={currentUser}/>
            <div className='copy'>
                <h2 className='item2'>{}</h2>
                <h3 className='item3'>{}</h3>
                <p className='item4'>Votes: {}</p>
                <form className='item5' onSubmit={handleSubmit}>
                    <label htmlFor='inputComment'>New Comment</label>
                    <input 
                        id='inputComment' 
                        type="text" 
                        placeholder='write here ...'
                        value={newComment}
                        onChange={(event) => {setNewComment(event.target.value)}}
                    >
                    </input>
                    <button>post comment</button>
                </form>
            </div>
        </section>
    )
} 