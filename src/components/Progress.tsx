/* imports */
import { FC } from 'react';
import { useTheme } from './ThemePicker';

/* sass */
import "../sass/_progress.scss";

/* type defintions */
type ProgressProps = {
  title: string,
  bartitle: string,
  percent: number
}

const ProgressBar: FC<ProgressProps> = ({ title, bartitle, percent }) => {
  const theme = useTheme();
  return (
    <div className={`progress-${theme.name} fade-in`}>
      <div className={`progress-title-${theme.name}`}>
        {title}
      </div>
      <div className={`progress-bar-${theme.name}`}>
        <i className={`progress-bar-percent-${theme.name}`} style={{ "width": `${percent}%` }} />
        <div className={`progress-bar-title-${theme.name}`}>
          {bartitle}
        </div>
      </div>
    </div>
  )
}

export default ProgressBar