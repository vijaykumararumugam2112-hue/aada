import { motion } from "framer-motion";
import { useState } from "react";

import DockTooltip from "./DockTooltip";

function DockItem({
  icon: Icon,
  label,
  href,
  color = "#2563EB",
  onClick,
}) {
  const [hovered, setHovered] = useState(false);

  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{
        y: -12,
        scale: 1.15,
      }}
      whileTap={{
        scale: 0.92,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 18,
      }}
      className="
        relative
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        border
        border-white/30
        bg-white/75
        backdrop-blur-xl
        shadow-lg
        overflow-hidden
      "
    >
      {/* Tooltip */}

      <DockTooltip
        show={hovered}
        label={label}
      />

      {/* Glow */}

      <motion.div
        className="
          absolute
          inset-0
          rounded-2xl
        "
        animate={{
          opacity: hovered ? 1 : 0,
        }}
        transition={{
          duration: 0.25,
        }}
        style={{
          background: `radial-gradient(circle at center, ${color}30 0%, transparent 70%)`,
        }}
      />

      {/* Shine */}

      <motion.div
        className="
          absolute
          -left-20
          top-0
          h-full
          w-10
          rotate-12
          bg-white/50
          blur-lg
        "
        initial={{
          x: -120,
        }}
        animate={{
          x: hovered ? 180 : -120,
        }}
        transition={{
          duration: 0.6,
        }}
      />

      {/* Icon */}

      <motion.div
        animate={{
          rotate: hovered ? 8 : 0,
          scale: hovered ? 1.15 : 1,
        }}
        transition={{
          duration: 0.25,
        }}
        style={{
          color,
        }}
        className="relative z-10"
      >
        <Icon size={28} />
      </motion.div>
    </motion.a>
  );
}

export default DockItem;