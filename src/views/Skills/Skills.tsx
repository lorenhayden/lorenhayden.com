/* imports */
import { useTheme } from "../../components/Themes/ThemeProvider";

/* sass */
import "./_skills.scss";

const Skills = () => {
  const theme = useTheme();
  return (
    <div className={`skills-${theme}`}>
      [Skills]
    </div>
  )
}

export default Skills;