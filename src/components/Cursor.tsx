/* imports */
import { useEffect } from 'react';
import { useTheme } from "./ThemePicker"

/* sass */
import "../sass/_cursor.scss";

const AnimatedCursor = () => {
  const theme = useTheme();
  const onMouseMove = (e: MouseEvent) => {
    const cursorChildren = document.querySelectorAll(`.cursor-${theme.name}`)
    if (cursorChildren) {
      cursorChildren.forEach(childCursor => {
        if (childCursor) {
          const top = e.pageY - 4;
          const left = e.pageX - 4;
          childCursor.setAttribute('style', `left: ${left}px; top: ${top}px;`);
        }
      })
    }
  }

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    }
  })
  return (
    <>
      <i className={`cursor-${theme.name}`} />
      <i className={`cursor-${theme.name}`} />
      <i className={`cursor-${theme.name}`} />
      <i className={`cursor-${theme.name}`} />
      <i className={`cursor-${theme.name}`} />
      <i className={`cursor-${theme.name}`} />
      <i className={`cursor-${theme.name}`} />
      <i className={`cursor-${theme.name}`} />
      <i className={`cursor-${theme.name}`} />
      <i className={`cursor-${theme.name}`} />
    </>
  )
}

export default AnimatedCursor;