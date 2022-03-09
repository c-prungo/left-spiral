import React from 'react';

import ImageCard from '../cards/ImageCard';

function StandardImageList(itemData) {
    return (
        <div>
        {itemData.map((item) => (
            <div key={item.img}>
                {ImageCard(item.img, item.title, 'sample text')}
            </div>
        ))}
        </div>
    );
}
export default StandardImageList;