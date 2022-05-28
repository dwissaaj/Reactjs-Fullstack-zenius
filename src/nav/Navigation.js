import { Link } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import './Navigation.css';

const TextNavLeft = (props) =>{
    return <Link className="nav-left nav-links" to={props.link}>{props.text}</Link>
}

const TextNavRight = (props) =>{
    return <Link className="nav-links" to={props.link}>{props.text}</Link>
}

const Navigation = () => {
    return ( 
        <Navbar className="container-nav p-0">
            <Container fluid>
                <div className="nav-right">
                    <TextNavLeft text="Download Tokopedia App" link="/"/>
                    <TextNavRight text="Tentang Tokopedia" link="/"/>
                    <TextNavRight text="Mitra Tokopedia" link="/"/>
                    <TextNavRight text="Pusat Edukasi Seller" link="/"/>
                    <TextNavRight text="Promo" link="/"/>
                    <TextNavRight text="Tokopedia Care" link="/"/>
                </div>
            </Container>
        </Navbar>
     );
}
 
export default Navigation;