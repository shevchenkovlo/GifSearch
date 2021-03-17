import React from 'react';
import GifList from './components/GifList';
import SearchInput from './containers/SearchInputContainer'
import ThemeSwitcher from "./containers/ThemeSwitcherContainer";
import {Theme} from './reducers';
import DownloadMore from "./containers/DownloadMoreContainer";

interface Props {
    theme: Theme;
    loading: boolean;
    gifs: Array<any>;
    onLoad: () => void;
    query: string;
    offset:number

}

const App = (props: Props) => {

    const {onLoad} = props;

    React.useEffect( () => {
        onLoad();
    }, [onLoad]);


    return (
        <div className={`app--${props.theme}`}>
            <h1>Front education</h1>
            <ThemeSwitcher/>
            <SearchInput />
            {props.loading ? (
                <span>Loading</span>
            ) : (
                <GifList data={props.gifs} />
            ) }
            <DownloadMore />


        </div>
    );
};
export default App;