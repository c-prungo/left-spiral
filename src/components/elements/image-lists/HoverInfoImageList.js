import React from 'react';

import ImageCard2 from '../cards/ImageCard';

function StandardImageList(itemData) {
    return (
        <div>
        {itemData.map((item) => (
            <div key={item.img}>
                {ImageCard2(item.img, item.title, 'sample text')}
            </div>
        ))}
        </div>
    );
}
export default StandardImageList;