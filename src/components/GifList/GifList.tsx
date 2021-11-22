import React from 'react';
import GifImage from '../GifImage';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import './GifList.scss'

interface Props {
    data: Record<string, any>[];
}

const GifList = (props: Props) => (
    <ul className="ulRoot">
        <GridList cellHeight={160} className="gridList" cols={6}>
        {props.data.map((item) => (
            <GridListTile key={item.id}>
                <GifImage url={item.images.fixed_height.url} staticUrl={item.images.fixed_height_still.url}  />
            </GridListTile>
        ))}
        </GridList>
    </ul>
);
export default GifList;

