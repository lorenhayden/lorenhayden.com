/* imports */
import { ReactNode, FC, useState } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from './ThemePicker'


/* sass */
import "../sass/_sidebar.scss"


/* types */
type SidebarProps = {
  expanded: boolean,
  children?: ReactNode | ReactNode[]
}

type SidebarItemProps = {
  icon: IconProp,
  caption: string,
  url?: string,
  onChanged?: (expanded: boolean) => void;
}
const Sidebar: FC<SidebarProps> = ({ children, expanded}) => {
  const theme = useTheme();
  const sideBarClassName = (expanded === true) ? `side-bar-${theme.name} side-bar-expanded-${theme.name}` : `side-bar-${theme.name}`;
  return (
    <div className={sideBarClassName}>
      {children}
    </div>
  )
}

export const SidebarItem: FC<SidebarItemProps> = ({ icon, caption, url, onChanged }) => {
  const theme = useTheme();
  const onHandleClick = () => {
    if( onChanged ) {
      onChanged(false);
    }
  }
  return (
    <a className={`side-bar-item-${theme.name}`} href={url} onClick={onHandleClick}>
      <FontAwesomeIcon className={`side-bar-item-icon-${theme.name}`} icon={icon} />
      <span className={`side-bar-item-caption-${theme.name}`}>
        {caption}
      </span>
    </a>
  )
}

export default Sidebar;