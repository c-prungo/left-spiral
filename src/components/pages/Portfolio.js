import React from 'react';

import HoverInfoImageList from '../elements/image-lists/HoverInfoImageList'
import flower1 from '../../resources/flower1.jpg'
import flower2 from '../../resources/flower2.jpg'
import flower3 from '../../resources/flower3.jpg'
import flower4 from '../../resources/flower4.jpg'
import flower5 from '../../resources/flower5.jpg'
import flower6 from '../../resources/flower6.jpg'
import logo from '../../resources/logo.png'
import storefront1 from '../../resources/storefront1.jpg'

const Portfolio = () => {

    const itemData = [
        {
            img: logo,
            title: 'Logo',
        },
        {
            img: flower1,
            title: 'Flower 1',
        },
        {
            img: flower2,
            title: 'Flower 2',
        },
        {
            img: flower3,
            title: 'Flower 3',
        },
        {
            img: flower4,
            title: 'Flower 4',
        },
        {
            img: flower5,
            title: 'Flower 5',
        },
        {
            img: flower6,
            title: 'Flower 6',
        },
        {
            img: storefront1,
            title: 'Store-Front 1',
        }
      ];

    return (
        <div className='page'>
            <h3>Portfolio</h3>
            <div>
                {HoverInfoImageList(itemData)}
            </div>
            
        </div>
    );
}
export default Portfolio;