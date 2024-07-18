import TopicsList from "./TopicsList";
import "./NavBar.css"
import './OptionsBar.css'
import { Link, Route } from "react-router-dom";

export default function NavBar() {

    return (
        <>
            <nav>
                <Link to={`/`}>
                    <img className="nav-img" src={'/discus-logo.png'} />
                </Link>
                <TopicsList/>
            </nav>
        </>
    )
} 