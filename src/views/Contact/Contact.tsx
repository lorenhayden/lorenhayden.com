/* imports */
import { useTheme } from "../../components/Themes/ThemeProvider";

/* sass */
import "../../sass/_views.scss";

const Contact = () => {
  const theme = useTheme();
  return (
    <div id="contact" className={`view-${theme}`}>
      [Contact]
    </div>
  )
}

export default Contact;