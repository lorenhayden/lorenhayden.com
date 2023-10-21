/* imports */
import { useEffect } from "react"
import { useTheme } from "../Themes/ThemeProvider"

/* sass */
import './_cursor.scss';

const Cursor = () => {
  const theme = useTheme();

  const onCursorMove = (e: MouseEvent) => {
    const cursors = document.querySelectorAll(`.cursor-${theme}`)
    const x = e.pageX;
    const y = e.pageY;
    cursors.forEach((cursor) => {
      if (cursor) {
        cursor.setAttribute("style", `left: ${x}px; top: ${y}px`)
      }
    });
  }

  useEffect(() => {
    window.addEventListener('mousemove', onCursorMove)
    return () => {
      window.removeEventListener('mousemove', onCursorMove)
    }
  }, [theme])
  return (
    <>
      <div className={`cursor-${theme}`}></div>
      <div className={`cursor-${theme}`}></div>
      <div className={`cursor-${theme}`}></div>
      <div className={`cursor-${theme}`}></div>
      <div className={`cursor-${theme}`}></div>
      <div className={`cursor-${theme}`}></div>
      <div className={`cursor-${theme}`}></div>
    </>
  )
}

export default Cursor;