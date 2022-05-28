import { Grid, Link } from "@mui/material"
import './FooterLinks.css'

const FooterLink = () => {
    const linktext = ['Hak Kekayaan Intelektual','Karir','Blog','Bridestory','Tokopedia Parents','Tokopedia Affiliate Program','Tokopedia B2B Digital']
    const linktext2 = ['Tagihan & Top Up','Tukar Tambah Handphone','Tokopedia COD']
    const linktext3 = ['Pusat Edukasi Seller','Mitra Toppers','Daftar Official Store']
    return ( 
        <Grid container sx={{marginTop:3,marginBottom:5}}>
            <Grid item md={4}>
                {linktext.map((link) => {
                    return <ul className="ulClass"><Link href="#" underline="none" sx={{color:'black'}}>{link}</Link></ul>
                })}
            </Grid>
            <Grid item md={4}>
                {linktext2.map((link) => {
                    return <ul className="ulClass"><Link href="#" underline="none" sx={{color:'black'}}>{link}</Link></ul>
                })}
            </Grid>
            <Grid item md={4}>
                {linktext3.map((link) => {
                    return <ul className="ulClass"><Link href="#" underline="none" sx={{color:'black'}}>{link}</Link></ul>
                })}
            </Grid>
        </Grid>
     );
}
 
export default FooterLink;