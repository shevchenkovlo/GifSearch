import React from 'react';
import Button from '@material-ui/core/Button';
import './DownloadMore.scss';

interface Props {
    query: string
    offset: number;
    onClick: (query:string,offset:number) => void
}

const DownloadMore = (props: Props) => {

    return (

        <Button className="buttonMore" variant="contained" color="primary" type="button" onClick={() => {
                props.onClick(props.query,20)
        }}>
            Загрузить еще
        </Button>

    )
};

export default DownloadMore;



