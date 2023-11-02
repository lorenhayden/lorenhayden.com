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
      <h1 id="header">Work Experience</h1>
      <div id="content">
        {experience.map((item, index) => {
          const itemKey = `company-${index}`
          const experienceClass = (index % 2 === 0) ? 'experience-tile' : 'experience-tile-alt';
          return (
            <div key={itemKey} className={experienceClass}>
              <ul>
                <li>
                    {`${item['company']}`}
                </li>
                <li>
                  {`${item['title']} - ${item['location']}`}
                </li>
                <li>
                  {`${item['started']} - ${item['ended']}`}
                </li>
                <li>
                  <button>More</button>
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