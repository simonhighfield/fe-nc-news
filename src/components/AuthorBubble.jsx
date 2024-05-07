import './AuthorBubble.css'

export default function AuthorBubble(props) {
    const { user } = props
    console.log('in author bubble', user);

    return (
        <>
            <img src={user.avatar_url} className='author-bubble'/>
        </>
    )
}