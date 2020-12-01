import lightTheme from 'themes/light-theme';
import darkTheme from 'themes/dark-theme';

export const LIGHT_THEME = 'light';
export const DARK_THEME = 'dark';

export function getTheme(theme) {
  switch (theme) {
    case DARK_THEME:
      return darkTheme;

    default:
      return lightTheme;
  }
}
