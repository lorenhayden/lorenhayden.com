/* imports */
import { FC, useEffect } from 'react';
import { useTheme } from './components/ThemePicker';
import data from "./data.json";

/* sass */
import "./sass/_experience.scss";

/* type declarations */
type TileProps = {
  title: string,
  company: string,
  location: string,
  started: string,
  ended: string,
  tasks: string[],
}

/* intersect observer config */
const observerConfig = {
  root: document.getElementById("app-content"),
  threshold: 0,
  rootMargin: "70px"
}

/* component declarations */
export const ExperienceTile: FC<TileProps> = ({ title, company, location, started, ended, tasks }) => {
  const theme = useTheme();
  return (
    <div className={`experience-tile-${theme.name}`}>
      <div className={`experience-tile-marker-${theme.name}`}>
        <i>&nbsp;</i>
      </div>
      <div className={`experience-tile-title-${theme.name}`}>
        <strong>{`${title ?? '[title]'}`}</strong>
        <span>&nbsp;{`at ${company ?? '[company]'}`}</span>
        <span>&nbsp;{`in ${location ?? '[location]'}`}</span>
      </div>
      <div className={`experience-tile-border1-${theme.name}`}>
        <i>&nbsp;</i>
      </div>
      <div className={`experience-tile-timeframe-${theme.name}`}>
        {`${started ?? '[started]'} - ${ended ?? '[ended]'}`}
      </div>
      <div className={`experience-tile-border2-${theme.name}`}>
        <i>&nbsp;</i>
      </div>
      <div className={`experience-tile-tasks-${theme.name}`}>
        <ul>
          {tasks.map(( task, index) => {
            const taskKey = `${company.replace(" ",'-').toLowerCase()}-${index}`
            return (
              <li key={taskKey}>
                {task}
             </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

/* main component declaration */
const Experience = () => {
  const theme = useTheme();
  const history = data['experience'];
  const onObserve = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('fade-out');
        entry.target.classList.add('fade-in');
      } else {
        entry.target.classList.remove('fade-in');
        entry.target.classList.add('fade-out');
      }
    })
  }
  useEffect(() => {
    const observer = new IntersectionObserver(onObserve, observerConfig);
    if (observer) {
      const header = document.querySelector(`.experience-header-${theme.name}`)
      if (header) {
        observer.observe(header);
      }
      const tiles = document.querySelectorAll(`.experience-tile-${theme.name}`)
      if (tiles) {
        tiles.forEach(tile => {
          observer.observe(tile);
        })
      }
    }
  }, [])
  return (
    <div className={`experience-${theme.name}`}>
      <h1 className={`experience-header-${theme.name} fade-in`}>
        Work Experience
      </h1>
      <div className={`experience-content-${theme.name}`}>
        {history.map((item, index) => {
          const itemKey = `experience-item-${index}`;
          return (
            <ExperienceTile
              key={itemKey}
              title={item['title']}
              company={item['company']}
              location={item['location']}
              started={item['started']}
              ended={item['ended']}
              tasks={item['tasks']}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Experience;