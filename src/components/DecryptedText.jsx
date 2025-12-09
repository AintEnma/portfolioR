import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';

const styles = {
  wrapper: {
    display: 'inline-block',
    whiteSpace: 'pre-wrap',
    textAlign: 'center',
    fontFamily: 'couture-bld'
  },
  srOnly: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0,0,0,0)',
    border: 0
  }
};

export default function DecryptedText({
  text,
  useOriginalCharsOnly = false,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'view',
  revealDirection="center",
  ...props
}) {
  const [displayText, setDisplayText] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [decryptionIndex, setDecryptionIndex] = useState(0);
  const containerRef = useRef(null);

  const availableChars = useOriginalCharsOnly
    ? Array.from(new Set(text.split(''))).filter(char => char !== ' ')
    : characters.split('');

  const shuffleText = (originalText) => {
    if (useOriginalCharsOnly) {
      const positions = originalText.split('').map((char, i) => ({
        char,
        isSpace: char === ' ',
        index: i
      }));

      const nonSpaceChars = positions.filter(p => !p.isSpace).map(p => p.char);

      for (let i = nonSpaceChars.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [nonSpaceChars[i], nonSpaceChars[j]] = [nonSpaceChars[j], nonSpaceChars[i]];
      }

      let charIndex = 0;
      return positions
        .map(p => {
          if (p.isSpace) return ' ';
          return nonSpaceChars[charIndex++];
        })
        .join('');
    } else {
      return originalText
        .split('')
        .map((char) => {
          if (char === ' ') return ' ';
          return availableChars[Math.floor(Math.random() * availableChars.length)];
        })
        .join('');
    }
  };

  useEffect(() => {
    const shuffled = shuffleText(text);
    setDisplayText(shuffled);
    setDecryptionIndex(0);
  }, [text]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDecryptionIndex(prev => {
        if (prev < text.length) {
          const newDisplay = text.slice(0, prev + 1) + shuffleText(text.slice(prev + 1));
          setDisplayText(newDisplay);
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 100); // Adjust speed as needed
    return () => clearInterval(interval);
  }, [text]);

  useEffect(() => {
    if (isHovering) {
      setDisplayText(text);
    } else {
      setDisplayText(shuffleText(text));
    }
  }, [isHovering, text]);

  useEffect(() => {
    if (animateOn !== 'view' && animateOn !== 'both') return;

    const observerCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsHovering(true);
          setHasAnimated(true);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animateOn, hasAnimated]);

  const hoverProps =
    animateOn === 'hover' || animateOn === 'both'
      ? {
          onMouseEnter: () => setIsHovering(true),
          onMouseLeave: () => setIsHovering(false)
        }
      : {};

  return (
    <motion.span className={parentClassName} ref={containerRef} style={styles.wrapper} {...hoverProps} {...props}>
      <span aria-hidden="true">
        {displayText.split('').map((char, index) => {
          return (
            <span key={index} className={char === ' ' ? className : (isHovering ? className : encryptedClassName)}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          );
        })}
      </span>
    </motion.span>
  );
}
