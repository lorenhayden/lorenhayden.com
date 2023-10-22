// imports
import { useState } from 'react';
import { Canvas } from '@react-three/fiber'
import { Routes, Route } from 'react-router-dom';
import { faHome, faQuestion, faList, faChartSimple, faAddressCard } from '@fortawesome/free-solid-svg-icons';

/* components */
import ThemePicker, { ThemeDefinition, getTheme } from './components/ThemePicker';
import Menu, { MenuItem } from './components/Menu';

/* views */
import Home from './views/Home/Home'
import About from './views/About/About'
import Experience from './views/Experience/Experience'
import Skills from './views/Skills/Skills'
import Contact from './views/Contact/Contact'

/* sass */
import './sass/_scroller.scss'

const Lights = () => {
  return (
    <ambientLight />
  )
}

function App() {
  const [theme, setTheme] = useState(getTheme());
  const onThemeChanged = (theme: ThemeDefinition) => {
    setTheme(theme);
  }
  return (
    <ThemePicker onThemeChanged={onThemeChanged}>
      <Canvas camera={{ position: [0, 5, 10] }} style={{ "position": "absolute", "width": "100dvw", "height": "100dvh" }} >
        <color attach="background" args={[theme.primary.background]} />
        <Lights />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Canvas>
      <Menu>
        <MenuItem caption="Home" url="/" icon={faHome} />
        <MenuItem caption="About" url="/about" icon={faQuestion} />
        <MenuItem caption="Experience" url="/experience" icon={faList} />
        <MenuItem caption="Skills" url="/skills" icon={faChartSimple} />
        <MenuItem caption="Contact" url="/contact" icon={faAddressCard} />
      </Menu>
    </ThemePicker>
  )
}

export default App