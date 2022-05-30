import { Container } from '@mui/system';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from "@mui/material";
import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import './FloatinBtn.css'
import TextField from '@mui/material/TextField';
const FloatinBtn = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickLogin = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [age,setAge] = useState('')


    const [open2, setOpen2] = React.useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email);
        console.log(name);
        console.log(age)
        setOpen2(true);       
    }
    const handleClose2 = (event) => {
        event.preventDefault();
        setOpen2(false);
    };
    return ( 
        <div className='divclass'>
            <Fab className='Fab' variant="extended" size="small" color="primary" onClick={handleClickLogin}>Ada Diskon</Fab>
            <Dialog maxWidth="lg" fullWidth open={open} onClose={handleClose}>
                            <DialogContentText>Dapatkan Penawaran Menarik Dari Kami</DialogContentText>
                            <DialogContent style={{height:'800px'}}>
                                <DialogContentText>Email Anda</DialogContentText>
                                <TextField
                                        autoFocus
                                        margin="dense"
                                        fullWidth
                                        className='textClass'
                                        required  
                                        id="outlined-required"
                                        label="Required"
                                        type="email"
                                        value={email} onChange={(event) => setEmail(event.target.value)}/>
                                <DialogContentText>Nama Anda</DialogContentText>
                                <TextField
                                        autoFocus
                                        fullWidth
                                        margin="dense"
                                        className='textClass'
                                        required
                                        id="outlined-required"
                                        label="Required"
                                        type="text"
                                        value={name} onChange={(event) => setName(event.target.value)}/>
                                <DialogContentText>Umur Anda</DialogContentText>
                                <TextField
                                        autoFocus
                                        fullWidth
                                        margin="dense"
                                        className='textClass'
                                        required
                                        id="outlined-required"
                                        label="Required"
                                        type="number"
                                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                        value={age} onChange={(event) => setAge(event.target.value)}/>
{/* 
<input type="email" value={email} onChange={(event) => setEmail(event.target.value)}/> */}
                            
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <div>
                                <Button onClick={handleSubmit} type="submit">Kirim</Button>
                                <Dialog open={open2} onClose={handleClose}>
                                    <DialogContentText>Terkirim ke {email}</DialogContentText>
                                    <Button onClick={handleClose2}>Keluar</Button>
                                </Dialog>
                            </div>
                            
                            </DialogActions>
                        </Dialog>
        </div>
     );
}
 
export default FloatinBtn;
