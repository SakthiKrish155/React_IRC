import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Home = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Item>
                        <Card sx={{ maxWidth: 345}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="400"
                                    image="https://thenichollsworth.com/wp-content/uploads/2020/11/C0441055-AEE4-4C0D-8F43-A708DDEB6C3B-721x900.jpeg"
                                    alt="gryffindor"/>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Griffindor
                                    </Typography>
                                    {/* <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography> */}
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                    <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="400"
                                    image="https://www.hp-lexicon.org/wp-content/uploads/2015/08/shield_rav-200x0-c-default.jpg?ezimgfmt=ngcb22/notWebP"
                                    alt="winter"/>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Ravenclaw
                                    </Typography>
                                    {/* <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography> */}
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                    <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="400"
                                    image="https://cdn.shopify.com/s/files/1/1541/8579/files/Hufflepuff-harry_potter_large.JPG?v=1491538917"
                                    alt="Hufflepuff"/>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Hufflepuff
                                    </Typography>
                                    {/* <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography> */}
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                    <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="400"
                                    image="https://miro.medium.com/v2/resize:fit:500/0*m0pYj25tg4A2mAfU.png"
                                    alt="Slytherin"/>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Slytherin
                                    </Typography>
                                    {/* <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography> */}
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
export default Home;