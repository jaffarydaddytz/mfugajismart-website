import React from 'react'
import { useTranslation } from 'react-i18next'

import { Box, Button, Card, Container, Typography } from '@mui/material'
import { blue, green } from '@mui/material/colors'
import { useTheme } from '@mui/material/styles'

import { Headercomponent } from './components'
import { Homepagecomponent } from './pages'
import AppRoutes from './routes/AppRoutes'

function App () {
  const { t }: { t: (key: string) => string } = useTranslation()


  return (
    <Box>
      <AppRoutes />
    </Box>
  )
}

export default App
