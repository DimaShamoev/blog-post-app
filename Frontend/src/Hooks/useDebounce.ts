import {useState, useEffect} from 'react'

const useDebounce = <T>(value: T, delay: number) => {

    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        const handleDebounce = setTimeout(() => {
            setDebounceValue(value)
        }, delay)

        return () => clearTimeout(handleDebounce)

    }, [value, delay])

    return debounceValue;
}

export default useDebounce