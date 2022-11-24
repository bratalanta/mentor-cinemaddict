import { useEffect } from 'react';

export const useOutside = (ref: any) => {
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);
};
