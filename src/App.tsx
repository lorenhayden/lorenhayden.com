// imports
import { useState } from 'react';
import { faHome, faList, faChartSimple, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faCodepen, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


/* components */
import ThemePicker, { ThemeDefinition, getTheme } from './components/ThemePicker';
import AnimatedCursor from './components/Cursor.tsx';
import Menu, { MenuItem } from './components/Menu.tsx';
import Hamburger from './components/Hamburger.tsx';
import Sidebar, { SidebarItem } from './components/Sidebar.tsx';
import Toolbar, { ToolbarIcon } from './components/Toolbar.tsx';

/* sass */
import "./App.scss";

import Home from './Home.tsx';
import Experience from './Experience.tsx';
import Skills from './Skills.tsx';
import Contact from './Contact.tsx';



function App() {
  const [theme, setTheme] = useState(getTheme());
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  const onThemeChanged = (theme: ThemeDefinition) => {
    setTheme(theme);
  }

  const onHamburgerChanged = (expanded: boolean) => {
    setSidebarExpanded(expanded);
  }

  const onSidebarItemClicked = (expanded: boolean) => {
    setSidebarExpanded(expanded);
  }

  return (
    <ThemePicker onThemeChanged={onThemeChanged}>
      <AnimatedCursor />
      <Hamburger expanded={sidebarExpanded} onChanged={onHamburgerChanged} />
      <Sidebar expanded={sidebarExpanded}>
        <SidebarItem icon={faHome} caption="home" url="#home" onChanged={onSidebarItemClicked} />
        <SidebarItem icon={faList} caption="experience" url="#experience" onChanged={onSidebarItemClicked} />
        <SidebarItem icon={faChartSimple} caption="skills" url="#skills" onChanged={onSidebarItemClicked} />
        <SidebarItem icon={faAddressCard} caption="contact" url="#contact" onChanged={onSidebarItemClicked} />
      </Sidebar>
      <div id="app-header" className={`app-${theme.name}`}>
        <header className={`app-header-${theme.name}`}>
          <Menu>
            <MenuItem icon={faHome} caption="home" url="#home" />
            <MenuItem icon={faList} caption="experience" url="#experience" />
            <MenuItem icon={faChartSimple} caption="skills" url="#skills" />
            <MenuItem icon={faAddressCard} caption="contact" url="#contact" />
          </Menu>
        </header>
        <div id="app-content" className={`app-content-${theme.name}`}>
          <section id="home">
            <Home />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
        <footer id="app-footer" className={`app-footer-${theme.name}`}>
          <Toolbar>
            <ToolbarIcon icon={faLinkedin} url="https://linkedin.com/in/loren-hayden-1b0bbb52" />
            <ToolbarIcon icon={faGithub} url="https://github.com/lorenhayden" />
            <ToolbarIcon icon={faCodepen} url="https://codepen.io/lorenhayden" />
          </Toolbar>
          <span>All Content on this page is  © Copyright by Loren Hayden. All rights reserved 2023.</span>
        </footer>
      </div>
    </ThemePicker>
  )
}

export default App