import { connect } from 'react-redux';
import {inputGifs, State} from "../reducers";
import App from "../App";
import {Dispatch} from "redux";

const mapStateToProps = (state: State) => ({
    theme: state.theme,
    loading:state.loading,
    gifs: state.gifs,
    offset: state.offset,
    query:state.query
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onLoad: () => {
        // @ts-ignore
        dispatch(inputGifs('cats'))
    }
})



export default connect(mapStateToProps, mapDispatchToProps)(App);