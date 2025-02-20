import { Box } from '@mui/material'
import React from 'react'
import {useTheme} from '@mui/material/styles';

const Footercomponent = () => {
      const theme =useTheme();
  return (
<Box sx={{height:'200px', backgroundColor:theme.palette.secondary.main, color:'white'}}>
this is footer
</Box>
  )
}

export default Footercomponent
