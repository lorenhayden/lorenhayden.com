/* imports */
import { useTheme } from "../../components/Themes/ThemeProvider";

/* sass */
import "./_experience.scss";

const Experience = () => {
  const theme = useTheme();
  return (
    <div className={`experience-${theme}`}>
      [Experience]
    </div>
  )
}

export default Experience;