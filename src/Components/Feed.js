import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {

    const [blocks, setBlocks] = useState([]);

    const update = (boxColor) => {
        setBlocks(posts => [boxColor, ...posts]);
    };

    const posts = blocks.map((col) => <Block color={col} caption={col}></Block>);
        
    return (
        <div>
            <Menu onClick={update}></Menu>
            {posts}
        </div>
    );
}

export default Feed;