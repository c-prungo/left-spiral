import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ImgInfoCard(img, title, infotext) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
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
            <CardActions>
                <Button size="small">button1</Button>
                <Button size="small">button2</Button>
            </CardActions>
        </Card>
    );
}
export default ImgInfoCard;