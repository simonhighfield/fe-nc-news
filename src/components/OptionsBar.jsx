import Select from 'react-select'
import './OptionsBar.css'
import { fetchArticles } from '../../utils/api';

export default function OptionsBar ({ topic, order, sort_by, setArticles, set_order, set_sort_by }) {

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
        <div className="options-bar">
            <label className="options-item" htmlFor="sortSelect">Sort by: </label>
            <Select className={"options-item options-select"} options={sortByOptions} id="sortSelect" onChange={handleSort} defaultValue={sortByOptions[0]}/>
                    
            <label className="options-item" htmlFor="orderSelect">Sort order:</label>
            <Select className={"options-item options-select"} options={orderOptions} id="orderSelect" onChange={handleOrder} defaultValue={orderOptions[0]}/>
        </div>
    )
}
