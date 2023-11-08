/* imports */
import { FC, useEffect } from 'react';
import { useTheme } from './components/ThemePicker';
import skills from './data/skills.json';

/* componnents */
import ProgressBar from './components/Progress';

/* sass */
import "./sass/_skills.scss";

/* intersect observer config */
const observerConfig = {
  root: document.getElementById("app-content"),
  threshold: 0.5,
  rootMargin: "70px"
}

type SkillProp = {
  name: string,
  percent: number,
  level: string
}

type CategoryProp = {
  name: string,
  items: SkillProp[]
}

const Skills: FC = () => {
  const theme = useTheme();
  const onObserve = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    if (entries && observer) {
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
  }
  useEffect(() => {
    const observer = new IntersectionObserver(onObserve, observerConfig);
    const percentElements = document.querySelectorAll(`.progress-${theme.name}`)
    if (observer && percentElements) {
      percentElements.forEach(percentElement => {
        observer.observe(percentElement)
      })
    }
    const categoryElements = document.querySelectorAll(`.skill-tile-category-${theme.name}`)
    if (observer && categoryElements) {
      categoryElements.forEach(categoryElement => {
        observer.observe(categoryElement)
      })
    }
    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
  }, [])
  return (
    <div className={`skills-${theme.name}`}>
      <h1 className={`skills-header-${theme.name}`}>
        Skills
      </h1>
      <div className={`skills-content-${theme.name}`}>
        {skills.map((category: CategoryProp, categoryIndex: number) => {
          const categoryKey = `category-${categoryIndex}`
          return (
            <div key={categoryKey} className={`skill-tile-${theme.name} fade-in`}>
              <h2 className={`skill-tile-category-${theme.name} fade-in`}>
                {category.name}
              </h2>
              <ul className={`skill-tile-skills-${theme.name}`}>
                {category.items.map((skill: SkillProp, skillIndex: number) => {
                  const itemKey = `${categoryKey}-skill-${skillIndex}`
                  return (
                    <li key={itemKey}>
                      <ProgressBar title={skill.name} bartitle={skill.level} percent={skill.percent} />
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills;