import { Box, Button } from '@mui/material';
import React from 'react'
import { useTranslation } from 'react-i18next';

const Languageswitcher = () => {
    const {i18n} = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
    }
  return (
    <div>
        <Box sx={{margin:5, display:'flex', gap:5}}>
        <Button onClick={() => changeLanguage('en')} variant='contained'> English </Button>
        <Button onClick={() => changeLanguage('sw')} variant='contained'> Swahili </Button>
        </Box>



    </div>
  )
}

export default Languageswitcher
