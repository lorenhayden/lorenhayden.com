/* imports */
import { useTheme } from "../../components/Themes/ThemeProvider";

/* sass */
import "./_home.scss";

const Home = () => {
  const theme = useTheme();
  return (
    <div className={`home-${theme}`}>
      [Home]
    </div>
  )
}

export default Home;