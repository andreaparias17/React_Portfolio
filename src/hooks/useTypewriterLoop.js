import { useEffect, useState } from "react";


export function useRotatingText(items = [], intervalMs = 2000, startIndex = 0) {
  const [index, setIndex] = useState(startIndex);

  useEffect(() => {
    if (items.length <= 1) return; // nothing to rotate
    const id = setInterval(() => {
      setIndex(i => (i + 1) % items.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [items, intervalMs]);

  return items.length ? items[index] : "";
}
