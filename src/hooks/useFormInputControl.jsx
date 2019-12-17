import {useState} from 'react';

export const useFormInputControl = (initialValue) => {
    const [input, setInputValue] = useState(initialValue);

        const handleChanges = updatedValue => {
            setInputValue(updatedValue);
        };
        
    return [input,setInputValue, handleChanges];
}
