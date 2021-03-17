import { connect } from 'react-redux';
import {Dispatch} from "redux";
import {State, setOffset, searchGifs,setQuery} from "../reducers";
import DownloadMore from "../components/DownloadMore";


const mapStateToProps = (state: State) => ({
    offset:state.offset,
    query: state.query
});

const mapDispatchToProps = (dispatch: Dispatch) => ({

    onClick: (query:string,offset: number) => {
        // @ts-ignore
        dispatch(searchGifs(query,offset))
        //dispatch(setOffset(offset))
        //dispatch(setQuery(query))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(DownloadMore);

