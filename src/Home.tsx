/* imports */
import { useEffect } from 'react';
import { useTheme } from './components/ThemePicker';
import SceneCanvas from './components/SceneCanvas';
import data from "./data.json";

/* sass */
import "./sass/_home.scss";

/* declarations */
const observerConfig = {
  root: document.getElementById("app-content"),
  threshold: 0.5,
  rootMargin: "70px"
}

const Home = () => {
  const theme = useTheme();
  const name = data["name"]
  const titles = data["titles"]
  useEffect(() => {
    const onIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
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
    const observer = new IntersectionObserver(onIntersect, observerConfig);
    const nameElement = document.getElementById("name");
    if (nameElement) {
      observer.observe(nameElement)
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
    <>
      <SceneCanvas />
      <section id="home" className={`home-${theme.name}`}>
        <h2 id="name" className={`home-name-${theme.name} fade-in`}>
          {name}
        </h2>
        <h3 id="title" className={`home-title-${theme.name} fade-in`}>
          {titles[0]}
        </h3>
        <a id="download" className={`home-download-${theme.name} fade-in`} href="./assets/lorenhaydenresume.pdf" target="_blank">
          Download Resume
        </a>
      </section >
    </>
  )
}

export default Home;