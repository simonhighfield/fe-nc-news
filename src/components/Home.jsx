import ArticleList from "./ArticleList";
import TopicsList from "./TopicsList";

export default function Home() {
    return (
        <>
            <nav>
                <TopicsList/>
            </nav>
            <h1>Home</h1>
            <ArticleList/>
        </>

    )
} 