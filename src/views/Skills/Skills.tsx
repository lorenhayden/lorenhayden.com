/* imports */
import { useTheme } from "../../components/Themes/ThemeProvider";

/* sass */
import "../../sass/_views.scss";

const Skills = () => {
  const theme = useTheme();
  return (
    <div id="skills" className={`view-${theme}`}>
      [Skills]
    </div>
  )
}

export default Skills;