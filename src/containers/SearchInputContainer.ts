import SearchInput from "../components/SearchInput/SearchInput";
import {connect} from 'react-redux';
import {Dispatch} from "redux";
import {searchGifs,setQuery,inputGifs} from "../reducers";



const mapDispatchToProps = (dispatch: Dispatch) => ({
    onChange: (value:string) => {
        // @ts-ignore
        dispatch(inputGifs(value))
        //dispatch(setQuery(value));
    }
})


export default connect(undefined, mapDispatchToProps)(SearchInput)