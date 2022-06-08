import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Box, Container } from '@mui/system';
import c1 from '../assets/c1.jpg'
import Grid from '@mui/material/Grid';
import c2 from '../assets/c2.jpg'
import './Cartcard.css'
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useState, useEffect } from 'react';
import Fab from '@mui/material/Fab';
import { BsFillCartFill } from "react-icons/bs";

const CartCard = () => {
    
    const [card,setCard] = useState([])
    /**const keyofcard = Object.keys(card) //CHECK KEYS IN DETAIL STATE  
    const carddata = card.data //USING KEY FOR ACCESS THE ARRAY OF DETAIL
    console.log(keyofcard) //LOG THE KEYS
    console.log("card is an array " + Array.isArray(carddata)) // CHECK IF THE CONST ARRAY OR NOT
    console.log(carddata) */ // SHOW THE ARRAY


    useEffect(() => {
        fetch('http://localhost:1337/api/products')
        /**{
            headers: {
                Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjU0NTA5MDE1LCJleHAiOjE2NTcxMDEwMTV9.HOGhkG--nRYbPQKmOsNo75VAOKQydu1kw8o8MncdhdE',
            },
        }) */
        .then((response) => response.json())
        .then((data) => setCard(data))
        /**.then(console.log("Data success")) */
        .catch((err) => { 
            console.log(err)
            

        })
        
    },[]) 

    const [account,setAccount] = useState([])
    const keysofAccount = Object.keys(account) //CHECK KEYS IN DETAIL STATE  
    const accountdata = account.data //USING KEY FOR ACCESS THE ARRAY OF DETAIL
    console.log(keysofAccount) //LOG THE KEYS
    console.log("account is an array " + Array.isArray(accountdata)) // CHECK IF THE CONST ARRAY OR NOT
    console.log(accountdata) // SHOW THE ARRAY

    
    useEffect(() => {
        fetch('http://localhost:1337/api/accounts/',{
            headers: {
                Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjU0NTA5MDE1LCJleHAiOjE2NTcxMDEwMTV9.HOGhkG--nRYbPQKmOsNo75VAOKQydu1kw8o8MncdhdE',
            },
        })
        .then((response) => response.json())
        .then((data) => setAccount(data))
        /**.then(console.log("Data success")) */
        .catch((err) => { 
            console.log(err)
            

        })
        
    },[])



    
    const [cart,setCart] = useState(0)
    const increment = () => {
          setCart(cart + 1)
    }

    const [product,setProducts] = useState([
        {id:1,title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',price:'Rp.90000',city:'Surabaya'},
        {id:2,title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',price:'Rp.80000',city:'Surabaya'},
        {id:3,title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',price:'Rp.70000',city:'Surabaya'},
        {id:4,title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',price:'Rp.60000',city:'Surabaya'},
        {id:5,title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',price:'Rp.90000',city:'Surabaya'},

    ])
    //<p>{JSON.stringify(card)}</p>
    return ( 
        <>
        <p>{JSON.stringify(account)}</p>
        <Container className='container-con'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                <Box sx={{display:'flex',padding:3}}>
                    <Grid>
                        <Card sx={{width:120,marginRight:5}} >
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            heigh="40"
                            image={c1}
                            />
                            <CardContent sx={{ p: "5px", mb:"2px" }}>
                                <div className='divCart'>
                                    {
                                        
                                    }
                                    <p className='cartTitle'>{product[1].title}</p>
                                    <p className='cartPrice'>{product[2].price}</p>
                                    <p className='cartCity'>{product[3].city}</p>
                                </div>
                            </CardContent>
                            <CardActions style={{justifyContent: 'center'}}>
                                <Button variant="contained" size="small" onClick={increment}>Buy Now</Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid>
                    <Card sx={{width:120,marginRight:5}} >
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            heigh="40"
                            image={c1}
                            />
                            <CardContent sx={{ p: "5px", mb:"2px" }}>
                                <div className='divCart'>
                                    <p className='cartTitle'>{product[0].title}</p>
                                    <p className='cartPrice'>{product[0].price}</p>
                                    <p className='cartCity'>{product[0].city}</p>
                                </div>
                            </CardContent>
                            <CardActions style={{justifyContent: 'center'}}>
                                <Button variant="contained" size="small" onClick={increment}>Buy Now</Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid>
                        <Card sx={{width:120,marginRight:5}} >
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            heigh="40"
                            image={c1}
                            />
                            <CardContent sx={{ p: "5px", mb:"2px" }}>
                                <div className='divCart'>
                                    <p className='cartTitle'>{product[0].title}</p>
                                    <p className='cartPrice'>{product[0].price}</p>
                                    <p className='cartCity'>{product[0].city}</p>
                                </div>
                            </CardContent>
                            <CardActions style={{justifyContent: 'center'}}>
                                <Button variant="contained" size="small" onClick={increment}>Buy Now</Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid>
                        <Card sx={{width:120,marginRight:5}} >
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            heigh="40"
                            image={c1}
                            />
                            <CardContent sx={{ p: "5px", mb:"2px" }}>
                                <div className='divCart'>
                                    <p className='cartTitle'>{product[0].title}</p>
                                    <p className='cartPrice'>{product[0].price}</p>
                                    <p className='cartCity'>{product[0].city}</p>
                                </div>
                            </CardContent>
                            <CardActions style={{justifyContent: 'center'}}>
                                <Button variant="contained" size="small" onClick={increment}>Buy Now</Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid>
                        <Card sx={{width:120,marginRight:5}} >
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            heigh="40"
                            image={c1}
                            />
                            <CardContent sx={{ p: "5px", mb:"2px" }}>
                                <div className='divCart'>
                                    <p className='cartTitle'>{product[0].title}</p>
                                    <p className='cartPrice'>{product[0].price}</p>
                                    <p className='cartCity'>{product[0].city}</p>
                                </div>
                            </CardContent>
                            <CardActions style={{justifyContent: 'center'}}>
                                <Button variant="contained" size="small" onClick={increment}>Buy Now</Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid>
                        <Card sx={{width:120,marginRight:5}} >
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            heigh="40"
                            image={c1}
                            />
                            <CardContent sx={{ p: "5px", mb:"2px" }}>
                                <div className='divCart'>
                                    <p className='cartTitle'>{product[0].title}</p>
                                    <p className='cartPrice'>{product[0].price}</p>
                                    <p className='cartCity'>{product[0].city}</p>
                                </div>
                            </CardContent>
                            <CardActions style={{justifyContent: 'center'}}>
                                <Button variant="contained" size="small" onClick={increment}>Buy Now</Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                </Box>
                </SwiperSlide>
                <SwiperSlide>
                <Box sx={{display:'flex',padding:3}}>
                <Grid>
                        <Card sx={{width:120,marginRight:5}} >
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            heigh="40"
                            image={c2}
                            />
                            <CardContent sx={{ p: "5px", mb:"2px" }}>
                                <div className='divCart'>
                                    <p className='cartTitle'>{product[0].title}</p>
                                    <p className='cartPrice'>{product[0].price}</p>
                                    <p className='cartCity'>{product[0].city}</p>
                                </div>
                            </CardContent>
                            <CardActions style={{justifyContent: 'center'}}>
                                <Button variant="contained" size="small" onClick={increment}>Buy Now</Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid>
                        <Card sx={{width:120,marginRight:5}} >
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            heigh="40"
                            image={c2}
                            />
                            <CardContent sx={{ p: "5px", mb:"2px" }}>
                                <div className='divCart'>
                                    <p className='cartTitle'>{product[0].title}</p>
                                    <p className='cartPrice'>{product[0].price}</p>
                                    <p className='cartCity'>{product[0].city}</p>
                                </div>
                            </CardContent>
                            <CardActions style={{justifyContent: 'center'}}>
                                <Button variant="contained" size="small" onClick={increment}>Buy Now</Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid>
                        <Card sx={{width:120,marginRight:5}} >
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            heigh="40"
                            image={c2}
                            />
                            <CardContent sx={{ p: "5px", mb:"2px" }}>
                                <div className='divCart'>
                                    <p className='cartTitle'>{product[0].title}</p>
                                    <p className='cartPrice'>{product[0].price}</p>
                                    <p className='cartCity'>{product[0].city}</p>
                                </div>
                            </CardContent>
                            <CardActions style={{justifyContent: 'center'}}>
                                <Button variant="contained" size="small" onClick={increment}>Buy Now</Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid>
                        <Card sx={{width:120,marginRight:5}} >
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            heigh="40"
                            image={c2}
                            />
                            <CardContent sx={{ p: "5px", mb:"2px" }}>
                                <div className='divCart'>
                                    <p className='cartTitle'>{product[0].title}</p>
                                    <p className='cartPrice'>{product[0].price}</p>
                                    <p className='cartCity'>{product[0].city}</p>
                                </div>
                            </CardContent>
                            <CardActions style={{justifyContent: 'center'}}>
                                <Button variant="contained" size="small" onClick={increment}>Buy Now</Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid>
                        <Card sx={{width:120,marginRight:5}} >
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            heigh="40"
                            image={c2}
                            />
                            <CardContent sx={{ p: "5px", mb:"2px" }}>
                                <div className='divCart'>
                                    <p className='cartPrice'>{product[0].price}</p>
                                    <p className='cartTitle'>{product[0].title}</p>
                                    <p className='cartCity'>{product[0].city}</p>
                                </div>
                            </CardContent>
                            <CardActions style={{justifyContent: 'center'}}>
                                <Button variant="contained" size="small" onClick={increment}>Buy Now</Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid>
                        <Card sx={{width:120,marginRight:5}} >
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            heigh="40"
                            image={c2}
                            />
                            <CardContent sx={{ p: "5px", mb:"2px" }}>
                                <div className='divCart'>
                                    <p className='cartTitle'>{product[0].title}</p>
                                    <p className='cartPrice'>{product[0].price}</p>
                                    <p className='cartCity'>{product[0].city}</p>
                                </div>
                            </CardContent>
                            <CardActions style={{justifyContent: 'center'}}>
                                <Button variant="contained" size="small" onClick={increment}>Buy Now</Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                
                </Box>
                </SwiperSlide>
            </Swiper>
            
        </Container>
        <div>
        <Fab className='CartClass' variant="outlined" size="small">
            <BsFillCartFill/>
            <p className='pClass'>{cart}</p>
        </Fab>
        </div>
        </>
        
     );
}
 
export default CartCard;
