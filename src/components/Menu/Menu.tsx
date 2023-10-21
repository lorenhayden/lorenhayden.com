/* imports */
import { FC, ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../Themes/ThemeProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

/* sass */
import './_menu.scss';

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
  const navigate = useNavigate();
  const theme = useTheme()
  const activate = (props.url === window.location.pathname)
  let activeControl = undefined;
  useEffect(() => {
    const menuItems = document.querySelectorAll(`.menu-item-${theme}`)
    if (menuItems) {
      menuItems.forEach((menuItem) => {
        if (menuItem.getAttribute('data-url') === props.url) {
          console.log(menuItem);
          menuItem.classList.add('activate');
        } else {
          menuItem.classList.remove('activate');
        }
      })
    }
  },[])
  const onClickMenuItem = () => {
    const menuItems = document.querySelectorAll(`.menu-item-${theme}`)
    if (menuItems) {
      menuItems.forEach((menuItem) => {
        if (menuItem.getAttribute('data-url') === props.url) {
          menuItem.classList.add('activate');
        } else {
          menuItem.classList.remove('activate');
        }
      })
    }
    navigate(props.url);
  }
  if (activate) {
    activeControl = (<span>&nbsp;</span>)
  }
  return (
    <li className={`menu-item-${theme}`} onClick={onClickMenuItem} data-url={props.url}>
      <FontAwesomeIcon icon={props.icon} onClick={onClickMenuItem} />
      <a onClick={onClickMenuItem}>
        {props.caption}
      </a>
      <i />
      {activeControl}
    </li>
  )
}

export default Menu