import { Link } from "react-router-dom";
import "./TopicsList.css";


export default function TopicsList( {topics} ) {

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