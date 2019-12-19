import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = () => {
    const [isDarkValue, setIsDarkValue] = useLocalStorage('isDarkEnabled');
    
    useEffect( () => {
        if(isDarkValue) {
            document.querySelector('body').classList.add('dark-mode');
        } else {
            document.querySelector('body').classList.remove('dark-mode');
        }
    },[isDarkValue]);

    return [isDarkValue, setIsDarkValue];

}