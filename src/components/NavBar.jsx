import TopicsList from "./TopicsList";
import "./NavBar.css"
import './OptionsBar.css'
import { Link, Route } from "react-router-dom";
import { AiFillHome, AiFillSmile, AiOutlineMenu } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";


export default function NavBar() {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 600)

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, []);

    const handleResize = () => {
        if (window.innerWidth < 600) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    return (
        <nav>
            <div className="nav-col">
                <Link to={`/`}>
                    <img className="nav-img" src={'/discus-logo.png'} />
                </Link>

                <div className="nav-row">
                    <Link to={'/'}>
                        <IconContext.Provider value={{ size: '2em', color: "#ffde5a", className: "icon" }}>
                            <div className="icon-div">
                                <AiFillHome />
                            </div>
                        </IconContext.Provider>
                    </Link>
                    
                    {isMobile ? 
                        <IconContext.Provider value={{ size: '2em', color: "#ffde5a", className: "icon" }}>
                        <div className="icon-div">
                            <AiOutlineMenu />
                        </div>
                    </IconContext.Provider>
                    : <>
                        <TopicsList/>

                        <IconContext.Provider value={{ size: '2em', color: "#ffde5a", className: "icon" }}>
                            <div className="icon-div">
                                    logged in as: 
                                <AiFillSmile />
                            </div>
                        </IconContext.Provider>
                </>
                    }                  
                </div>                    
            </div>
        </nav>
    )
} 