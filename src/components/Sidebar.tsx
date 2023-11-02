/* imports */
import { ReactNode, FC, useState } from 'react';
import { useTheme } from './ThemePicker';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

/* sass */
import "../sass/_sidebar.scss";

type SidebarProps = {
  children?: ReactNode | ReactNode[]
}

type SidebarItemProps = {
  icon: IconProp,
  caption: string,
  url?: string
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  const [expanded, toggleMenu] = useState(false);
  const theme = useTheme();
  const onToggleMenu = (expanded: boolean) => {
    const sidebar = document.querySelector(`.app-side-bar-${theme.name}`)
    if (sidebar) {
      sidebar.classList.toggle('show', expanded);
    }
    toggleMenu(expanded);
  }
  return (
    <>
      <span className={`app-side-bar-hamburger-${theme.name}`} onClick={() => onToggleMenu(!expanded)}>
        <FontAwesomeIcon icon={expanded === true ? faTimes : faBars} />
      </span>
      <nav className={`app-side-bar-${theme.name}`}>
        {children}
      </nav>
    </>
  )
}

export const SidebarItem: FC<SidebarItemProps> = ({ icon, caption, url }) => {
  const theme = useTheme();
  return (
    <a className={`app-side-bar-item-${theme.name}`} href={url} >
      <FontAwesomeIcon className={`app-side-bar-item-icon-${theme.name}`} icon={icon} />
      <span className={`app-side-bar-item-caption-${theme.name}`} >
        {caption}
      </span>
    </a>
  )
}

export default Sidebar;