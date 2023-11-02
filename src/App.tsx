// imports
import { useState } from 'react';
import { faHome, faList, faChartSimple, faAddressCard } from '@fortawesome/free-solid-svg-icons';
//import { faCodepen, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


/* components */
import ThemePicker, { ThemeDefinition, getTheme } from './components/ThemePicker';
import Menu, { MenuItem } from './components/Menu.tsx';
import Sidebar, {SidebarItem} from './components/Sidebar.tsx';

// import Home from './Home.tsx';
// import Experience from './Experience.tsx';
// import Contact from './Contact.tsx';
// import Skills from './Skills.tsx';

/* sass */
import "./App.scss";


function App() {
  const [theme, setTheme] = useState(getTheme());
  const onThemeChanged = (theme: ThemeDefinition) => {
    setTheme(theme);
  }
  return (
    <ThemePicker onThemeChanged={onThemeChanged}>
      <div className={`app-${theme.name}`}>
        <header className={`app-header-${theme.name}`}>
          <Menu>
            <MenuItem icon={faHome} caption="home" url="#home"/>
            <MenuItem icon={faList} caption="experience" url="#experience"/>
            <MenuItem icon={faChartSimple} caption="skills" url="#skills"/>
            <MenuItem icon={faAddressCard} caption="contact" url="#contact"/>
          </Menu>
          <Sidebar>
            <SidebarItem icon={faHome} caption="home" url="#home"/>
            <SidebarItem icon={faList} caption="experience" url="#experience"/>
            <SidebarItem icon={faChartSimple} caption="skills" url="#skills"/>
            <SidebarItem icon={faAddressCard} caption="contact" url="#contact"/>
          </Sidebar>
        </header>
        <div className={`app-content-${theme.name}`}>
          [Content]
        </div>
        <footer className={`app-footer-${theme.name}`}>
          [Footer]
        </footer>
      </div>
    </ThemePicker>
  )
}

export default App