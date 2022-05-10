import { Component } from "react";
import {Box, Typography} from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Grid } from "@mui/material";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import FooterSection from './FooterSection';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const contactItems = [
    {'Text' : '+54 12-34-56-78', 'Icon' : <ContactPhoneIcon />, 'Link': '#' },
    {'Text' : 'uade@edu.ar', 'Icon' : <ContactMailIcon/>, 'Link': '#' },
]

const aboutItems = [
    {'Text' : "Sobre Nosotros", 'Icon' : <ArrowCircleRightIcon /> , 'Link': '/about-us'},
    {'Text' : "Argentina", 'Icon' : <LanguageIcon/>, 'Link': '#'},
    
]

const socialItems = [
    {'Text' : "Facebook", 'Icon' : <FacebookIcon/>, 'Link': '#'},
    {'Text' : "Twitter", 'Icon' : <TwitterIcon/>, 'Link': '#'},
]

class ResponsiveFooter extends Component{
    render(){
        return (
            <>
                {/* Footer */}
                <Box sx={{ bgcolor: 'background.paper', p:6 }} component="footer">
                    <Grid
                        container 
                        justify="center"
                        alignItems="center"
                        direction="row"
                        textAlign='center'
                        spacing={{ xs: 2, md: 3 }} 
                        columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                        <FooterSection sectionTittle='Contacto' sectionItems={contactItems}></FooterSection>
                        <FooterSection sectionTittle='Social' sectionItems={socialItems}></FooterSection>
                        <FooterSection sectionTittle='Food Recipes' sectionItems={aboutItems}></FooterSection>
                        
                    </Grid>

                    <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
                        <Typography variant="h6">
                            Creada por Candela Esquivel y
                            Antonio Berti
                            <br></br>
                            Copyright &reg; {new Date().getFullYear()}
                        </Typography>
                    </Box>
                </Box>
                {/* End footer */}
            </>
        )
    }
}

export default ResponsiveFooter;