import { Box, Button, Typography } from '@mui/material'
import {phoneholding, playstore, playstorebanner } from '../../../assets'
import Grid from '@mui/material/Grid2'
import {useTheme} from '@mui/material/styles';
import Languageswitcher from '../../../utils/languageswitcher/Languageswitcher';
// import i18n from '../../../i18n';
import i18n from '../../../i18n';
import { useTranslation } from 'react-i18next';

const Homepagecomponent = () => {
       const theme =useTheme();
       //const {t} = useTranslation();
       

        const { t }: { t: (key: string) => string } = useTranslation()
  return (
    <Box sx={{}}>
      <Grid container sx={{ mt: { xs: '70px' } }}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
            {t('headline')}
            </Typography>

            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
            {t('herotagline')}
            </Typography>

            <Typography>
              {t('hero')}

            </Typography>

            <Box sx={{mt:2, gap:5, display:'flex'}}>
              <Button variant='contained' startIcon={<img alt='log' src={playstore} width='25'/>} sx={{backgroundColor:theme.palette.secondary.main, color:'white'}}>{t('getapp')}</Button>
              <Button variant='contained' sx={{backgroundColor:theme.palette.primary.main}} >{t('contactus')}</Button>
             
            </Box>


          </Box>
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <Box
            sx={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <img alt='logo' src={phoneholding} width={300} />
          </Box>
        </Grid>
      </Grid>

      <Languageswitcher/>
    </Box>
  )
}

export default Homepagecomponent
