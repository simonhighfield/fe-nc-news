import { useState } from 'react';
import Select from 'react-select';
import './TopicsSelector.css'
import { Link, Route, useNavigate } from "react-router-dom";


const options = [
    {value: 'coding', label: 'Coding', path: '/topics/coding'},
    {value: 'football', label: 'Football', path: '/topics/football'},
    {value: 'cooking', label: 'Cooking', path: '/topics/cooking'}
]
const styles = {
    control: (provided) => ({
        ...provided,
        fontFamily: 'Arial, sans-serif',
        color: 'black',
        padding: '5px',
        width: '100%',
        minHeight: 'unset',
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#c61900' : 'white',
        color: state.isFocused ? 'white' : 'black',
        padding: '10px',
    }),
    placeholder: (provided) => ({
        ...provided,
        color: 'grey',
    }),
    singleValue: (provided) => ({
        ...provided,
        color: 'black',
    }),        
};


export default function TopicsSelector( {topics} ) {
    const [selectedOption, setSelectedOption] = useState(null)
    const navigate = useNavigate()

    function handleChange(option) {
        setSelectedOption(option)        
        navigate(option.path)
    }
    
    return (
        <div className='topics-selector-container'>
            <Select
                classNamePrefix="mySelect"
                placeholder="Select topic"
                defaultValue={selectedOption}
                onChange={handleChange}
                options={options}
                styles={styles}
            />
        </div>
    );
}