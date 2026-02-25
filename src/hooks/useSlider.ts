import { useState, useCallback } from "react";

export function useSlider(length: number) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % length);
  }, [length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + length) % length);
  }, [length]);

  return { current, next, prev };
}
