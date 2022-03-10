import React from 'react';

import InfoCard from '../elements/cards/StandardCard'
import flower1 from '../../resources/flower1.jpg';
import flower2 from '../../resources/flower2.jpg';
import flower3 from '../../resources/flower3.jpg';
import flower4 from '../../resources/flower4.jpg';
import flower5 from '../../resources/flower5.jpg';
import flower6 from '../../resources/flower6.jpg';

const Market = () => {
    return (
        <div className='page market'>
            {InfoCard(flower1, 'Purple', 'Flower info text, should cover multiple lines inside the display card.')}
            {InfoCard(flower2, 'White', 'Flower info text, should cover multiple lines inside the display card.')}
            {InfoCard(flower3, 'Red', 'Flower info text, should cover multiple lines inside the display card.')}
            {InfoCard(flower4, 'Yellow', 'Flower info text, should cover multiple lines inside the display card.')}
            {InfoCard(flower5, 'Pink', 'Flower info text, should cover multiple lines inside the display card.')}
            {InfoCard(flower6, 'Blue', 'Flower info text, should cover multiple lines inside the display card.')}
        </div>
    );
}
export default Market;