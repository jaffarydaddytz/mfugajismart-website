import { Box, Typography } from '@mui/material'
import { phoneholding, playstorebanner } from '../../../assets'
import Grid from '@mui/material/Grid2'

const Homepagecomponent = () => {
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
              Mfugaji Smart App{' '}
            </Typography>
            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
              Your Digital Solution for Better Farming and Profit
            </Typography>

            <Typography>
              Harness the power of modern technology with Mfugaji Smart App to
              enhance your farming experience. Efficient management, essential
              insights, and greater profits for farmers everywhere. Connect with
              Mfugaji Smart App today and start your success journey!
            </Typography>

            <img width={150} alt='banner' src={playstorebanner} />
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
    </Box>
  )
}

export default Homepagecomponent
