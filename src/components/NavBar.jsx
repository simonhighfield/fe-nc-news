import TopicsList from "./TopicsList";
import "./NavBar.css"
import './OptionsBar.css'

export default function NavBar(topic, setTopic) {

    return (
        <>
            <nav>
                <img className="nav-img" src={'/discus-logo.png'} />
                <TopicsList topic={topic} setTopic={setTopic}/>
            </nav>
        </>
    )
} 