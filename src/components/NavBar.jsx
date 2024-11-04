import TopicsList from "./TopicsList";
import "./NavBar.css"
import './OptionsBar.css'
import { Link, Route } from "react-router-dom";
import { AiFillHome, AiFillSmile, AiOutlineMenu } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";
import reactSelect from "react-select";
import TopicsSelector from "./TopicsSelector";
import { fetchTopics } from "../../utils/api";

export default function NavBar() {

    const mobileWidth = 820;
    const [isMobile, setIsMobile] = useState(window.innerWidth < mobileWidth)

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, []);

    const handleResize = () => {
        if (window.innerWidth < mobileWidth) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState("")
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        setIsLoading(true)
        fetchTopics()
        .then((response) => {
            setTopics(response)
            setIsLoading(false)
        })
        .catch((err) => {
            setIsLoading(false)
            setIsError(err.response.data.msg)
        })
    }, [])


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
                        <>
                            <TopicsSelector topics={topics}/>

                            {/* <IconContext.Provider value={{ size: '2em', color: "#ffde5a", className: "icon" }}>
                                <div className="icon-div">
                                    <AiOutlineMenu />
                                </div>
                            </IconContext.Provider> */}
                        </>
                    : 
                        <TopicsList topics={topics}/>
                    }                  
                        <IconContext.Provider value={{ size: '2em', color: "#ffde5a", className: "icon" }}>
                            <div className="icon-div">
                                    {isMobile ? "" : "user: "}   
                                <AiFillSmile />
                            </div>
                        </IconContext.Provider>
                </div>                    
            </div>
        </nav>
    )
} 