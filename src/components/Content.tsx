/* imports */
import { useTheme } from './ThemeProvider';
import { Routes, Route} from 'react-router-dom';

/* sass */
import '../sass/_components.scss';

const Home = ( ) => {
  return (
    <div>
      [Home]
    </div>
  )
}

const Experience = ( ) => {
  return (
    <div>
      [Experience]      
    </div>
  )
}

const Skills = ( ) => {
  return (
    <div>
      [Skills]
    </div>
  )
}

const Contact = ( ) => {
  return (
    <div>
      [Contact]
    </div>
  )
}


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
