/* imports */
import { FC, useEffect } from 'react';
import { useTheme } from './ThemePicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

/* sass */
import "../sass/_hamburger.scss";

type HamburgerProps = {
  expanded?: boolean,
  onChanged?: (expanded: boolean) => void
}

const Hamburger: FC<HamburgerProps> = ({ expanded, onChanged }) => {
  const theme = useTheme();
  const onToggle = (expanded: boolean) => {
    if (onChanged) {
      onChanged(expanded ?? false);
    }
  }
  const onHandleResize = ( ) => {
    if (onChanged) {
      onChanged(expanded ?? false);
    }
  }
  useEffect(() => {
    window.addEventListener('resize', onHandleResize);
    return () => {
      window.addEventListener('resize', onHandleResize);
    }
  }, [])
  return (
    <div className={`hamburger-${theme.name}`} onClick={() => onToggle(!expanded)}>
      <FontAwesomeIcon className={`hamburger-icon-${theme.name}`} icon={expanded === true ? faTimes : faBars} />
    </div>
  )
}

export default Hamburger;
