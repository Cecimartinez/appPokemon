import {Colors, Typography, ThemeManager} from 'react-native-ui-lib';
import {useColorScheme} from 'react-native';
import 'react-native-gesture-handler';
import {DarkTheme, DefaultTheme} from '@react-navigation/native';

// Tomado de https://github.com/kanzitelli/rnn-starter/blob/master/src/utils/designSystem.tsx

// Constantes de colores para usar en el proyecto
export const colorsConstants = {
  primary: '#0685e1', // celeste
};

export const themes = {
  light: {
    textDefault: Colors.black,
    backgroundDefault: Colors.white,
    backgroundDiff: Colors.white,
    subtitleColor: colorsConstants.primary,
    primary: colorsConstants.primary,
    imageBackgroundLoading: Colors.white,
    imageBackground: Colors.white,
    imageBackgroundError: Colors.white,
    actions: '#6E7881',
    overImage: '#A6ACB1',
    placeholder: '#4D5963',
    inputBackground: '#16222A',
    error: Colors.red30,
    disabled: '#4D5963',
    disabledSoft: Colors.grey50,
  },
  dark: {
    textDefault: Colors.white,
    backgroundDefault: Colors.black,
    backgroundDiff: '#313131',
    subtitleColor: colorsConstants.primary,
    primary: colorsConstants.primary,
    imageBackgroundLoading: Colors.black,
    imageBackground: Colors.white,
    imageBackgroundError: Colors.black,
    actions: '#6E7881',
    overImage: '#A6ACB1',
    placeholder: '#4D5963',
    inputBackground: '#16222A',
    error: Colors.red30,
    disabled: '#4D5963',
    disabledSoft: Colors.grey50,
  },
};

export const SetUserScheme = design => {
  const userColorScheme = useColorScheme(); //Toma el tema que tiene configurado en el dispositivo
  if (design.isSystemAppearance) {
    //Sólo setea los valores si se toma la config nativa del dispositivo
    design.scheme = userColorScheme;
    design.theme = design.scheme === 'dark' ? DarkTheme : DefaultTheme;
  }
  //Sobreescribimos los colores del theme con los nuestros
  design.theme.colors.background = design.getThemeColor('backgroundDefault');
};

export class DesignSystemManager {
  constructor() {
    this.isSystemAppearance = false; //True si el usuario elige el teléfono
    this.scheme = 'dark'; //default scheme: light or dark
    this.theme = DarkTheme;
  }

  start() {
    this.loadThemes();
    this.loadTypographies();
    this.loadComponents();
  }

  loadThemes() {
    if (this.isSystemAppearance) {
      Colors.loadColors(colorsConstants);
      Colors.loadSchemes(themes);
    } else {
      Colors.loadColors({...colorsConstants, ...themes[this.scheme]});
      Colors.loadSchemes({dark: {}, light: {}});
    }
  }

  loadTypographies() {
    Typography.loadTypographies({
      title: {fontSize: 22, fontWeight: '700', lineHeight: 45},
    });
  }

  loadComponents() {
    ThemeManager.setComponentTheme('Text', {
      fontFamily: 'Roboto',
    });
  }

  getThemeColor = colorKey => {
    return themes[this.scheme][colorKey];
  };

  getScheme = () => {
    return this.scheme;
  };

  getTheme = () => {
    return this.theme;
  };
}

export const color = colorKey => {
  return new DesignSystemManager().getThemeColor(colorKey);
};

export default new DesignSystemManager();
