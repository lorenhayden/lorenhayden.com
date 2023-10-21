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