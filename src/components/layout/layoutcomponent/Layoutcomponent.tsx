import React from 'react'
import { Headercomponent } from '../../header'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Footercomponent } from '../../footer'

const Layoutcomponent = () => {
  return (
    <>

<Headercomponent />

      <Box>
        <Outlet/>

      </Box>

      <Footercomponent/>
 
    </>
  )
}

export default Layoutcomponent
