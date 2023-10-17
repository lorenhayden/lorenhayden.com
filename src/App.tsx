// imports
import ThemeProvider, {useTheme} from './components/ThemeProvider'
import { faHome, faList, faChartSimple, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import Menu, {MenuItem} from './components/Menu';
import Sidebar, { SidebarButton } from './components/Sidebar';
import Content from './components/Content';

function App() {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Menu>
        <MenuItem caption="home" url="/" icon={faHome} />
        <MenuItem caption="experience" url="/experience" icon={faList} />
        <MenuItem caption="skills" url="/skills" icon={faChartSimple} />
        <MenuItem caption="contact" url="/contact" icon={faAddressCard} />
      </Menu>
      <Sidebar>
        <SidebarButton icon={faHome} url="/" tooltip="Go Home" />
        <SidebarButton icon={faList} url="/experience" tooltip="Work Experience" />
        <SidebarButton icon={faChartSimple} url="/skills" tooltip="Developer Skills" />
        <SidebarButton icon={faAddressCard} url="/contact" tooltip="Get contact information" />
      </Sidebar>
      <Content />
    </ThemeProvider>
  )
}

export default App

