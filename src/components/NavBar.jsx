import TopicsList from "./TopicsList";

export default function NavBar(topic, setTopic) {

    return (
        <>
            <nav>
                <h1>NC News Nav Bar</h1>
                <TopicsList topic={topic} setTopic={setTopic}/>
            </nav>
        </>
    )
} 