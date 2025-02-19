import React from 'react'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import { Box, Button, Card, Container, Typography } from '@mui/material'
import { blue , green} from '@mui/material/colors'
import {useTheme} from '@mui/material/styles';


function App () {

  const theme =useTheme();
  const { t }: { t: (key: string) => string } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (



   
    <div>

      <Box sx={{          background:theme.palette.primary.main}}>
      <Container 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          gap: 1,
          flexDirection: 'column',
          background:theme.palette.primary.main
        }}
      >
        <Box>
          {' '}
          <Typography
            variant='h1'
            sx={{ fontSize: '32px', fontWeight: 'bold'}}
          >
            {' '}
            {t('greeting')}{' '}
          </Typography>
        </Box>

        <Box sx={{backgroundColor:green[50], padding:2, borderRadius:'5px'}}>
          <Typography variant='h3' sx={{ fontSize: '24px' , }}>
            {' '}
            {t('herocontent')}{' '}
          </Typography>
        </Box>

        <Box>
          <Button
            variant='contained'
            sx={{ marginX: 1 , backgroundColor:theme.palette.success.dark}}
            onClick={() => changeLanguage('sw')}
          >
            Swahili
          </Button>
          <Button
            variant='contained'
          
            sx={{ marginX: 1, backgroundColor:theme.palette.success.main}}
            onClick={() => changeLanguage('en')}
          >
            English
          </Button>
        </Box>
<Box sx={{display:'flex', flexDirection:'row', gap:2}}>

<Box sx={{backgroundColor:theme.palette.success.main, width:'250px', height:'250px'}}>
          Gold
        </Box>



        <Box sx={{backgroundColor:theme.palette.secondary.main, width:'250px', height:'250px'}}>
         green
        </Box>


        <Box sx={{background:theme.palette.primary.main, width:'250px', height:'250px'}}>
          <Card sx={{width:'100%', height:'100%'}}>
          white
          </Card>
     
        </Box>





</Box>


      </Container>
      </Box>
    </div>
  )
}

export default App
