/* imports */
import { FC } from 'react';
import { useTheme } from './components/ThemePicker';
import data from './data.json';


/* sass */
import "./App.scss";


const getCategorySkills = (category: string, skills: any): string[] => {
  if (category && skills) {
    const categorySkills = skills[category];
    return categorySkills
  }
  return [];
}


const Skills: FC = () => {
  const theme = useTheme();
  const skills = data['skills'];
  const categories = skills['categories'];
  return (
    <section id="skills" className={`skills-${theme.name}`}>
      {categories.map((category: string, index: number) => {
        const categoryKey = `category-${index}`;
        const categorySkills = getCategorySkills(category, skills);
        return (
          <div key={categoryKey}>
            <h2 >
              {category}
            </h2>
            <ul>
              {categorySkills.map((categorySkill: string, index: number) => {
                const categorySkillKey = `${categoryKey}-skill-${index}`;
                return (
                  <li key={categorySkillKey}>
                    {categorySkill}
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </section>
  )
}

export default Skills;