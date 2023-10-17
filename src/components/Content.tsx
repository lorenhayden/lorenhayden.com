/* imports */
import { useTheme } from './ThemeProvider';
import { Routes, Route} from 'react-router-dom';

/* sass */
import '../sass/_components.scss';

/* views */
import Home from './Home';
import Experience from './Experience';
import Skills from './Skills';
import Contact from './Contact';


const Content = ( ) => {
  const theme = useTheme();
  return (
    <div className={`content-${theme}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default Content;
