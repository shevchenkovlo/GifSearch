import React from "react";

interface Props{
    onChange: (value:string) => void;
}

const SearchInput = (props:Props) => {
    const {onChange} = props;

    const inputRef = React.useRef<HTMLInputElement>(null)
    
    React.useEffect(()=>{
        if (inputRef.current){
            inputRef.current.focus();
        }
    },[])

    const handleChange = React.useCallback((event) => {
        onChange(event.target.value)
    },[onChange])


    return (
        <form>
            <input ref={inputRef} type="search" onChange={handleChange}/>
        </form>
    )
}


export default SearchInput;