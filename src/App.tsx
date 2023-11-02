// imports
import { useState } from 'react';
import { faHome, faList, faChartSimple, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faCodepen, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


/* components */
import ThemePicker, { ThemeDefinition, getTheme } from './components/ThemePicker';
import Menu, { MenuItem } from './components/Menu.tsx';
import Hamburger from './components/Hamburger.tsx';
import Sidebar, { SidebarItem } from './components/Sidebar.tsx';
import Toolbar, { ToolbarIcon } from './components/Toolbar.tsx';

/* sass */
import "./App.scss";

// import Home from './Home.tsx';
// import Experience from './Experience.tsx';
// import Skills from './Skills.tsx';
// import Contact from './Contact.tsx';

function App() {
  const [theme, setTheme] = useState(getTheme());
  const [sidebarexpanded, setSidebarExpanded] = useState(false);
  const onThemeChanged = (theme: ThemeDefinition) => {
    setTheme(theme);
  }
  const onHamburgerChanged = (expanded: boolean) => {
    setSidebarExpanded(expanded);
  }
  return (
    <ThemePicker onThemeChanged={onThemeChanged}>
      <Hamburger onChanged={onHamburgerChanged} />
      <div className={`app-${theme.name}`}>
        <header className={`app-header-${theme.name}`}>
          <Menu>
            <MenuItem icon={faHome} caption="home" url="#home" />
            <MenuItem icon={faList} caption="experience" url="#experience" />
            <MenuItem icon={faChartSimple} caption="skills" url="#skills" />
            <MenuItem icon={faAddressCard} caption="contact" url="#contact" />
          </Menu>
        </header>
        <div className={`app-content-${theme.name}`}>
          <Sidebar expanded={sidebarexpanded}>
            <SidebarItem icon={faHome} caption="home" url="#home" />
            <SidebarItem icon={faList} caption="experience" url="#experience" />
            <SidebarItem icon={faChartSimple} caption="skills" url="#skills" />
            <SidebarItem icon={faAddressCard} caption="contact" url="#contact" />
          </Sidebar>
          {/* <Home />
          <Experience />
          <Skills />
          <Contact /> */}
        </div>
        <footer className={`app-footer-${theme.name}`}>
          <Toolbar>
            <ToolbarIcon icon={faLinkedin} url="https://linkedin.com/in/loren-hayden-1b0bbb52"/>
            <ToolbarIcon icon={faGithub} url="https://github.com/lorenhayden"/>
            <ToolbarIcon icon={faCodepen} url="https://codepen.io/lorenhayden"/>
          </Toolbar>
        </footer>
      </div>
    </ThemePicker>
  )
}

export default App