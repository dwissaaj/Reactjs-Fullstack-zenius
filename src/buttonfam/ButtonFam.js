import { Button } from "@mui/material";
import { Container } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
import "swiper/css/pagination";
import './ButtonFam.css'


const ButtonFam = () => {
    return ( 
        <Container fluid style={{marginBottom:10,marginTop:5}}>
            <Button color="secondary" sx={{marginRight:3}} component={Link} to="/about" variant="contained">For Dwi</Button>
            <Button color="warning" sx={{marginRight:3}} component={Link} to="/about" variant="contained">Special Discount</Button>
            <Button color="secondary" sx={{marginRight:3}} component={Link} to="/about" variant="contained">Aktivitasmu</Button>
            <Button color="error" sx={{marginRight:3}} component={Link} to="/about" variant="contained">Rice Cooker</Button>
            <Button color="primary" sx={{marginRight:3}} component={Link} to="/about" variant="contained">Kabel Hdmi</Button>
        </Container>
     );
}
 
export default ButtonFam;