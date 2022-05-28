import { Col, Container, Form, Row } from "react-bootstrap";
import './Search.css'
import { FiSearch } from "react-icons/fi";
import { RiMessage2Fill } from "react-icons/ri";
import { BsBellFill } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";



const StyleLogin = {
    fontFamily : 'Segoe UI',
    fontSize: '15px',
    color : 'white',
    width: '65px',
    height: '25px',
    borderRadius : '10px',
    justifyContent : 'center',
    backgroundColor: '#04bd26',
    border : 'none',
    textAligment : 'center',
    marginRight : '8px'
}

const StyleSign = {
    fontFamily : 'Segoe UI',
    fontSize: '15px',
    color : '#3a3b3a',
    width: '65px',
    height: '25px',
    borderRadius : '10px',
    justifyContent : 'center',
    backgroundColor: '#daebdd',
    border : 'none',
    textAligment : 'center',
    marginRight : '8px'
}
const TextHeader = (props) =>{
    return <p className="textHeader">{props.text}</p>
}

const Search = () => {
    return ( 
        <Container fluid className="mt-3 " >
            <Row className="justify-content-between d-flex border-bottom">
                <Col>
                    <div className="divLogo">
                        <TextHeader text="Tokopedia"/>
                        <TextHeader text="Kategori"/>
                    </div>
                </Col>
                <Col>
                    <div className="divSearch">
                        <FiSearch className="icon-nav"/>
                        <Form.Control type="text" className="formSearch"></Form.Control>
                    </div>
                </Col>
                <Col>
                    <div className="divIcon">
                        <div className="divIconCart">
                            <BsFillCartFill/>
                            <p className="divIconCartNumber">0</p>
                        </div>
                        <BsBellFill/>
                        <RiMessage2Fill/>
                    </div>
                </Col>
                <Col>
                    <div>
                        <button style={StyleLogin}>Login</button>
                        <button style={StyleSign}>Daftar</button>
                    </div>
                </Col>

            </Row>
        </Container>
     );
}
 
export default Search;