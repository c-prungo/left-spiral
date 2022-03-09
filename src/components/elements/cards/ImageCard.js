import {
    Card,
    CardContent,
    CardMedia,
    Typography
} from '@mui/material';
import { React, useState } from 'react';

function ImageCard(img, title, infotext) {
    const [hover, setHover] = useState(false);;

    return (
        <div className='image-card' onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <Card sx={{ borderRadius: 0, width: 300, maxHeight: 300, backgroundColor: 'inherit' }}>
                <CardMedia
                    component="img"
                    height={hover ? 199.59 : 300}
                    image={img}
                    alt="pink flower"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {infotext}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
export default ImageCard;