/* imports */
import { useEffect } from 'react';
import { useTheme } from './components/ThemePicker';
import home from "./data/home.json";

/* sass */
import "./sass/_home.scss";
import AutoScoller from './components/AutoScroller';

/* intersect observer config */
const observerConfig = {
  root: document.getElementById("app-content"),
  threshold: 0.5,
  rootMargin: "70px"
}

const Home = () => {
  const theme = useTheme();
  const name = home["name"]
  const titles = home["titles"]
  useEffect(() => {
    const onObserve = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      if (entries && observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
            entry.target.classList.remove('fade-out');
          } else {
            entry.target.classList.add('fade-out');
            entry.target.classList.remove('fade-in')
          }
        })
      }
    }
    const observer = new IntersectionObserver(onObserve, observerConfig);
    const canvasElement = document.getElementById("home-canvas");
    if (canvasElement) {
      observer.observe(canvasElement)
    }
    const aboutElement = document.getElementById("about");
    if (aboutElement) {
      observer.observe(aboutElement)
    }
    const nameElement = document.getElementById("name");
    if (nameElement) {
      observer.observe(nameElement)
    }
    const introElement = document.getElementById("intro");
    if (introElement) {
      observer.observe(introElement)
    }
    const titleElement = document.getElementById("title");
    if (titleElement) {
      observer.observe(titleElement)
    }
    const downloadElement = document.getElementById("download");
    if (downloadElement) {
      observer.observe(downloadElement)
    }
  }, [])
  return (
    <section className={`home-${theme.name}`}>
      <div id="about" className={`home-about-${theme.name} fade-in`}>
        Hi, my name is,
      </div>
      <div  id="name" className={`home-name-${theme.name} fade-in`}>
        {name}
      </div >
      <div id="intro" className={`home-intro-${theme.name}`}>
        I am a,
      </div>
      <div id="title" className={`home-title-${theme.name} fade-in`}>
        <AutoScoller titles={titles} />
      </div>
      <a id="download" className={`home-download-${theme.name} fade-in`} href="./assets/lorenhaydenresume.pdf" target="_blank">
        Download Resume
      </a>
    </section >
  )
}

export default Home;