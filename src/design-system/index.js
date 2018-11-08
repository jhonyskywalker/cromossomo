import font from './font';
import color from './color';

export default {
  font: {
    family: {
      primary: font.family.montserrat,
      secondary: font.family.roboto,
    },
    sizes: {
      xs: '10px',
      s: '14px',
      base: '16px',
      m: '18px',
      l: '20px',
      xl: '22px',
      xxl: '24px',
      xxxl: '52px',
    },
    weight: {
      light: 300,
      regular: 400,
    },
  },
  color: {
    primary: color['red-100'],
    secondary: color.white,
    success: color['green-100'],
    warning: color['orange-100'],
    black: color.black,
    blue: color['blue-100'],
  },
};
