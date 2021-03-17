import {Dispatch} from "redux";
import {gifService} from "../services/gifService";

export type Theme = 'dark' | 'light';

export interface  State {
    theme: Theme;
    loading: boolean;
    gifs: Array<any>;
    offset: number;
    query: string;
}

const initialState: State = {
    theme: 'light',
    loading: false,
    gifs: [],
    offset: 0,
    query: 'cats',
};

export const  switchTheme = (theme: Theme) => ({
    type: 'SWITCH_THEME',
    payload: theme,
});

export const setLoading = (loading: boolean) => ({
    type: 'SET_LOADING',
    payload: loading
});

export const setGifs = (gifs: Array<any>) => ({
    type: 'SET_GIFS',
    payload: gifs,
});

export const setOffset = (offset: number) => ({
    type: 'SET_LIMIT',
    payload: offset,
});

export const setQuery = (query: string) => ({
    type: 'SET_QUERY',
    payload: query,
});

export const searchGifs = () => (dispatch: Dispatch, getState:any) => {
    const {query,offset,gifs} = getState();
    let gifsConcat = gifs;

    dispatch(setLoading(true));
    gifService(query,offset).then((gifs) => {
        //console.log(gifs.data);
        //console.log(gifsConcat);


        dispatch(setGifs(gifsConcat.concat(gifs.data)));

        //console.log(gifs.data.concat(gifsConcat))
        dispatch(setOffset(gifs.pagination.offset + 20));
        dispatch(setQuery(query));

        console.log(query)

    })
        .catch((err) => {
            console.error(err);
        })
        .finally(() => {
            dispatch(setLoading(false));
        })
}

const reducer = (state = initialState, action: {type: string, payload: any}) => {
    switch (action.type){
        case 'SWITCH_THEME':
            return {...state, theme:action.payload};
        case 'SET_LOADING':
            return {...state, loading:action.payload};
        case 'SET_GIFS':
            return {...state, gifs:action.payload};
        case 'SET_LIMIT':
            return {...state, offset:action.payload};
        case 'SET_QUERY':
            return {...state, query:action.payload};
        default:
            return state
    }
}

export default reducer;