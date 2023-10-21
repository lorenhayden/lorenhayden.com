/* imports */
import { FC, useState, useEffect } from 'react';
import { useTheme } from '../Themes/ThemeProvider';

/* sass */
import './_word_animator.scss';

interface WordAnimatorProps {
  words: string[],
  duration: number, /* milliseconds to wait between each interval */
  delay?: number /* milliseconds to delay */
}

const WordAnimator: FC<WordAnimatorProps> = (props: WordAnimatorProps) => {
  const theme = useTheme();
  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      let nextWordIndex = wordIndex + 1;
      if (nextWordIndex >= props.words.length) {
        nextWordIndex = 0;
      }
      setWordIndex(nextWordIndex);
    }, props.duration)
    return () => {
      clearInterval(intervalId);
    }
  }, [wordIndex])
  return (
    <span className={`word-animator-${theme}`}>
      {props.words[wordIndex]}
    </span>
  )
}

export default WordAnimator;