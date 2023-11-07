/* imports */
import { FC, useState, useEffect, useRef } from 'react';
import { useTheme } from "./ThemePicker"

/* sass */
import '../sass/_autoscroller.scss';

/* enum declares */
enum AutoScrollerStates {
  FadeIn = 0,
  FadeOut = 1,
  UpdateText = 2
}

/* type definitioins */
type AutoScrollerProps = {
  titles: string[]
}

/* intersect observer config */
const observerConfig = {
  root: document.getElementById("app-content"),
  threshold: 0.5,
  rootMargin: "70px"
}

let intervalId = 0;

const AutoScoller: FC<AutoScrollerProps> = ({ titles }) => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [autoScrollerState, setAutoScrollerState] = useState(AutoScrollerStates.FadeOut);
  const [titleIndex, setTitleIndex] = useState(0);

  const onUpdateAutoScrollerState = () => {
    if (autoScrollerState === AutoScrollerStates.FadeIn) {
      fadeIn();
    } else if (autoScrollerState === AutoScrollerStates.FadeOut) {
      fadeOut();
    } else if (autoScrollerState === AutoScrollerStates.UpdateText) {
      updateText();
    }
  }

  const fadeIn = () => {
    const element = document.querySelector(`.auto-scroller-${theme.name}`)
    if (element) {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
      setAutoScrollerState(AutoScrollerStates.FadeOut);
    }
  }

  const fadeOut = () => {
    const element = document.querySelector(`.auto-scroller-${theme.name}`)
    if (element) {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
      setAutoScrollerState(AutoScrollerStates.UpdateText);
    }
  }

  const updateText = () => {
    const element = document.querySelector(`.auto-scroller-${theme.name}`)
    if (element) {
      let nextTitleIndex = titleIndex + 1;
      if (nextTitleIndex >= titles.length) {
        nextTitleIndex = 0;
      }
      setTitleIndex(nextTitleIndex);
      setAutoScrollerState(AutoScrollerStates.FadeIn);
    }
  }

  const onObserve = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    if (entries && observer) {
      entries.forEach(entry => {
        setIsVisible(entry.isIntersecting);
      })
    }
  }

  useEffect(() => {
    if (isVisible) {
      intervalId = setInterval(onUpdateAutoScrollerState, 1500)
    } else {
      clearInterval(intervalId);
      setAutoScrollerState(AutoScrollerStates.FadeIn);
      setTitleIndex(0);
      intervalId = 0;
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = 0;
      }
    }
  }, [autoScrollerState, isVisible])

  useEffect(() => {
    const observer = new IntersectionObserver(onObserve, observerConfig)
    const autoScrollerElement = document.querySelector(`.auto-scroller-${theme.name}`)
    if (observer && autoScrollerElement) {
      observer.observe(autoScrollerElement);
      return () => {
        observer.unobserve(autoScrollerElement);
      }
    }
  }, [])

  return (
    <div className={`auto-scroller-${theme.name} fade-in`}>
      {`${titles[titleIndex]}`}
    </div>
  )
}

export default AutoScoller;