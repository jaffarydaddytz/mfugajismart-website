import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles'
import Grid from '@mui/material/Grid2'
import { useTranslation } from 'react-i18next'
import i18n from '../../../i18n'
import { logo } from '../../../assets'
import { Link, useLocation } from 'react-router-dom'
import { NAVIGATE_TO_ABOUTPAGE, NAVIGATE_TO_BLOGPAGE, NAVIGATE_TO_HOMEPAGE } from '../../../routes/types'

const Footercomponent = () => {
  const location = useLocation();
  const { t }: { t: (key: string) => string } = useTranslation()
  const theme = useTheme()
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.secondary.main,
        color: 'white',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        mt:5
      }}
    >
      <Box sx={{ width: '1300px',  }}>
        <Grid container sx={{ display:'flex', justifyContent:'space-between'  }}  spacing={0}>
          <Grid size={{ xs: 6, sm: 3 }} sx={{}}>
            <Box sx={{ margin: { xs: 1 } }}>
              <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                MfugajiSmart
              </Typography>
              <Typography
                variant='body2'
                sx={{ display: { xs: 'none', sm: 'flex' } }}
              >
                mfugajismart.taarifa@gmail.com
              </Typography>
              <Typography variant='body2' sx={{}}>
                +255 759 536 085
              </Typography>
              <Box sx={{display:'flex', width:'100%', justifyContent:{xs:'center', sm:'start'}, alignItems:'center', mt:1}}>

              <Link to={NAVIGATE_TO_HOMEPAGE} style={{ color: 'white', textDecoration: 'none'}}>
              <img alt='logo' width={50} src={logo} />
              </Link>
              </Box>

            
            </Box>
          </Grid>

          <Grid size={{ xs: 6, sm: 3 }}>
            <Box sx={{ margin: { xs: 1 } }}>
              <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                {t('quick-links')}
              </Typography>
              <Link to={NAVIGATE_TO_HOMEPAGE} style={{ color: 'white', textDecoration: 'none', borderBottom: location.pathname === NAVIGATE_TO_HOMEPAGE ? `2px solid  ${theme.palette.primary.main}` : 'none'}}>
              {t('Home')}
            </Link>

           

              <Typography variant='body2' sx={{mt:1}}>
              <Link to={NAVIGATE_TO_ABOUTPAGE}  style={{ color: 'white', textDecoration: 'none', borderBottom: location.pathname === NAVIGATE_TO_ABOUTPAGE ? `2px solid  ${theme.palette.primary.main}` : 'none'}}>
                       {t('About')}
                     </Link>
              </Typography>

              <Typography variant='body2' sx={{mt:1}}>
                {t('Marketplace')}
              </Typography>


              <Typography variant='body2' sx={{mt:1}}>
              <Link to={NAVIGATE_TO_BLOGPAGE}  style={{ color: 'white', textDecoration: 'none', borderBottom: location.pathname === NAVIGATE_TO_BLOGPAGE ? `2px solid  ${theme.palette.primary.main}` : 'none'}}>
                       {t('Blogs')}
                     </Link>
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 6, sm: 3 }}>
            <Box sx={{ margin: { xs: 1 } }}>
              <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                {t('help-support')}
              </Typography>

              <Typography variant='body2' sx={{}}>
                {t('FAQ')}
              </Typography>

              <Typography variant='body2' sx={{}}>
                {t('Contact')}
              </Typography>
              <Typography variant='body2' sx={{}}>
                {t('privacy-policy')}
              </Typography>
              <Typography variant='body2' sx={{}}>
                {t('terms-of-use')}
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 6, sm: 3 }}>
            <Box sx={{ margin: { xs: 1 } }}>
              <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                {t('our-address')}
              </Typography>

              <Typography variant='body2' sx={{}}>
                {t('street')}
              </Typography>

              <Typography variant='body2' sx={{}}>
                {t('region')}
              </Typography>

              <Typography variant='body2' sx={{}}>
                {t('country')}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Footercomponent
