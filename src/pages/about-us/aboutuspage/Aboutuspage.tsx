import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
import {useTheme} from '@mui/material/styles';


const Aboutuspage = () => {
    const theme =useTheme();
    const { t }: { t: (key: string) => string } = useTranslation()
  return (
    <Box sx={{width:'100%', backgroundColor:theme.palette.primary.main, borderRadius:1}}>


<Box sx={{display:'flex', justifyContent:'center', alignItems:'center', marginY:10, padding:{xs:1,}}}>
    <Typography variant='h2' sx={{fontSize:{xs:'25px', sm:'64px'}}}>     {t('headline')}</Typography>
</Box>
</Box>
  )
}

export default Aboutuspage
