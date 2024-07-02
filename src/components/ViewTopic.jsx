import { useParams } from "react-router-dom";
import ArticleList from "./ArticleList";

export default function ViewTopic() {
    const { topic } = useParams();
    return (<ArticleList topic={topic}/>)
}