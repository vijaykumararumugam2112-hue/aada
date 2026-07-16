import { motion } from "framer-motion";

const particles = [
  { left: "8%", top: "12%", size: 8, delay: 0 },
  { left: "20%", top: "30%", size: 6, delay: 1 },
  { left: "32%", top: "8%", size: 10, delay: 2 },
  { left: "72%", top: "18%", size: 7, delay: 1.5 },
  { left: "88%", top: "34%", size: 9, delay: 2.4 },
  { left: "82%", top: "68%", size: 8, delay: 0.8 },
  { left: "56%", top: "82%", size: 6, delay: 1.7 },
  { left: "18%", top: "76%", size: 9, delay: 2.2 },
  { left: "40%", top: "58%", size: 5, delay: 1.3 },
  { left: "62%", top: "42%", size: 8, delay: 0.5 },
  { left: "48%", top: "22%", size: 7, delay: 1.8 },
  { left: "10%", top: "54%", size: 6, delay: 2.6 },
];

function AmbientParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-5">
      {particles.map((p, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-gradient-to-r from-cyan-300 to-blue-400"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.15, 0.8, 0.15],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4 + index * 0.4,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default AmbientParticles;