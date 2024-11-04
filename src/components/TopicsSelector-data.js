export function generateSelectOptions(topics) {        
        
    function capitaliseFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }      

    return topics.map((topic) => ({
        value: topic.slug,
        label: capitaliseFirstLetter(topic.slug),
        path: `/topics/${topic.slug}`
    }))
}
    
export const styles = {
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
    }