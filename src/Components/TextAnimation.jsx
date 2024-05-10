import { useState, useEffect } from "react";
import "../assets/TextAnimation.css";

const TextAnimation = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Hi", "It's me."];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 1500);

    return () => clearInterval(intervalId);
  }, [texts.length]);

  return <div className="AnimatedText">{texts[textIndex]}</div>;
};

export default TextAnimation;
