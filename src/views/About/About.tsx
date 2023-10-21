/* imports */
import { useTheme } from "../../components/Themes/ThemeProvider";

/* sass */
import "../../sass/_views.scss";

const About = () => {
  const theme = useTheme();
  return (
    <div id="about" className={`view-${theme}`}>
      [About]
    </div>
  )
}

export default About;