import {
  Avatar,
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Tooltip,
  Container,
  List,
  ListItem, Button,
  ListItemText,
  Drawer,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { logo } from "../../../assets";
import Flag from "react-world-flags";
import { Link, useLocation } from "react-router-dom";
import {
  NAVIGATE_TO_ABOUTPAGE,
  NAVIGATE_TO_BLOGPAGE,
  NAVIGATE_TO_CONTACTPAGE,
  NAVIGATE_TO_FAQ,
  NAVIGATE_TO_HOMEPAGE,
  NAVIGATE_TO_MARKETPLACE,
  NAVIGATE_TO_SERVICEPAGE,
} from "../../../routes/types";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import { Close } from "@mui/icons-material";

const Headercomponent = () => {
  const location = useLocation();
  const { t }: { t: (key: string) => string } = useTranslation();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [language, setLanguage] = useState("en");
  const [flag, setFlag] = useState("GB"); // Default flag (UK)
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lang: string, flagCode: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    setFlag(flagCode);
    handleClose();
  };

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        sx={{
          background: theme.palette.secondary.main,
           width:'100%'
        }}>



<Container maxWidth="xl"  sx={{ maxWidth: "1300px", width:'100%' }} disableGutters>
          <Toolbar disableGutters sx={{marginX:1}}>
            <Link to="/home" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
              <img alt="logo" src={logo} style={{ height: "35px", width: "35px" }} />
              <Typography variant="h6" sx={{  color: "white", ml:1}}>
                MfugajiSmart
              </Typography>
            </Link>
            <Box sx={{ flexGrow: 1 }} />

            <IconButton size="large" edge="end" color="inherit" sx={{ display: { xs: "block", md: "none" } }} onClick={toggleDrawer(true)}>
              <MenuIcon sx={{ color:theme.palette.primary.main  }} />
            </IconButton>

                        {/* Drawer for XS screens */}
                        <Drawer
                        
              anchor="top"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              sx={{
              
                "& .MuiDrawer-paper": {
                  background: theme.palette.secondary.main,
                  color: "white",
                  
                  
                },
              }}
            >
              <Box sx={{display:'flex',marginX:2, marginY:0}}>
              <Link to="/home" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
              <img alt="logo" src={logo} style={{ height: "35px", width: "35px" }} />
              <Typography variant="h6" sx={{  color: "white", ml:1}}>
                MfugajiSmart
              </Typography>
            </Link>
            <Box sx={{ flexGrow: 1 }} />

            <IconButton size="small" edge="end" color="inherit" sx={{ display: { xs: "block", md: "none" } , color:'white', marginTop:1}} onClick={toggleDrawer(false)}>
              <Close sx={{ color:theme.palette.primary.main  }} />
            </IconButton>
              </Box>
              <List>
                {[
                  { label: t("Home"), path: NAVIGATE_TO_HOMEPAGE },
                  { label: t("About"), path: NAVIGATE_TO_ABOUTPAGE },
                  { label: t("Services"), path: NAVIGATE_TO_SERVICEPAGE },
                  { label: t("Marketplace"), path: NAVIGATE_TO_MARKETPLACE },
                  { label: t("Contact"), path: NAVIGATE_TO_CONTACTPAGE },
                  { label: t("FAQ"), path: NAVIGATE_TO_FAQ },
                  { label: t("Blogs"), path: NAVIGATE_TO_BLOGPAGE },
                ].map((item) => (
                  <ListItem  key={item.path} component={Link} to={item.path} onClick={toggleDrawer(false)}>
                    <ListItemText
                      primary={item.label}
                      sx={{
                        color:'white',
                        
                      
                        textAlign: "left",
                        borderBottom:
                          location.pathname === item.path ? `2px solid ${theme.palette.primary.main}` : "none",
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Drawer>


            <Box sx={{ display: "flex" }}>
              {/* Navigation Links */}
              <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
                <Link
                  to={NAVIGATE_TO_HOMEPAGE}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    borderBottom:
                      location.pathname === NAVIGATE_TO_HOMEPAGE
                        ? `2px solid  ${theme.palette.primary.main}`
                        : "none",
                  }}>
                  {t("Home")}
                </Link>
                <Link
                  to={NAVIGATE_TO_ABOUTPAGE}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    borderBottom:
                      location.pathname === NAVIGATE_TO_ABOUTPAGE
                        ? `2px solid  ${theme.palette.primary.main}`
                        : "none",
                  }}>
                  {t("About")}
                </Link>

                <Link
                  to={NAVIGATE_TO_SERVICEPAGE}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    borderBottom:
                      location.pathname === NAVIGATE_TO_SERVICEPAGE
                        ? `2px solid  ${theme.palette.primary.main}`
                        : "none",
                  }}>
                  {t("Services")}
                </Link>

                <Link
                  to={NAVIGATE_TO_MARKETPLACE}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    borderBottom:
                      location.pathname === NAVIGATE_TO_MARKETPLACE
                        ? `2px solid  ${theme.palette.primary.main}`
                        : "none",
                  }}>
                  {t("Marketplace")}
                </Link>

                <Link
                  to={NAVIGATE_TO_CONTACTPAGE}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    borderBottom:
                      location.pathname === NAVIGATE_TO_CONTACTPAGE
                        ? `2px solid  ${theme.palette.primary.main}`
                        : "none",
                  }}>
                  {t("contact")}
                </Link>

                <Link
                  to={NAVIGATE_TO_FAQ}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    borderBottom:
                      location.pathname === NAVIGATE_TO_FAQ
                        ? `2px solid  ${theme.palette.primary.main}`
                        : "none",
                  }}>
                  {t("FAQ")}
                </Link>

                <Link
                  to={NAVIGATE_TO_BLOGPAGE}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    borderBottom:
                      location.pathname === NAVIGATE_TO_BLOGPAGE
                        ? `2px solid  ${theme.palette.primary.main}`
                        : "none",
                  }}>
                  {t("Blogs")}
                </Link>
              </Box>

              {/* Language Switcher */}
              <Box sx={{ flexGrow: 0, marginX: 1, display:{xs:'none', sm:'flex'} }}>
                <Tooltip title={t("switch-language")}>
                  <IconButton onClick={handleClick} sx={{ p: 0 }}>
                    <Avatar sx={{ width: "20px", height: "20px" }}>
                      <Flag
                        code={flag}
                        style={{ width: "35px", height: "40px" }}
                      />
                    </Avatar>
                  </IconButton>
                </Tooltip>

                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}>
                  <MenuItem onClick={() => changeLanguage("en", "GB")}>
                    <Flag
                      code="GB"
                      style={{ width: "25px", height: "25px", marginRight: 10 }}
                    />
                    English (UK)
                  </MenuItem>
                  <MenuItem onClick={() => changeLanguage("sw", "TZ")}>
                    <Flag
                      code="TZ"
                      style={{ width: "25px", height: "25px", marginRight: 10 }}
                    />
                    Kiswahili (TZ)
                  </MenuItem>
                </Menu>
              </Box>
            </Box>

          </Toolbar>
        </Container>




    


      </AppBar>
    </>
  );
};

export default Headercomponent;
