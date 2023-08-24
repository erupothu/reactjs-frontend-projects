
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, IconButtonProps, Typography, styled } from '@mui/material'
import womenCloths from '../../data/women-cloths.json'
import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./Product.css";
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../services/reducers/CheckoutReducer'

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const Product = (props: any) => {

    const [expanded, setExpanded] = React.useState(false);
    const dispatch = useDispatch();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const addToCardHandler = (data: any) => {
        dispatch(addItemToCart({
            id: props.data.id,
            name: props.data.name,
            price: data.price,
            offerPrice: data.offer_price,
            size: data.size,
            imageUrl: props.data.url
        }))
    }

    const productContainer = {
        margin: "0 5px"
    }
    return (
        <div className="product__container" style={productContainer}>
            <div className="product__cardRowWrap">
                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                                {props.sellerName}
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                            </IconButton>
                        }
                        title={props.data.name}
                        subheader={props.data.band} 
                    />
                    <CardMedia
                        component="img"
                        height="200"
                        image={props.data.url}
                        alt="Dress"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {
                                props.data.stock.map((item: any) => {
                                    return (
                                        <div>
                                            <table>
                                                <tr>
                                                    <td> size: {item.size}, price: {item.price} offer price: {item.offer_price} 
                                                    <Button onClick={() => addToCardHandler(item)} >Add</Button> </td>
                                                </tr>
                                            </table>
                                        </div>
                                    )
                                })
                            }
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                <table>
                                    <tr>
                                        <th>Category</th>
                                        <td>{props.data.category}</td>
                                    </tr>
                                    <tr>
                                        <th>type</th>
                                        <td>{props.data.type}</td>
                                    </tr>
                                    <tr>
                                        <th>band</th>
                                        <td>{props.data.band}</td>
                                    </tr>
                                    <tr>
                                        <th>style</th>
                                        <td>{props.data.style}</td>
                                    </tr>
                                    <tr>
                                        <th>material</th>
                                        <td>{props.data.material}</td>
                                    </tr>
                                    <tr>
                                        <th>pattern</th>
                                        <td>{props.data.pattern}</td>
                                    </tr>
                                </table>
                            </Typography>
                            
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
        </div>
    )
}

export default Product