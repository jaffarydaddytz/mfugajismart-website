import { Container, LinearProgress } from '@mui/material'
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useTheme} from '@mui/material/styles';
import { logo } from '../../../assets';
import Flag from 'react-world-flags'
import { Link } from 'react-router-dom';
import { NAVIGATE_TO_HOMEPAGE } from '../../../routes/types';

const Headercomponent = () => {
  const code = 'TZ';
   const theme =useTheme();
  return (
    <div>
      <Box sx={{width:'100%'}}>
 


      <AppBar  sx={{background:theme.palette.secondary.main}}>
 
        <Toolbar>
       
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
        
          >
            <img alt={logo} src={logo} width={40}/>
     
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 , color:'white'}}>
            MfugajiSmart
          </Typography>
<Box sx={{display:{xs:'flex', sm:'none', color:'white'}}}>
<MenuIcon />
</Box>
         

          <Box sx={{gap:3, display:{xs:'none',md:'flex'}}}>

          <Link to={NAVIGATE_TO_HOMEPAGE} style={{color:'white', textDecoration:'none'}}>Home</Link>
      
          <a href='#' style={{color:'white', textDecoration:'none'}}>About</a>
          <a href='#' style={{color:'white', textDecoration:'none'}}>Services</a>
          <a href='#' style={{color:'white', textDecoration:'none'}}>Marketplace</a>
          <a href='#' style={{color:'white', textDecoration:'none'}}>Contact</a>
          <a href='#' style={{color:'white', textDecoration:'none'}}>FAQ</a>
          <a href='#' style={{color:'white', textDecoration:'none'}}>Blogs</a>
          <a href='#' style={{color:'white', textDecoration:'none'}}><Flag code={ code }  style={{     width: '25px', 
      height: '25px', 
      borderRadius: '50%', 
      objectFit: 'cover' }}/> </a>
          </Box>
         
        </Toolbar>
      </AppBar>
      </Box>
    </div>
  )
}

export default Headercomponent
