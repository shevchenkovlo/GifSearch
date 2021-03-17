import React from 'react';
import useDebounce from "./useDebounce";

const KEY = 'N7vFsylcQY7YWLEH8EU8lTWVwirtgKQY';



const load = (query: string) => {
    return fetch(`https://api.giphy.com/v1/gifs/search?api_key=${KEY}&q=${query}`)
        .then((response) => response.json())
        .catch((err) => console.error(err));
};


const useGifSearch = (query: string) => {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const debouncedSearchTerm = useDebounce(query,1000);



    React.useEffect(() => {
        if (debouncedSearchTerm) {


            load(query).then((result) => {
                setLoading(false);
                setData(result.data);

                console.log(result.data)
            });
        }

    }, [debouncedSearchTerm]);





    return {
        data,
        loading,


    };
};
export default useGifSearch;