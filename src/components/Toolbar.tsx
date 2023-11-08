/* imports */
import { ReactNode, FC } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "./ThemePicker";

/* sass */
import "../sass/_toolbar.scss";


/* type defintitions */
export type ToolbarProps = {
  children?: ReactNode | ReactNode[]
}

export type ToolbarIconProps = {
  icon: IconProp,
  url: string
}

const Toolbar:FC<ToolbarProps> = ({ children }) => {
  const theme = useTheme();
  return (
    <div className={`toolbar-${theme.name}`}>
      {children}
    </div>
  )
}

export const ToolbarIcon:FC<ToolbarIconProps> = ({ icon, url }) => {
  const theme = useTheme();
  return (
    <a className={`toolbar-button-${theme.name}`} href={url} target="_blank">
      <FontAwesomeIcon className={`toolbar-button-icon-${theme.name}`} icon={icon} />
    </a>
  )
}

export default Toolbar;