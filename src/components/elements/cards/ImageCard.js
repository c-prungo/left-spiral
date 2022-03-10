import { React, useState } from 'react';
import { Card, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/material';

function ImageCard(image, title, subtitle) {
    const [hover, setHover] = useState(false);

    return (
        <Card
            sx={{
                width: 300,
                borderRadius: 0,
                float: 'left',
                margin: 1
            }}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Box sx={{ position: 'relative' }}>
                <CardMedia
                    component="img"
                    height="300"
                    image={image}
                />
                { hover ? 
                    <Box sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        bgcolor: 'rgba(0, 0, 0, 0.54)',
                        color: 'white',
                        padding: '10px',
                        // paddingTop: '10%',
                        borderRadius: '0px'
                    }}>
                        <Typography variant="h5">{title}</Typography>
                        <Typography variant="body2">{subtitle}</Typography>
                    </Box>
                    : null }
            </Box>
        </Card>
    );
}
export default ImageCard;