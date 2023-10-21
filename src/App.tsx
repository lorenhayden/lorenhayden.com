// imports
import ThemeProvider, { useTheme } from './components/Themes/ThemeProvider'
import { Routes, Route } from 'react-router-dom';
import { faHome, faQuestion, faList, faChartSimple, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import Menu, { MenuItem } from './components/Menu/Menu';
import Sidebar, { SidebarButton } from './components/Sidebar/Sidebar';
import Cursor from './components/Cursor/Cursor';


/* views */
import Home from './views/Home/Home';
import About from './views/About/About';
import Experience from './views/Experience/Experience';
import Skills from './views/Skills/Skills';
import Contact from './views/Contact/Contact';

/* sass */
import './sass/_scroller.scss';


function App() {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Cursor />
      <Menu>
        <MenuItem icon={faHome} url="/" caption="Home" />
        <MenuItem icon={faQuestion} url="/about" caption="About" />
        <MenuItem icon={faList} url="/experience" caption="Experience" />
        <MenuItem icon={faChartSimple} url="/skills" caption="Skills" />
        <MenuItem icon={faAddressCard} url="/contact" caption="Contact" />
      </Menu>
      <Sidebar>
        <SidebarButton icon={faHome} tooltip="Home" url="/" />
        <SidebarButton icon={faQuestion} tooltip="About" url="/about" />
        <SidebarButton icon={faList} tooltip="Experience" url="/experience" />
        <SidebarButton icon={faChartSimple} tooltip="Skills" url="/skills" />
        <SidebarButton icon={faAddressCard} tooltip="Contact" url="/contact" />
      </Sidebar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App

