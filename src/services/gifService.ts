const KEY = 'N7vFsylcQY7YWLEH8EU8lTWVwirtgKQY';



export const gifService = (query: string, offset:number) => {
    //console.log(offset)
    return fetch(`https://api.giphy.com/v1/gifs/search?api_key=${KEY}&q=${query}&limit=20&offset=${offset}`)
        .then((response) => response.json())
        .catch((err) => console.error(err));
};