/* imports */
import { ReactNode, FC } from 'react';
import { useTheme } from '../Themes/ThemeProvider';

/* sass */
import './_observer.scss';

interface ObserverProps {
  children: ReactNode | ReactNode[],
}

const Observer:FC<ObserverProps> = ({ children }) => {
  const theme = useTheme();
  return (
    <div className={`observer-${theme}`}>
      {children}
    </div>
  )
}

export default Observer;