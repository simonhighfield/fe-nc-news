import './AuthorBubble.css'

export default function AuthorBubble( { user }) {
    return (
        <>
            <img src={user.avatar_url} className='author-bubble'/>
        </>
    )
}