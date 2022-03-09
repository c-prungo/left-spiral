import React from 'react';

import InfoCard from '../elements/cards/StandardCard'
import flower1 from '../../resources/flower1.jpg';
// import flower2 from '../../resources/flower2.jpg';
import flower3 from '../../resources/flower3.jpg';
import flower4 from '../../resources/flower4.jpg';

const Market = () => {
    return (
        <div className='page'>
            <h3>Market</h3>
            <div className='info-card'>
                {InfoCard(flower1, 'Purple', 'Flower info text, should cover multiple lines inside the display card.')}
            </div>
            <div className='info-card'>
                {InfoCard(flower3, 'Red and White', 'Flower info text, should cover multiple lines inside the display card.')}
            </div>
            <div className='info-card'>
                {InfoCard(flower4, 'Yellow', 'Flower info text, should cover multiple lines inside the display card.')}
            </div>
        </div>
    );
}
export default Market;