import React, { useEffect } from 'react';

const useOutsideClick = (
  ref: React.RefObject<HTMLElement>,
  handler: (event: Event) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (
        !ref.current ||
        (event.target && ref.current.contains(event?.target as Node))
      ) {
        return;
      }
      document.body.style.overflow = '';
      handler(event);
    };
    const keyboardListener = (event: KeyboardEvent) => {
      if (ref.current && event.key === 'Escape') {
        document.body.style.overflow = '';
        handler(event);
      }
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    document.addEventListener('keydown', keyboardListener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
      document.removeEventListener('keydown', keyboardListener);
    };
  }, [ref, handler]);
};

export { useOutsideClick };
