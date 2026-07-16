import { motion } from "framer-motion";

function BackgroundEffects() {
  return (
    <>
      {/* ================= BLUE GLOW ================= */}

      <motion.div
        className="absolute top-10 right-16 h-96 w-96 rounded-full bg-blue-400/30 blur-[120px]"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ================= ORANGE GLOW ================= */}

      <motion.div
        className="absolute bottom-10 left-12 h-72 w-72 rounded-full bg-orange-300/25 blur-[120px]"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.18, 0.35, 0.18],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ================= PURPLE GLOW ================= */}

      <motion.div
        className="absolute top-1/3 left-1/3 h-56 w-56 rounded-full bg-violet-400/20 blur-[120px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.28, 0.12],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ================= GRID ================= */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#3b82f6 1px,transparent 1px),
            linear-gradient(to bottom,#3b82f6 1px,transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* ================= PARTICLES ================= */}

      <motion.div
        className="absolute top-24 left-24 h-3 w-3 rounded-full bg-blue-400"
        animate={{
          y: [0, -18, 0],
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-52 right-40 h-2 w-2 rounded-full bg-orange-400"
        animate={{
          y: [0, 16, 0],
          opacity: [0.2, 0.9, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-36 left-1/2 h-2.5 w-2.5 rounded-full bg-violet-400"
        animate={{
          y: [0, -15, 0],
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-28 h-2 w-2 rounded-full bg-cyan-400"
        animate={{
          y: [0, 14, 0],
          opacity: [0.15, 0.8, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
}

export default BackgroundEffects;