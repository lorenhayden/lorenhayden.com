/* imports */
import { useEffect } from 'react';
import { useTheme } from './components/ThemePicker';
import data from "./data.json";

/* sass */
import "./sass/_home.scss";

/* intersect observer config */
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
    const imageElement = document.getElementById("image");
    if (imageElement) {
      observer.observe(imageElement)
    }
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
    <section className={`home-${theme.name}`}>
      <img id="image" className={`home-image-${theme.name} fade-in`} src="me.png" alt="Face picture of Loren Hayden" />
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
  )
}

export default Home;