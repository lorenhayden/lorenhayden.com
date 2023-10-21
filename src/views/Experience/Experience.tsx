/* imports */
import { useTheme } from "../../components/Themes/ThemeProvider";

/* sass */
import "../../sass/_views.scss";

const Experience = () => {
  const theme = useTheme();
  return (
    <div id="experience" className={`view-${theme}`}>
      [Experience]
    </div>
  )
}

export default Experience;