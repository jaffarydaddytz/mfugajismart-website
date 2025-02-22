import { Box, Button, Typography } from "@mui/material";
import {
  phone,
  phoneholding,
  playstore,
  playstorebanner,
} from "../../../assets";
import Grid from "@mui/material/Grid2";
import { useTheme } from "@mui/material/styles";
import Languageswitcher from "../../../utils/languageswitcher/Languageswitcher";
// import i18n from '../../../i18n';
import i18n from "../../../i18n";
import { useTranslation } from "react-i18next";

const Homepagecomponent = () => {
  const theme = useTheme();
  //const {t} = useTranslation();

  const { t }: { t: (key: string) => string } = useTranslation();
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Grid container sx={{ mt: { xs: "70px", sm: "100px" } }}>
          <Grid
            size={{ xs: 12, sm: 6 }}
            sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{}}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "20px", sm: "28px" },
                }}>
                {t("headline")}
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "30px", sm: "35px" },
                }}>
                {t("herotagline")}
              </Typography>

              <Typography>{t("hero")}</Typography>

              <Box
                sx={{
                  mt: 2,
                  gap: 5,
                  display: "flex",
                  justifyContent: { xs: "center", sm: "start" },
                }}>
                <Button
                  variant="contained"
                  startIcon={<img alt="log" src={playstore} width="25" />}
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    color: "white",
                  }}>
                  <a href="https://play.google.com/store/apps/details?id=ttpc.MS" style={{textDecoration: 'none', color:'white'}}>
                    {t("getapp")}
                  </a>
                </Button>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: theme.palette.primary.main }}>

                  <a href="tel:+255 759 536 085" style={{ color: "black", textDecoration: "none" }}>
                  {t("contactus")}
                  </a>
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Box
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                mt: { xs: 2 },
              }}>
              <img alt="logo" src={phone} width={200} />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ backgroundColor: "", mt: 4 }}></Box>
    </Box>
  );
};

export default Homepagecomponent;
