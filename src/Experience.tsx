/* imports */
import { useTheme } from './components/ThemePicker';
//import data from "./data.json";

/* sass */
import "./sass/_experience.scss";


const Experience = () => {
  const theme = useTheme();
  return (
    <section className={`experience-${theme.name}`}>
      <h1 className={`experience-header-${theme.name}`}>
        Work Experience
      </h1>
      <div className={`experience-content-${theme.name}`}>
        [Content]
      </div>
    </section>

  )
}

export default Experience;