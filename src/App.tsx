// imports
import ThemeProvider, { useTheme } from './components/ThemeProvider'
import Parallax from './components/Parallax';
import { faHome, faList, faChartSimple, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import Menu, {MenuItem} from './components/Menu';
import Sidebar, { SidebarButton } from './components/Sidebar';


/* views */
import Home from './views/Home';
import Experience from './views/Experience';
import Skills from './views/Skills';
import Contact from './views/Contact';

function App() {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
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
        <Home />
        <Experience />
        <Skills />
        <Contact />
      </Parallax>
    </ThemeProvider>
  )
}

export default App

