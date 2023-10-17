/* imports */
import { FC, ReactNode, useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

/* sass */
import '../sass/_components.scss';

/* interfaces */
interface SidebarButtonProps {
  icon: IconProp,
  url?: string,
  tooltip?: string
}

interface SidebarProps {
  children: ReactNode | ReactNode[] | undefined;
}

/* components */
const Sidebar: FC<SidebarProps> = ({ children }) => {
  const [expanded, setMenuState] = useState(false);
  const theme = useTheme();

  const onBrowserResize = ( ) => {
    setMenuState(false);
  }

  useEffect(() => {
    window.addEventListener('resize', onBrowserResize);
    return () => {
      window.removeEventListener('resize', onBrowserResize);
    }
  })
  return (
    <>
      <div className={`side-bar-${theme}`}>
        <div className={`side-bar-menu-${theme}`} onClick={() => setMenuState(!expanded)} >
          <FontAwesomeIcon icon={expanded === true ? faTimes : faBars} />
        </div>
      </div>
      <div className={`side-bar-buttons${expanded === true ? '-expanded-' : '-'}${theme}`}>
        {children}
      </div>
    </>    
  )
}

export const SidebarButton: FC<SidebarButtonProps> = (props) => {
  const theme = useTheme();
  return (
    <div className={`side-bar-button-${theme}`}>
      <a className={`side-bar-button-icon-${theme}`} href={props.url}>
        <FontAwesomeIcon icon={props.icon} />
      </a>
      <span className={`side-bar-button-tooltip-${theme}`}>
        {props.tooltip}
      </span>
    </div>
  )
}

/* default export */
export default Sidebar;