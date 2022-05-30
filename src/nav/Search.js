import { Col, Container, Form, Row } from "react-bootstrap";
import './Search.css'
import { FiSearch } from "react-icons/fi";
import { RiMessage2Fill } from "react-icons/ri";
import { BsBellFill } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from "@mui/material";
import React, { useState } from 'react';
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

    const [open, setOpen] = React.useState(false);

    const handleClickLogin = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')

    const [open2, setOpen2] = React.useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email);
        console.log(name);
        setOpen2(true);       
    }
    const handleClose2 = () => {
        setOpen(false);
    };
    
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
                            
                        </div>
                        <BsBellFill/>
                        <RiMessage2Fill/>
                    </div>
                </Col>
                <Col>
                    <div>
                        <button style={StyleLogin} >Login</button>
                        <button style={StyleSign} onClick={handleClickLogin}>Daftar</button>
                            <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
                            <DialogTitle>Login Form</DialogTitle>
                            <DialogContent>
                                <form>
                                    <div>
                                        <label>Nama</label>
                                        <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
                                        <label>Email</label>
                                        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                                    </div>
                                </form>
                            
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <div>
                                <Button onClick={handleSubmit} type="submit">Daftar</Button>
                                <Dialog open={open2} onClose={handleClose} fullWidth maxWidth="xs">
                                    <DialogContentText>Terkirim ke {email}</DialogContentText>
                                    <Button onClick={handleClose2}>Keluar</Button>
                                </Dialog>
                            </div>
                            
                            </DialogActions>
                        </Dialog>
                    </div>
                </Col>

            </Row>
        </Container>
     );
}
 
export default Search;