/* imports */
import { FC } from 'react';
import { useTheme } from './components/ThemePicker';
// import data from './data.json';


/* sass */
import "./sass/_skills.scss";

const Skills: FC = () => {
  const theme = useTheme();
  // const skills = data['skills'];
  // const categories = skills['categories'];
  return (
    <div className={`skills-${theme.name}`}>
      <h1 className={`skills-header-${theme.name}`}>
        Skills
      </h1>
      <div className={`skill-content-${theme.name}`}>
        [Content]
      </div>
    </div>
  )
}

export default Skills;