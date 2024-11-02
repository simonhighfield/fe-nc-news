import { useState } from 'react';
import Select from 'react-select';
import './TopicsSelector.css'


const options = [
    {value: 'coding', label: 'Coding'},
    {value: 'football', label: 'Football'},
    {value: 'cooking', label: 'Cooking'}
]

export default function TopicsSelector() {

    const [selectedOption, setSelectedOption] = useState(null)

    function handleChange(option) {
        setSelectedOption(option)
    }

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

    return (
        <div className='topics-selector-container'>
            <Select
                classNamePrefix="mySelect"
                placeholder="Topic"
                defaultValue={selectedOption}
                onChange={handleChange}
                options={options}
                styles={styles}
            />
        </div>
    );
}