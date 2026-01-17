/** @jsxImportSource @emotion/react */

import { motion } from "framer-motion";
import { colors, gradients } from "../styles/theme";

export const FloatingElements = () => {
  const elements = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div
      css={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: -1,
      }}
    >
      {elements.map((element) => (
        <motion.div
          key={element.id}
          css={{
            position: "absolute",
            width: `${element.size}px`,
            height: `${element.size}px`,
            background:
              element.id % 2 === 0 ? gradients.primary : gradients.secondary,
            borderRadius: "50%",
            opacity: 0.1,
            filter: "blur(1px)",
          }}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Gradient overlays */}
      <div
        css={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.1) 0%, transparent 50%)
          `,
        }}
      />
    </div>
  );
};
