import React from 'react'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import { Box, Button, Container, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'

function App () {
  const { t }: { t: (key: string) => string } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          gap: 1,
          flexDirection: 'column'
        }}
      >
        <Box>
          {' '}
          <Typography
            variant='h1'
            sx={{ fontSize: '32px', fontWeight: 'bold' }}
          >
            {' '}
            {t('greeting')}{' '}
          </Typography>
        </Box>

        <Box sx={{backgroundColor:blue[50], padding:2, borderRadius:'5px'}}>
          <Typography variant='h3' sx={{ fontSize: '24px' }}>
            {' '}
            {t('herocontent')}{' '}
          </Typography>
        </Box>

        <Box>
          <Button
            variant='contained'
            sx={{ marginX: 1 }}
            onClick={() => changeLanguage('sw')}
          >
            Swahili
          </Button>
          <Button
            variant='contained'
            sx={{ marginX: 1 }}
            onClick={() => changeLanguage('en')}
          >
            English
          </Button>
        </Box>
      </Container>
    </div>
  )
}

export default App
