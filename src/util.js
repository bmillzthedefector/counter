import { useEffect, useCallback } from 'react';

export function setMinimum(fn, min=1) {
  return (arg) => {
    if (arg < min) {
      arg = min;
    }
    fn(arg);
  }
}

export function useKeyHandler(keyHandler) {
  const handler = useCallback(keyHandler, [keyHandler]);
    useEffect(() => {
        document.addEventListener('keydown', handler);
        return () => {
            document.removeEventListener('keydown', handler);
        };
    }, [handler]);
}
