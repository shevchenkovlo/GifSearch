import SearchInput from "../components/SearchInput";
import {connect} from 'react-redux';
import {Dispatch} from "redux";
import {searchGifs,setQuery} from "../reducers";



const mapDispatchToProps = (dispatch: Dispatch) => ({
    onChange: (value:string) => {
        // @ts-ignore
        dispatch(searchGifs(value))
        //dispatch(setQuery(value));
    }
})


export default connect(undefined, mapDispatchToProps)(SearchInput)