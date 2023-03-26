import { useState } from 'react';
import { Typewriter as ReactTypewriter, Cursor } from 'react-simple-typewriter';

interface Props {
  className?: string;
  text: string;
}

export default function Typewriter({
  className = '',
  text,
}: Props): JSX.Element {
  const [typewriterDone, setTypewriterDone] = useState(false);

  return (
    <span className={className}>
      <ReactTypewriter
        words={['', text]}
        delaySpeed={500}
        typeSpeed={90}
        onLoopDone={() => {
          // Note: This has stopped working once used in Astro
          setTypewriterDone(true);
        }}
      />
      {typewriterDone ? <Cursor /> : '|'}
    </span>
  );
}
