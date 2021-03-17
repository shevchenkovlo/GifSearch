import React from 'react';




interface Props {
    url: string;
    staticUrl: string;

}


const GifImage = (props: Props) => {
        const [isShown, setIsShown] = React.useState(false);


        return (
            <div className="image-container" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                {isShown && (
                    <img className="image" alt="Gif" src={props.url}/>
                )}
                {!isShown && (
                    <img className="image" alt="Gif" src={props.staticUrl}/>
                )}

            </div>
        )
    }
;
export default GifImage;