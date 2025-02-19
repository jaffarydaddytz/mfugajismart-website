// theme.d.ts
import { PaletteOptions } from '@mui/material/styles/createPalette';

// Extend MUI's Palette interface to include a custom 'tertiary' color
declare module '@mui/material/styles' {
  interface Palette {
    tertiary: {
      main: string;
      contrastText: string;
    };
  }

  interface PaletteOptions {
    tertiary?: {
      main: string;
      contrastText: string;
    };
  }
}
