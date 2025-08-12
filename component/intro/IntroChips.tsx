'use client';

import { useState, useEffect } from 'react';

export default function IntroChips({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState<number>(0);
  const [displayText, setDisplayText] = useState('');
  useEffect(() => {
    const tokenList = texts[index].split('');
    let characterIndex = 0;

    const interval = setInterval(() => {
      const current = tokenList.slice(0, characterIndex + 1);
      setDisplayText(current.join(''));

      characterIndex++;

      if (characterIndex >= tokenList.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIndex(prev => (prev + 1) % texts.length);
        }, 3000);
      }
    }, 70);

    return () => clearInterval(interval);
  }, [index, texts]);
  return (
    <div
      className={
        'text-surface-500 ml-2 flex items-center gap-2 text-sm lg:text-base'
      }
    >
      <div
        aria-hidden={true}
        className={'relative h-2 w-2'}
      >
        <div
          className={'bg-primary absolute h-2 w-2 animate-ping rounded-full'}
        />
        <div className={'bg-primary absolute h-2 w-2 rounded-full'} />
      </div>
      {displayText}
    </div>
  );
}
