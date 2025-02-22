import { Box, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import { chicken } from "../../../assets";
import { useTheme } from "@mui/material/styles";



const BlogPage = () => {
  const theme = useTheme();
  return (
    <>
    <Box sx={{display:'flex', justifyContent:'center',alignItems:'center'}}>

<Box sx={{maxWidth:{xs:'100%', sm:'800px'}, width:'100%', }}>

      <Grid container spacing={1} sx={{ marginTop: "100px", }}>
        
        <Grid size={{ xs: 12, sm:12 }} sx={{ backgroundColor: theme.palette.primary.main , display:'flex',alignItems:'center', justifyContent:'center',borderRadius:1 }}>
     
          <Box sx={{width:'100%', display:'flex', alignItems:'center', padding:1}}>
            <img alt='chicken' src={chicken}  width="100%"/>
          </Box>

          <Box sx={{}}>
            <Box>
            <Typography variant="h5" sx={{fontSize:{xs:'16px', sm:'32px', fontWeight:'bold'}} }>Why a poultry and arable unit </Typography>
            </Box>
    
            <Box sx={{}}>
            <Typography variant="body1">Poultry and arable enterprises complement each other well at Nun Monkton 

</Typography>
            </Box>
           
          </Box>
        </Grid>

      </Grid>
      </Box>
      </Box>
    </>
  );
};

export default BlogPage;
