import { useEffect, useRef, useState } from 'react';

export const useTypewriter = (
  texts: string[],
  typingSpeed: number = 100,
  holdTime: number = 3000,
) => {
  const [displayText, setDisplayText] = useState('');
  const isCancelled = useRef(false);
  const timeoutId = useRef<number>(null);

  useEffect(() => {
    isCancelled.current = false;
    const typeCharacter = (charIndex: number, textIndex: number) => {
      if (isCancelled.current) return;
      const currentText = texts[textIndex];
      setDisplayText(currentText.slice(0, charIndex + 1));

      if (charIndex === currentText.length) {
        const nextTextIndex = (textIndex + 1) % texts.length;
        timeoutId.current = window.setTimeout(
          () => typeCharacter(0, nextTextIndex),
          holdTime,
        );
      } else {
        timeoutId.current = window.setTimeout(
          () => typeCharacter(charIndex + 1, textIndex),
          typingSpeed,
        );
      }
    };

    typeCharacter(0, 0);

    return () => {
      isCancelled.current = true;
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, [texts, holdTime, typingSpeed]);

  return displayText;
};
