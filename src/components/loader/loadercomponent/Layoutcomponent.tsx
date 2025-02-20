import { Box, LinearProgress, Typography } from '@mui/material'
import React from 'react'
import { logo } from '../../../assets'
import { green } from '@mui/material/colors'

const Loadercomponent = () => {
  return (
    <Box sx={{height:'100vh', width:'100vw', display:'flex', justifyContent:'center',alignItems:'center'}}>

   
    <Box
    sx={{
      width: '200px',
      height: '110px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: green[900],
      borderRadius: 1
    }}
  >
    <img alt='loader' src={logo} width={60} />

    <Typography sx={{ color: 'white' }}>MfugajiSmart</Typography>
    <LinearProgress
      color='primary'
      sx={{ width: '80%', marginTop: '5px', borderRadius: '100px' }}
    />
  </Box>
  </Box>
  )
}

export default Loadercomponent
