import { useEffect } from "react";
import {
  useMotionValue,
  useSpring,
} from "framer-motion";

export default function useMouseParallax(strength = 20) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
  stiffness: 110,
  damping: 22,
  mass: 0.4,
});

  const y = useSpring(mouseY, {
  stiffness: 110,
  damping: 22,
  mass: 0.4,
});

  useEffect(() => {
    function handleMouseMove(e) {
      const { innerWidth, innerHeight } = window;

      const offsetX =
        (e.clientX - innerWidth / 2) / innerWidth;

      const offsetY =
        (e.clientY - innerHeight / 2) / innerHeight;

      mouseX.set(offsetX * strength * 2);
      mouseY.set(offsetY * strength * 2);
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
  }, [mouseX, mouseY, strength]);

  return { x, y };
}