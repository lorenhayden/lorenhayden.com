/* imports */
import { FC, ReactNode } from 'react';
import { useTheme } from "./ThemeProvider"

/* sass */
import "../sass/_components.scss";

/* defaults */
export const DEFAULT_PARALLAX_PERSPECTIVE = "10px";

export interface ParallaxProps {
  perspective?: string /* Default is 10px */,
  children: ReactNode | ReactNode[]
}

export type ParallaxImage = {
  src: string,
  description: string,
  perspective: string,
  scale: string,
}

export interface ParralaxSection {
  id: string,
  images: ParallaxImage[],
  children: ReactNode | ReactNode[]
}

export const ParralaxSection: FC<ParralaxSection> = ({ id, images, children }) => {
  const theme = useTheme();
  return (
    <>
      <header className={`parallax-header-${theme}`}>
        {images.map((image, index) => {
          const imageKey = `parallax-image-${index}`
          return (
            <img
              className={`parallax-image-${theme}`}
              key={imageKey}
              src={image.src}
              alt={image.description}
              style={{ transform: `translateZ(${image.perspective}) scale(${image.scale})` }}
            />
          )
        })}
      </header>
      <section id={id} className={`parralax-section-${theme}`}>
        {children}
      </section>
    </>
  );
}

const Parallax: FC<ParallaxProps> = ({ children, perspective }) => {
  const theme = useTheme();
  return (
    <div className={`parallax-${theme}`} style={{ "perspective": perspective ?? DEFAULT_PARALLAX_PERSPECTIVE }}>
      {children}
    </div>
  )
}

export default Parallax;
