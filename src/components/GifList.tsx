import React from 'react';
import GifImage from './GifImage';
interface Props {
    data: Record<string, any>[];
}

const GifList = (props: Props) => (
    <ul className="containerGifs">
        {props.data.map((item) => (
            <li key={item.id}>
                <GifImage url={item.images.fixed_height.url} staticUrl={item.images.fixed_height_still.url}  />
            </li>
        ))}
    </ul>
);
export default GifList;

