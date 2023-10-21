/* imports */
import { useTheme } from "../../components/Themes/ThemeProvider";

/* sass */
import "./_contact.scss";

const Contact = () => {
  const theme = useTheme();
  return (
    <div className={`contact-${theme}`}>
      [Contact]
    </div>
  )
}

export default Contact;