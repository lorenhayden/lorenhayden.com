import { FC, ReactNode, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from './ThemePicker';

interface MenuItemProps {
  icon: IconProp,
  caption: string,
  url: string,
}

export const MenuItem: FC<MenuItemProps> = (props) => {
  const { name } = useTheme();
  const navigate = useNavigate();
  const onMenuItemClick = () => {
    navigate(props.url)
  }
  return (
    <li className={`menu-item-${name}`} onClick={onMenuItemClick} >
      <div className={`menu-item-icon-${name}`}>
        <FontAwesomeIcon icon={props.icon} onClick={onMenuItemClick} />
      </div>
      <a className={`menu-item-caption-${name}`} onClick={onMenuItemClick}>
        {props.caption}
      </a>
    </li >
  )
}

interface MenuProps {
  children: ReactNode | ReactNode[]
}

const Menu: FC<MenuProps> = (props) => {
  const [expanded, toggleExpanded] = useState<boolean>(false);
  const { name } = useTheme();

  const onMenuClicked = () => {
    const menu = document.querySelector(`.menu-${name}`)
    if (menu) {
      menu.classList.remove('scale-out')
      menu.classList.add('scale-in')
      toggleExpanded(false);
    }
  }

  const onThemeChanged = ( ) => {
    const menu = document.querySelector(`.menu-${name}`)
    if (menu) {
      menu.classList.remove('scale-out')
      menu.classList.add('scale-in')
    }
    toggleExpanded(false);
  }

  useEffect(() => {
    const themePicker = document.querySelector(`.theme-picker-${name}`);
    if( themePicker ) {
      themePicker.addEventListener('click', onThemeChanged);
    }
    const liItems = document.querySelectorAll('li');
    if (liItems) {
      liItems.forEach((liItem) => {
        if (liItem) {
          liItem.addEventListener('click', onMenuClicked)
        }
      })
      return () => {
        if( themePicker) {
          themePicker.removeEventListener('click', onThemeChanged);
        }
        liItems.forEach((liItem) => {
          if (liItem) {
            liItem.removeEventListener('click', onMenuClicked)
          }
        })
      }
    }
  }, [expanded])
  const onToggleMenu = (expanded: boolean) => {
    const menu = document.querySelector(`.menu-${name}`)
    if (menu) {
      if (expanded) {
        menu.classList.remove('scale-in')
        menu.classList.add('scale-out')
      } else {
        menu.classList.remove('scale-out')
        menu.classList.add('scale-in')
      }
    }
    toggleExpanded(expanded)
  }
  return (
    <>
      <div className={`menu-bars-${name} rotate-out-left`} onClick={() => onToggleMenu(!expanded)}>
        <FontAwesomeIcon icon={expanded === true ? faTimes : faBars} onClick={() => onToggleMenu(!expanded)} />
      </div>
      <ul className={`menu-${name}`}>
        {props.children}
      </ul>
    </>
  )
}

export default Menu;