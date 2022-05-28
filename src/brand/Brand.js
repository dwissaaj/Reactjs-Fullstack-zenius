import { Container } from "@mui/system";
import ban3 from './ban3.jpg'
import './Brand.css'
const Brand = () => {
    return ( 
        <Container sx={{marginTop:1,marginBottom:1}}>
            <img src={ban3} alt="" className="imgBrand"/>
        </Container>
     );
}
 
export default Brand;