import React from 'react'
import { Headercomponent } from '../../header'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Footercomponent } from '../../footer'

const Layoutcomponent = () => {
  return (
    <>

<Headercomponent />
<Box sx={{width:'100%', display:'flex', justifyContent:'center'}}>

      <Box sx={{marginX:1, width:'1200px'}}>
        <Outlet/>

      </Box>
      </Box>

   {/*    <Footercomponent/> */}
 
    </>
  )
}

export default Layoutcomponent
