import { Container } from "@mui/system";
import { useState } from "react";
import ban3 from './ban3.jpg'
import './Brand.css'


const Brand = () => {
    const [ban,setBanner] = useState(ban3)
    return ( 
        <Container sx={{marginTop:1,marginBottom:1}}>
            <img src={ban} alt="" className="imgBrand"/>
        </Container>
     );
}
 
export default Brand;