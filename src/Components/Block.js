import '../Styles/Block.css';
import React from 'react';

const Block = (props) => {

    return (
        // ignore this data-testid, it's purely for testing :)
        <div data-testid='main-component'>
            <div className="post" style={{background: props.color}}></div>
            <div className="caption">{props.color}</div>
        </div>
    );
}

export default Block;