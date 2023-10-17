/* imports */
import { FC, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom';
import { useTheme, useThemeColors } from '../components/ThemeProvider';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

/* sass */
import '../sass/_components.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


/* exports */
export interface MenuProps {
  children: ReactNode | ReactNode[]
};

export interface MenuItemProps {
  caption: string,
  url: string,
  icon: IconProp
}

const Menu: FC<MenuProps> = ({ children }) => {
  const theme = useTheme()
  return (
    <ul className={`menu-${theme}`}>
      {children}
    </ul>
  )
}

export const MenuItem: FC<MenuItemProps> = (props) => {
  const navigate = useNavigate()
  const theme = useTheme()
  const colors = useThemeColors(theme);
  const activate = (props.url === window.location.pathname)
  let activeControl = undefined;
  if (activate) {
    activeControl = (<span>&nbsp;</span>)
  }
  return (
    <li className={`menu-item-${theme}`} onClick={() => navigate(props.url)}>
      <FontAwesomeIcon icon={props.icon} onClick={() => navigate(props.url)} style={{color: activate === true ? colors.secondaryForeColor : colors.primaryForeColor}} />
      <a href={props.url} style={{color: activate === true ? colors.secondaryForeColor : colors.primaryForeColor}}>{props.caption}</a>
      <i />
      {activeControl}
    </li>
  )
}

export default Menu