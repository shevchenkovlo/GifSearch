import React from 'react';





interface Props {
    query: string
    offset: number;
    onClick: (query:string,offset:number) => void
}

const DownloadMore = (props: Props) => {


    return (
        <button type="button" onClick={() => {

                props.onClick(props.query,20)

        }}>
            Загрузить еще
        </button>
    )


};

export default DownloadMore;



