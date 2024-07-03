import TopicsList from "./TopicsList";
import "./NavBar.css"
import Select from 'react-select'
import './OptionsBar.css'

export default function NavBar(topic, setTopic) {

    return (
        <>
            <nav>
                <img className="nav-img" src={"../src/assets/Discus Logo.png"} />
                <TopicsList topic={topic} setTopic={setTopic}/>
            </nav>
        </>
    )
} 