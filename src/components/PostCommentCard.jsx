import './CommentCard.css'
import AuthorBubble from './AuthorBubble';

// steps: 
// 1. add form to this thing
// 2. add state in form for newComment
// 3. move currentUser state to the top level
// 4. get API post working
// 5. display newly posted comment optimistically? OR comments list should refresh with newly posted


export default function PostCommentCard({ currentUser }) {
    return (
        <section className='comment-card' style={{padding: '1em', margin: '1em'}}>
            <AuthorBubble user={currentUser} className={'item1'}/>
            <div className='copy'>
                <h2 className='item2'>{}</h2>
                <h3 className='item3'>{}</h3>
                <p className='item4'>Votes: {}</p>
                <p className='item5'>{}</p>
            </div>
        </section>
    )
} 