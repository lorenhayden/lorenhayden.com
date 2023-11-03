/* imports */
import { useEffect } from 'react';
import { useTheme } from './components/ThemePicker';
import data from "./data.json";

/* sass */
import "./sass/_experience.scss";


/* declarations */
const observerConfig = {
  threshold: 1,
}

const Experience = () => {
  const theme = useTheme();
  const experience = data['experience'];
  useEffect(() => {
    const onIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      if (entries && observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
            entry.target.classList.remove('fade-out');
          } else {
            entry.target.classList.add('fade-out');
            entry.target.classList.remove('fade-in')
          }
        })
      }
    }
    const observer = new IntersectionObserver(onIntersect, observerConfig);
    const headerElement = document.getElementById('header');
    if (headerElement) {
      observer.observe(headerElement);
    }
    const experienceTitleElements = document.querySelectorAll('.experience-tile');
    if (experienceTitleElements) {
      experienceTitleElements.forEach((experienceTitleElement) => {
        observer.observe(experienceTitleElement);
      })
    }
    const experienceTitleAltElements = document.querySelectorAll('.experience-tile-alt');
    if (experienceTitleAltElements) {
      experienceTitleAltElements.forEach((experienceTitleAltElement) => {
        observer.observe(experienceTitleAltElement);
      })
    }
  }, [])
  return (
    <section id="experience" className={`experience-${theme.name}`}>
      <h1 className={`experience-header-${theme.name}`}>Work Experience</h1>
      <div className={`experience-history-${theme.name}`}>
        {experience.map((item, index) => {
          const itemKey = `company-${index}`
          const experienceTileClass = (index % 2 === 0) ? `experience-history-tile-${theme.name}` : `experience-history-tile-alt-${theme.name}`;
          return (
            <div key={itemKey} className={experienceTileClass}>
              <ul>
                <li className={`experience-company-${theme.name}`}>
                    {`${item['company']}`}
                </li>
                <li className={`experience-title-location-${theme.name}`}>
                  {`${item['title']} - ${item['location']}`}
                </li>
                <li className={`experience-started-ended-${theme.name}`}>
                  {`${item['started']} - ${item['ended']}`}
                </li>
                <li className={`experience-show-more-${theme.name}`}>
                  <button className={`experience-show-more-button-${theme.name}`}>More</button>
                </li>
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Experience;