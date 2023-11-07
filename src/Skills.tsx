/* imports */
import { FC } from 'react';
import { useTheme } from './components/ThemePicker';
import skills from './data/skills.json';

/* componnents */
import ProgressBar from './components/Progress';

/* sass */
import "./sass/_skills.scss";

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
  return (
    <div className={`skills-${theme.name}`}>
      <h1 className={`skills-header-${theme.name}`}>
        Skills
      </h1>
      <div className={`skills-content-${theme.name}`}>
        {skills.map((category: CategoryProp, categoryIndex: number) => {
          const categoryKey = `category-${categoryIndex}`
          return (
            <div key={categoryKey} className={`skill-tile-${theme.name}`}>
              <h2 className={`skill-tile-category-${theme.name}`}>
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