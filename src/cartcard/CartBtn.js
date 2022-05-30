import { useState } from 'react';
import { Button } from '@mui/material';
const CartBtn = () => {
    const [cart,setCart] = useState(0)
    const increment = () => {
        setCart(cart + 1)
    }
    return ( 
        <div>
            <Button variant="contained" size="small" onClick={increment}>Tambahkan</Button>
            <p>{cart}</p>
        </div>
     );
}
 
export default CartBtn;