import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import './ArticleList.css'
import Loading from './Loading';
import Error from './Error';
import { fetchArticles } from '../../utils/api';
import Select from 'react-select'
import './OptionsSelect.css'

export default function ArticleList( { topic }) {
    
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState("")
    const [articles, setArticles] = useState([]);
    const [sort_by, set_sort_by] = useState("");
    const [order, set_order] = useState("");

    useEffect(() => {
        setIsLoading(true)
        fetchArticles(topic)
        .then((response) => {
            setArticles(response)
            setIsLoading(false)
        })
        .catch((err) => {
            setIsLoading(false)
            setIsError(err.response.data.msg)
        })
    }, [])


    const sortByOptions = [
        {value: 'votes', label: 'Votes'},
        {value: 'created_at', label: 'Date'},
        {value: 'comment_count', label: 'Comments'}    
    ]

    const orderOptions = [
        {value: 'DESC', label: 'Descending'},
        {value: 'ASC', label: 'Ascending'},
    ]

    function handleSort(event) {        
        fetchArticles(topic, event.value, order)
        .then((response) => {
            setArticles(response)
            set_sort_by(event.value)
        })
    }

    function handleOrder(event) {
        fetchArticles(topic, sort_by, event.value)
        .then((response) => {
            setArticles(response)
            set_order(event.value)
        })
    }


    return (
        <main>
            <label>
                Sort by:
                <Select options={sortByOptions} className="options-select" onChange={handleSort} defaultValue={sortByOptions[1]}/>
            </label>
            
            <label>
                Sort order:
                <Select options={orderOptions} className="options-select" onChange={handleOrder} defaultValue={orderOptions[0]}/>
            </label>
            
            
      
            <h2>articles</h2>
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