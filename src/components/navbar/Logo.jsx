import { motion } from "framer-motion";

function Logo() {
  return (
    <motion.a
      href="#home"
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className="flex items-center gap-3 cursor-pointer"
    >
      {/* Logo Icon */}

      <motion.div
        animate={{
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-blue-600
          via-cyan-500
          to-blue-700
          shadow-lg
        "
      >
        {/* Glow */}

        <div className="absolute inset-0 rounded-2xl bg-blue-500/30 blur-xl" />

        <span className="relative z-10 text-xl font-black text-white">
          A
        </span>
      </motion.div>

      {/* Text */}

      <div>

        <motion.h2
          className="
            text-2xl
            font-black
            tracking-tight
            bg-gradient-to-r
            from-slate-900
            to-slate-600
            bg-clip-text
            text-transparent
          "
          whileHover={{
            x: 2,
          }}
        >
          AADA
        </motion.h2>

        <p className="text-xs tracking-[0.25em] text-slate-500 uppercase">
          Digital Studio
        </p>

      </div>

    </motion.a>
  );
}

export default Logo;