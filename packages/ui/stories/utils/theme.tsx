import colors from './colors';
// https://reactnativeelements.com/docs/customization

interface ThemeColors {
    background: string;
    primary: string;
    secondary: string;
    white: string;
    black: string;
    grey0: string;
    grey1: string;
    grey2: string;
    grey3: string;
    grey4: string;
    grey5: string;
    greyOutline: string;
    searchBg: string;
    success: string;
    warning: string;
    error: string;
}

interface Theme {
    colors: ThemeColors;
    Button: {
        buttonStyle: {
            height: number;
            paddingLeft: number;
            paddingRight: number;
        };
        titleStyle: {
            color: string;
            fontWeight: string;
        };
    };
}

const fallbackColor = '#ff0000';
// ...existing code...

const themeColors: ThemeColors = {
    background: colors.spanish_gray?.base ?? fallbackColor,
    primary: colors.smoky_black?.base ?? fallbackColor,
    secondary: '#fff',
    white: colors.spanish_white?.base ?? fallbackColor,
    black: colors.smoky_black?.base ?? fallbackColor,
    grey0: colors.silver_sand?.light ?? fallbackColor,
    grey1: colors.silver_sand?.base ?? fallbackColor,
    grey2: colors.silver_sand?.muted ?? fallbackColor,
    grey3: colors.spanish_gray?.muted ?? fallbackColor,
    grey4: colors.spanish_gray?.base ?? fallbackColor,
    grey5: colors.spanish_gray?.shadow ?? fallbackColor,
    greyOutline: colors.silver_sand?.muted ?? fallbackColor,
    searchBg: colors.spanish_gray?.light ?? fallbackColor,
    success: colors.medium_aquamarine?.base ?? fallbackColor,
    warning: colors.lemon?.base ?? fallbackColor,
    error: colors.electric_orange?.base ?? fallbackColor
};

// ...rest of the code...

const theme = (tc = themeColors): Theme => ({
    colors: themeColors,
    Button: {
        buttonStyle: {
            height: 40,
            paddingLeft: 20,
            paddingRight: 20
        },
        titleStyle: {
            color: '#fff',
            fontWeight: 'bold'
        }
    }
});

export default theme;
