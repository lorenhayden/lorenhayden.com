import { ParralaxSection, ParallaxImage } from "../components/Parallax"

const BackgroundImage: ParallaxImage = {
  src: "./src/assets/Mountain.png",
  description: "Background",
  perspective: "-10px",
  scale: "2"
}

const ForegroundImage: ParallaxImage = {
  src: "./src/assets/Trees.png",
  description: "Foreground",
  perspective: "-5px",
  scale: "1.5"
}


const Experience = () => {
  return (
    <ParralaxSection id="experience" images={[BackgroundImage, ForegroundImage]}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero justo laoreet sit. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. Sed velit dignissim sodales ut eu sem integer vitae. Facilisi nullam vehicula ipsum a. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Faucibus purus in massa tempor nec. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Non consectetur a erat nam. Porttitor eget dolor morbi non. Aliquet eget sit amet tellus cras adipiscing. Vulputate sapien nec sagittis aliquam malesuada. Mattis enim ut tellus elementum. Tristique senectus et netus et malesuada fames ac turpis. Convallis posuere morbi leo urna molestie at. Senectus et netus et malesuada fames ac turpis. Accumsan tortor posuere ac ut consequat.
    </ParralaxSection>
  )
}

export default Experience;