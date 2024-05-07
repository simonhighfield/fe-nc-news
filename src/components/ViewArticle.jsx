import { useParams } from 'react-router-dom';

export default function ViewArticle() {
    const { article_id } = useParams();
    return (
        <>
            <h1>View Article {article_id}</h1>
        </>

    )
} 