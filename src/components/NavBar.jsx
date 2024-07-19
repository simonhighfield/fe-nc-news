import TopicsList from "./TopicsList";
import "./NavBar.css"
import './OptionsBar.css'
import { Link, Route } from "react-router-dom";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { IconContext } from "react-icons";



export default function NavBar() {

    return (
        <>
            <nav>
                    <Link to={`/`}>
                        <img className="nav-img" src={'/discus-logo.png'} />
                    </Link>

                    <div className="nav-row">
                        <IconContext.Provider value={{ size: '2em', color: "#ffde5a", className: "icon" }}>
                            <div className="icon-div">
                                <AiFillHome />
                            </div>
                        </IconContext.Provider>

                        <TopicsList/>

                        <IconContext.Provider value={{ size: '2em', color: "#ffde5a", className: "icon" }}>
                            <div className="icon-div">
                                <AiOutlineMenu />
                            </div>
                        </IconContext.Provider>
                    </div>                    
            </nav>
        </>
    )
} 