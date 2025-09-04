// src/hooks/useTypewriter.js
import { useEffect, useState } from "react";

export function useTypewriter(text, speed = 200, startDelay = 0) {
  const [out, setOut] = useState("");

  useEffect(() => {
    let timerId;
    let active = true;          
    setOut("");                 

    const run = (i) => {
      if (!active) return;
      if (i > text.length) return;
      setOut(text.slice(0, i));             
      timerId = setTimeout(() => run(i + 1), speed);
    };

   
    timerId = setTimeout(() => run(1), startDelay);

    return () => {
      active = false;
      clearTimeout(timerId);
    };
  }, [text, speed, startDelay]);

  return out;
}

