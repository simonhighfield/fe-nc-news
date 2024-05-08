import './AuthorBubble.css'

export default function AuthorBubble(props) {
    const { user } = props

    return (
        <>
            <img src={user.avatar_url} className='author-bubble'/>
        </>
    )
}