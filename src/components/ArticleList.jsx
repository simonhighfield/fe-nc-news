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

    // selector, the state of which feeds api
    const options = [
        {value: 'votes', label: 'Votes'},
        {value: 'created_at', label: 'Date'},
        {value: 'comment_count', label: 'Comments'}    
    ]

    function handleSelect(event) {
        fetchArticles(topic, event.value)
        .then((response) => {
            console.log('responded');
            setArticles(response)
        })
        
    }


    return (
        <main>
            <Select options={options} className="options-select" onChange={handleSelect}>
            
            </Select>
      
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