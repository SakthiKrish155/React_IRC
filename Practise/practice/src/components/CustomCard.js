import { Card, Button, CardActions, CardMedia, CardContent, Typography } from "@mui/material"
import Tree from '../assets/images/snow-covered-trees-in-winter-landscape-nikitje.jpg'
const CustomCard = () => {
    return (
        <div>
            <Card sx={{ width: 345 }}>
                <CardMedia
                    sx={{ height: 340 }}
                    title="tree"
                    image={Tree} />
                <CardContent>
                    <Typography gutterBottom variant="h2" component="div">
                        Nature
                    </Typography>
                    <Typography variant="body2" color="text.secodary">
                        naoskkflprigmsmr4sorgn skrjgnoinsdfg kjsrngo sojrns skjnoso ikoijoisori 
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    )
}
export default CustomCard