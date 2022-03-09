import { Card, CardMedia } from '@mui/material';
import React from 'react';

function StandardImageList(itemData) {
    return (
        <div>
        {itemData.map((item) => (
            <Card key={item.img} sx={{ borderRadius: 0 }} className='image-card'>
                <CardMedia
                    component="img"
                    height="300"
                    image={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.title}
                />
            </Card>
        ))}
        </div>
    );
}
export default StandardImageList;