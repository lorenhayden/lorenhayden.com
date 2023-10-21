/* imports */
import { FC, ReactNode } from 'react';
import { useTheme } from "../Themes/ThemeProvider"

/* sass */
import "./_parallax.scss";

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
  scaleX: string,
  scaleY: string
}

export interface ParallaxSectionProps {
  images: ParallaxImage[],
  children: ReactNode | ReactNode[]
}

export const ParallaxSection: FC<ParallaxSectionProps> = ({ images, children }) => {
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
              style={{ transform: `translateZ(${image.perspective}) scaleX(${image.scaleX}) scaleY(${image.scaleY})`}}
            />
          )
        })}
      </header>
      <section className={`parralax-section-${theme}`}>
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
