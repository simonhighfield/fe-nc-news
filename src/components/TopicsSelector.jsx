import { useState } from 'react';
import Select from 'react-select';
import './TopicsSelector.css'
import { useNavigate } from "react-router-dom";
import { generateSelectOptions, styles } from './TopicsSelector-data'

export default function TopicsSelector( {topics} ) {
    const [selectedOption, setSelectedOption] = useState(null)
    const navigateTo = useNavigate()

    const options = generateSelectOptions(topics)

    function handleChange(option) {
        setSelectedOption(option)        
        navigateTo(option.path)
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