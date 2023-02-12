import { useCallback, useState } from 'react';

export function useCount(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  const increment = useCallback(() => setCount((c) => c + 1), []);
  const decrement = useCallback(() => setCount((c) => c - 1), []);
  const reset = useCallback(() => setCount(initialCount), [initialCount]);

  return { count, increment, decrement, reset };
}
