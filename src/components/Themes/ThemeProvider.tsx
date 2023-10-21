/* imports */
import { ReactNode, FC, createContext, useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

/* sass */
import './_theme_provider.scss';

/* exports */
export type Theme = 'light' | 'dark';

export const ThemeContext = createContext<Theme>('light');

export interface ThemeProviderProps {
  theme: Theme;
  children: ReactNode | ReactNode[];
}

export type ThemeDefition = {
  primaryForeColor: string,
  primaryBackColor: string,
  primaryHoverForeColor: string,
  primaryHoverBackColor: string,
  secondaryForeColor: string,
  secondaryBackColor: string,
  secondaryHoverForeColor: string,
  secondaryHoverBackColor: string,
}

const LightTheme: ThemeDefition = {
  primaryForeColor: "#333333",
  primaryBackColor: "#f1f1f1",
  primaryHoverForeColor: "white",
  primaryHoverBackColor: "linear-gradient(to bottom, #333333, #555555)",
  secondaryForeColor: "#555555",
  secondaryBackColor: "#1769aa",
  secondaryHoverForeColor: "white",
  secondaryHoverBackColor: "linear-gradient(to bottom, #2196f3, #1769aa)",
}

const DarkTheme: ThemeDefition = {
  primaryForeColor: "#C0C0C0",
  primaryBackColor: "#222222",
  primaryHoverForeColor: "white",
  primaryHoverBackColor: "linear-gradient(to bottom, rgb(143, 1, 156), rgb(51, 0, 56))",
  secondaryForeColor: "#333333",
  secondaryBackColor: "#FFFFFF",
  secondaryHoverForeColor: "white",
  secondaryHoverBackColor: "linear-gradient(to bottom, #333333, #7a7a7a)",
}

export const useThemeColors = (theme: string) =>  {
  if( theme === 'light' ) {
    return LightTheme;
  } else  if( theme === 'dark' ) {
    return DarkTheme;
  } else {
    throw new Error("useThemeColor expects light | dark as the theme only.")
  }
}

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return theme;
}

export const getTheme = (): Theme => {
  if( localStorage ) {
    const theme = localStorage.getItem('lh-theme-name');
    if( theme ) {
      return theme === 'light' ? 'light' : 'dark';
    }
  }
  return 'light'
}

export const saveTheme = ( theme: Theme ): boolean => {
  if( localStorage ) {
    localStorage.setItem('lh-theme-name', theme);
    return true;
  }
  return false;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(getTheme());
  const onChangeTheme = ( theme: Theme ) => {
    setTheme(theme);
    saveTheme(theme);    
  }
  return (
    <ThemeContext.Provider value={theme}>
      <div className={`theme-picker-${theme}`} onClick={() => onChangeTheme(theme === 'light' ? 'dark' : 'light')}>
        <FontAwesomeIcon icon={theme === 'light' ? faSun : faMoon} />
      </div>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;