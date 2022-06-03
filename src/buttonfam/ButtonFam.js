import { Button } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from 'react-router-dom';
import "swiper/css/pagination";
import './ButtonFam.css'
import { useState } from "react";


const ButtonFam = () => {

    const [user,setUser] = useState('Pengguna')
    return ( 
        <Container fluid style={{marginBottom:10,marginTop:5}}>
            <Button color="secondary" sx={{marginRight:3}} component={Link} to="/about" variant="contained">For {user}</Button>
            <Button color="warning" sx={{marginRight:3}} component={Link} to="/about" variant="contained">Special Discount</Button>
            <Button color="secondary" sx={{marginRight:3}} component={Link} to="/about" variant="contained">Aktivitasmu</Button>
            <Button color="error" sx={{marginRight:3}} component={Link} to="/about" variant="contained">Rice Cooker</Button>
            <Button color="primary" sx={{marginRight:3}} component={Link} to="/about" variant="contained">Kabel Hdmi</Button>
        </Container>
     );
}
 
export default ButtonFam;