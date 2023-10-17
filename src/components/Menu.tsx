/* imports */
import { FC, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../components/ThemeProvider';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

/* sass */
import '../sass/_components.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
  const theme = useTheme();
  return (
    <ul className={`menu-${theme}`}>
      {children}
    </ul>
  )
}

export const MenuItem: FC<MenuItemProps> = (props) => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <li className={`menu-item-${theme}`} onClick={()=> navigate(props.url)}>
      <FontAwesomeIcon icon={props.icon} onClick={() => navigate(props.url)} />
      <a href={props.url}>{props.caption}</a>
      <i />
    </li>
  )
}

export default Menu