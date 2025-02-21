import { Container, LinearProgress ,Menu, MenuItem} from '@mui/material'
import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { useTheme } from '@mui/material/styles'
import { logo } from '../../../assets'
import Flag from 'react-world-flags'
import { Link } from 'react-router-dom'
import { NAVIGATE_TO_HOMEPAGE } from '../../../routes/types'
import i18n from '../../../i18n';
import { useTranslation } from 'react-i18next';
import  { useState } from 'react'

const Headercomponent = () => {
  const code = 'TZ'
  const theme = useTheme()
  const { t }: { t: (key: string) => string } = useTranslation()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [language, setLanguage] = useState('en') // Default language
  const [flag, setFlag] = useState('GB') // Default flag (UK)


  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const changeLanguage = (lang: string, flagCode: string) => {
    i18n.changeLanguage(lang)
    setLanguage(lang)
    setFlag(flagCode)
    handleClose()
  }


  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <AppBar sx={{ background: theme.palette.secondary.main }}>
          <Toolbar
            sx={{
              width: '1250px',
              display: 'flex',
              justifyContent:{xs:'', sm:'space-between'},
              //margin: '0 auto'
              
            }}
          >
            <Box sx={{display:'flex', alignItems:'center'}}>
              <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='menu'
              >
                <img alt={logo} src={logo} width={40} />
              </IconButton>
              <Typography
                variant='h6'
                component='div'
                sx={{ flexGrow: 1, color: 'white' }}
              >
                MfugajiSmart
              </Typography>
            </Box>

            <Box sx={{color:'white', display:{xs:'flex',sm:'none'}}}>
              <MenuIcon  />
            </Box>
            
<Box>
         
          

            <Box sx={{ gap: 3, display: { xs: 'none', md: 'flex' } }}>

              <Link
                to={NAVIGATE_TO_HOMEPAGE}
                style={{ color: 'white', textDecoration: 'none' }}
              >
                {t('Home')}
              </Link>

              <a href='#' style={{ color: 'white', textDecoration: 'none' }}>
              {t('About')}
              </a>
              <a href='#' style={{ color: 'white', textDecoration: 'none' }}>
              {t('Services')}
              </a>
              <a href='#' style={{ color: 'white', textDecoration: 'none' }}>
              {t('Marketplace')}
              </a>
              <a href='#' style={{ color: 'white', textDecoration: 'none' }}>
              {t('Contact')}
              </a>
              <a href='#' style={{ color: 'white', textDecoration: 'none' }}>
              {t('FAQ')}
              </a>
              <a href='#' style={{ color: 'white', textDecoration: 'none' }}>
              {t('Blogs')}
              </a>

         
              
    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
              <MenuItem onClick={() => changeLanguage('en', 'GB')}>
                <Flag
                  code="GB"
                  style={{
                    width: '25px',
                    height: '15px',
                    borderRadius: '50%',
                    marginRight: 10
                  }}
                />
                English (UK)
              </MenuItem>
              <MenuItem onClick={() => changeLanguage('sw', 'TZ')}>
                <Flag
                  code="TZ"
                  style={{
                    width: '25px',
                    height: '15px',
                    borderRadius: '50%',
                    marginRight: 10
                  }}
                />
                Kiswahili (TZ)
              </MenuItem>
            </Menu>
              
            </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Headercomponent
