import React from 'react'
import { Headercomponent } from '../../header'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Footercomponent } from '../../footer'

const Layoutcomponent = () => {
  return (
    <Box sx={{minHeight:'100vh', display:'flex', flexDirection:'column', width:'100%'}}>

<Headercomponent />
<Box sx={{flexGrow:1, width:'100%', display:'flex', justifyContent:'center'}}>
<Box sx={{width:'100%', display:'flex', justifyContent:'center'}}>


      <Box sx={{marginX:1, width:'1300px'}}>
        <Outlet/>

      </Box>

      </Box>
      </Box>

      <Footercomponent/>
 
    </Box>
  )
}

export default Layoutcomponent
