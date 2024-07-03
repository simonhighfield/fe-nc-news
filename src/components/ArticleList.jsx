import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import './ArticleList.css'
import Loading from './Loading';
import Error from './Error';
import Select from 'react-select'
import { fetchArticles } from '../../utils/api';
import './OptionsBar.css'
import OptionsBar from "./OptionsBar";

export default function ArticleList({ topic }) {
    
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState("")
    const [articles, setArticles] = useState([]);
    const [sort_by, set_sort_by] = useState("");
    const [order, set_order] = useState("");

    useEffect(() => {
        setIsLoading(true)
        fetchArticles(topic, sort_by, order)
        .then((response) => {
            setArticles(response)
            setIsLoading(false)
        })
        .catch((err) => {
            setIsLoading(false)
            setIsError(err.response.data.msg)
        })
    }, [topic])


    return (
        <main className="main-content">
            
            <h2>{articles.length} articles</h2>
            <OptionsBar topic={topic} sort_by={sort_by} order={order} setArticles={setArticles} set_sort_by={set_sort_by} set_order={set_order}/>

            {isLoading ? <Loading /> : 
                <ul className="article-list">
                    {articles.map((article) => {
                        return (
                            <ArticleCard key={article.article_id} article={article}></ArticleCard>
                        );
                    })}
                </ul>
            }
        {isError ? <Error message={isError}/> : null}
        </main>
    )
} 