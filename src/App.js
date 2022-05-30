import './App.css';
import {Helmet} from "react-helmet";
import './nav/Navigation';
import Navigation from './nav/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './nav/Search';
import Banner from './banner/Banner';
import CartCard from './cartcard/Cartcard';
import Brand from './brand/Brand';
import ButtonFam from './buttonfam/ButtonFam';
import FooterLink from './footerlink/FooterLink';
import { Divider } from '@mui/material';
import Testing from './Testing';
import { Button } from "@mui/material";
import './Testing.css'
function App() {
  return (
    <div className="App">
        <Helmet>
        <title>Tokopedia</title>
      </Helmet>
      <Navigation/>
      <Search/>
      <Banner/>
      <CartCard/>
      <Brand/>
      <ButtonFam/>
      <Divider/>
      <FooterLink/>
      <Testing/>
    </div>
  );
}

export default App;
