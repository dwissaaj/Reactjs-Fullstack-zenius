import { Button } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from 'react-router-dom';
import "swiper/css/pagination";
import './ButtonFam.css'
import { useState, useEffect } from "react";


const ButtonFam = () => {
    const [button,setButton] = useState([])
    const keyofbutton = Object.keys(button) 
    const detailedbutton = button.data 
    /**console.log(keyofbutton) 
    console.log("detailedata is an array " + Array.isArray(detailedbutton)) // CHECK IF THE CONST ARRAY OR NOT
    console.log(detailedbutton)  */
    useEffect(() => {
            fetch('http://localhost:1337/api/button-links/')
            .then((response) => response.json())
            .then((data) => setButton(data))
            /*.then(console.log("Data success")) */
            .catch((err) => { 
                console.log(err)
                
    
            })
            
        },[])

    const [user,setUser] = useState('Pengguna')
    return (
        <>
        <Container fluid style={{marginBottom:10,marginTop:5}}>
            <Button color="secondary" sx={{marginRight:3}} component={Link} to="/about" variant="contained">For {user}</Button>
            <Button color="warning" sx={{marginRight:3}} component={Link} to="/about" variant="contained">Special Discount</Button>
            <Button color="secondary" sx={{marginRight:3}} component={Link} to="/about" variant="contained">Aktivitasmu</Button>
            <Button color="error" sx={{marginRight:3}} component={Link} to="/about" variant="contained">Rice Cooker</Button>
            <Button color="primary" sx={{marginRight:3}} component={Link} to="/about" variant="contained">Kabel Hdmi</Button>
        </Container>
        </>
     );
}
 
export default ButtonFam;