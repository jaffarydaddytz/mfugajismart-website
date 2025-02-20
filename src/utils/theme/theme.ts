// theme.ts
import { createTheme } from '@mui/material/styles';

// Define your brand colors
const offWhite = '#faf9f6';
const darkGreen = '#006400';
const gold = '#efbf04';
const richBlack = '#0a0a0a';

// Create the static light mode theme
const lightTheme = createTheme({
  palette: {
    primary: {
      main: gold, // Off-white as the primary background color
      contrastText: richBlack, // Dark text color on primary background
    },
    secondary: {
      main: darkGreen, // Dark Green as the secondary color
      light: '#338533', // Lighter shade of Dark Green for hover states
      dark: '#004d00', // Darker shade of Dark Green for active states
      contrastText: offWhite, // Light text on Dark Green buttons
    },

    background: {
      default: offWhite, // Main background color (off-white)
    
    },
    text: {
      primary: richBlack, // Rich Black for primary text
      secondary: darkGreen, // Dark Green for secondary text
    },
    action: {
      active: gold, // Gold for active elements like buttons and icons
    },
  },
});

export default lightTheme;
