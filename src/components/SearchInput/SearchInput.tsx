import React from "react";
import TextField from '@material-ui/core/TextField';
import './SearchInput.scss'

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
        <form className="formSearch">
            <TextField id="standard-basic" className="inputSearch" label="Какие гифки хотите найти?" ref={inputRef} type="search" onChange={handleChange}/>
        </form>
    )
}


export default SearchInput;