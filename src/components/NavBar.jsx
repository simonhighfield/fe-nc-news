import TopicsList from "./TopicsList";
import "./NavBar.css"
import './OptionsBar.css'

export default function NavBar() {

    return (
        <>
            <nav>
                <img className="nav-img" src={'/discus-logo.png'} />
                <TopicsList/>
            </nav>
        </>
    )
} 