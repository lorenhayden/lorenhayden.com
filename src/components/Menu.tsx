/* imports */
import { ReactNode, FC } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from './ThemePicker';

/* sass */
import "../sass/_menu.scss";

export type MenuItemProps = {
  icon: IconProp,
  caption: string,
  url: string,
}

export type MenuProps = {
  children?: ReactNode | ReactNode[]
}

const Menu: FC<MenuProps> = ({ children }) => {
  const theme = useTheme()
  return (
    <nav id="menu" className={`app-menu-${theme.name}`}>
      {children}
    </nav>
  )
}

export const MenuItem: FC<MenuItemProps> = ({ icon, caption, url }) => {
  const theme = useTheme()
  return (
    <a className={`app-menu-item-${theme.name}`} href={url}>
      <FontAwesomeIcon className={`app-menu-item-icon-${theme.name}`} icon={icon} />
      <span className={`app-menu-item-caption-${theme.name}`}>
        {caption}
      </span>
    </a>
  )
}



export default Menu;