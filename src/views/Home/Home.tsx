/* imports */
import { useTheme } from "../../components/Themes/ThemeProvider";

/* sass */
import "../../sass/_views.scss";

const Home = () => {
  const theme = useTheme();
  return (
    <div id="home" className={`view-${theme}`}>
      [Home]
    </div>
  )
}

export default Home;