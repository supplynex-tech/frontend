"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "../../../lib/utils";

interface AnimatedTextProps {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}

export const AnimatedText = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: AnimatedTextProps) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration,
        delay: stagger(0.2),
      }
    );
  }, [animate, duration, filter]);

  const renderWords = () => (
    <motion.div ref={scope}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="text-primary-700 opacity-0"
          style={{
            filter: filter ? "blur(10px)" : "none",
          }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-primary-700 text-md lg:text-xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
