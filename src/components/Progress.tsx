/* imports */
import { FC, useEffect } from 'react';
import { useTheme } from './ThemePicker';

/* sass */
import "../sass/_progress.scss";

/* constants */
const PROGRESS_TICK = 10;
const PROGRESS_DURATION = 1000;

/* intersect observer config */
const observerConfig = {
  root: document.getElementById("app-content"),
  threshold: 0.5,
  rootMargin: "70px"
}

/* type defintions */
type ProgressProps = {
  title: string,
  bartitle: string,
  percent: number
}

const ProgressBar: FC<ProgressProps> = ({ title, bartitle, percent }) => {
  const theme = useTheme();

  const onObserve = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    if (entries && observer) {
      entries.forEach( entry => {
        if( entry.isIntersecting){
          entry.target.classList.remove('fade-out');
          entry.target.classList.add('fade-in');
        } else {
          entry.target.classList.remove('fade-in');
          entry.target.classList.add('fade-out');
        }
      })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(onObserve, observerConfig);
    const percentElement = document.querySelector(`.progress-${theme.name}`)
    if (observer && percentElement) {
      observer.observe(percentElement)
    }
    return () => {
      if (observer && percentElement) {
        observer.unobserve(percentElement)
      }
    }
  }, [])
  return (
    <div className={`progress-${theme.name} fade-in`}>
      <div className={`progress-title-${theme.name}`}>
        {title}
      </div>
      <div className={`progress-bar-${theme.name}`}>
        <i className={`progress-bar-percent-${theme.name}`} style={{"width": `${percent}%`}} />
        <div className={`progress-bar-title-${theme.name}`}>
          {bartitle}
        </div>
      </div>
    </div>
  )
}

export default ProgressBar