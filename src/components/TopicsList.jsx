import { useEffect, useState } from "react";
import { fetchTopics } from "../../utils/api";
import { Link } from "react-router-dom";
import "./TopicsList.css";


export default function TopicsList() {
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
        <section>
            {topics.map((topic, index) => {
                return (
                    <Link to={`/topics/${topic.slug}`} className={'topic'} key={index}>#{topic.slug}</Link>
                )
            })}
        </section>
    )
}