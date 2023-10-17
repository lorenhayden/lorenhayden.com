/* imports */
import { ReactNode, FC, createContext, useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

/* sass */
import '../sass/_components.scss';

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
  secondaryForeColor: string
  secondaryBackColor: string,
}

const LightTheme: ThemeDefition = {
  primaryForeColor: "#2196f3",
  primaryBackColor: "#f1f1f1",
  secondaryForeColor: "#f1f1f1",
  secondaryBackColor: "#1769aa",
}

const DarkTheme: ThemeDefition = {
  primaryForeColor: "#C0C0C0",
  primaryBackColor: "#222222",
  secondaryForeColor: "#333333",
  secondaryBackColor: "#FFFFFF",
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