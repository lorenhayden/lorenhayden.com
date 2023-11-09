// imports
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useState, useRef, useEffect } from 'react';
import { faHome, faList, faChartSimple, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faCodepen, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Mesh, DirectionalLight, PointLight } from 'three';
import { useControls } from 'leva';

/* components */
import ThemePicker, { ThemeDefinition, getTheme, useTheme } from './components/ThemePicker';
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


const Lights = () => {
  const theme = useTheme();
  const lightRef = useRef<DirectionalLight>(null);
  const lightRef2 = useRef<DirectionalLight>(null);
  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.intensity = theme.name === 'light' ? 5 : 10
      lightRef.current.position.x = -10;
      lightRef.current.position.y = 10;
      lightRef.current.position.z = -10;
      lightRef.current.color.set("#00aeff");
      lightRef.current.castShadow = true;
    }
    if (lightRef2.current) {
      lightRef2.current.intensity = theme.name === 'light' ? 5 : 10;
      lightRef2.current.position.x = 10;
      lightRef2.current.position.y = 10;
      lightRef2.current.position.z = 10;
      lightRef2.current.color.set("#00aeff");
      lightRef2.current.castShadow = true;
    }
  })

  return (
    <>
      <directionalLight ref={lightRef} />
      <directionalLight ref={lightRef2} />
    </>
  )
}

const Scene = () => {
  const object = useGLTF('./assets/website.glb');
  const meshRef = useRef<Mesh>(null);
  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.position.set(0, -20, 0);
      meshRef.current.rotation.set(0, -Math.PI / 2, 0);
      meshRef.current.scale.set(5, 5, 5);
    }
  }, [])

  useFrame(() => {
    if (meshRef.current) {
      let movez = meshRef.current.position.z + 0.035;
      if (movez >= 50) {
        movez = 1.0;
      }
      meshRef.current.position.set(0, -20, movez);
    }
  })
  return (
    <group>
      <primitive ref={meshRef} object={object.scene} />
    </group>
  )
}


const App = () => {
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
  const backgroundColor = (theme.name === 'light') ? '#f1f1f1' : 'black';
  return (
    <ThemePicker onThemeChanged={onThemeChanged}>
      <Canvas camera={{ position: [0, 3, 5] }}
        style={{ "width": "100vw", "height": "100vh", "backgroundColor": backgroundColor, "zIndex": "-1" }}
        shadows>
        <Lights />
        <Scene />
        <OrbitControls />
      </Canvas>
      {/* <AnimatedCursor /> */}
      <Hamburger expanded={sidebarExpanded} onChanged={onHamburgerChanged} />
      <Sidebar expanded={sidebarExpanded}>
        <SidebarItem icon={faHome} caption="home" url="/" onChanged={onSidebarItemClicked} />
        <SidebarItem icon={faList} caption="experience" url="#experience" onChanged={onSidebarItemClicked} />
        <SidebarItem icon={faChartSimple} caption="skills" url="#skills" onChanged={onSidebarItemClicked} />
        <SidebarItem icon={faAddressCard} caption="contact" url="#contact" onChanged={onSidebarItemClicked} />
      </Sidebar>
      <div id="app-header" className={`app-${theme.name}`}>
        <header className={`app-header-${theme.name}`}>
          <Menu>
            <MenuItem icon={faHome} caption="home" url="/" />
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