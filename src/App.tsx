// imports
import ThemeProvider, { useTheme } from './components/Themes/ThemeProvider'
import Parallax, { ParallaxSection, ParallaxImage } from './components/Parallax/Parallax';
import { faHome, faList, faChartSimple, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import Menu, { MenuItem } from './components/Menu/Menu';
import Sidebar, { SidebarButton } from './components/Sidebar/Sidebar';
import Cursor from './components/Cursor/Cursor';


/* views */
import Home from './views/Home/Home';
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
        <MenuItem icon={faHome} url="#home" caption="Home" />
        <MenuItem icon={faList} url="#experience" caption="Experience" />
        <MenuItem icon={faChartSimple} url="#skills" caption="Skills" />
        <MenuItem icon={faAddressCard} url="#contact" caption="Contact" />
      </Menu>
      <Sidebar>
        <SidebarButton icon={faHome} tooltip="Home" url="#home" />
        <SidebarButton icon={faList} tooltip="Experience" url="#experience" />
        <SidebarButton icon={faChartSimple} tooltip="Skills" url="#skills" />
        <SidebarButton icon={faAddressCard} tooltip="Contact" url="#contact" />
      </Sidebar>
      <Parallax>
        <ParallaxSection images={[]}>
          <Home />
          <Experience />
          <Skills />
          <Contact />
        </ParallaxSection>
      </Parallax>
    </ThemeProvider>
  )
}

export default App

