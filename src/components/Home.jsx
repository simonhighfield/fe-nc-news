import ArticleList from "./ArticleList";
import TopicsList from "./TopicsList";

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <nav>
                <TopicsList/>
            </nav>
            <ArticleList/>
        </>

    )
} 