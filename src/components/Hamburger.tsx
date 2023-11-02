/* imports */
import { ReactNode, FC, useState, useEffect } from 'react';
import { useTheme } from './ThemePicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

/* sass */
import "../sass/_hamburger.scss";

const initialState = false;

type HamburgerProps = {
  onChanged?: (expanded: boolean) => void
  children?: ReactNode | ReactNode[]
}

const Hamburger: FC<HamburgerProps> = ({ children, onChanged }) => {
  const theme = useTheme();
  const [expanded, toggleExpanded] = useState(initialState);
  const onToggle = (expanded: boolean) => {
    if (onChanged) {
      onChanged(expanded);
    }
    toggleExpanded(expanded);
  }
  const onHandleResize = ( ) => {
    if (onChanged) {
      onChanged(expanded);
    }
    toggleExpanded(false);
  }
  useEffect(() => {
    window.addEventListener('resize', onHandleResize);
    return () => {
      window.addEventListener('resize', onHandleResize);
    }
  }, [])
  return (
    <div className={`hamburger-${theme.name}`} onClick={() => onToggle(!expanded)}>
      <FontAwesomeIcon icon={expanded === true ? faTimes : faBars} />
      {children}
    </div>
  )
}

export default Hamburger;
