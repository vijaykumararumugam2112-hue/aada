import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

function TechnologyCard({
  icon: Icon,
  name,
  category,
  level = "Expert",
  iconColor = "#3B82F6",
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.04,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/30
        bg-white/75
        backdrop-blur-xl
        p-7
        shadow-[0_15px_40px_rgba(15,23,42,0.08)]
      "
    >
      {/* Hover Glow */}

      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
        "
        style={{
          background: `radial-gradient(circle at top right, ${iconColor}22, transparent 70%)`,
        }}
      />

      {/* Shine */}

      <motion.div
        className="
          absolute
          -left-32
          top-0
          h-full
          w-24
          rotate-12
          bg-white/40
          blur-xl
        "
        initial={{ x: -250 }}
        whileHover={{ x: 520 }}
        transition={{ duration: 0.8 }}
      />

      {/* Icon */}

      <motion.div
        whileHover={{
          rotate: 10,
          scale: 1.12,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
          relative
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-slate-100
          shadow-inner
        "
      >
        <Icon
          size={36}
          style={{
            color: iconColor,
          }}
        />
      </motion.div>

      {/* Category */}

      <p
        className="mt-6 text-sm font-semibold"
        style={{
          color: iconColor,
        }}
      >
        {category}
      </p>

      {/* Name */}

      <h3 className="mt-2 text-2xl font-bold text-slate-900">
        {name}
      </h3>

      {/* Divider */}

      <div className="my-5 h-px bg-slate-200" />

      {/* Status */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2">

          <CheckCircle2
            size={18}
            className="text-green-500"
          />

          <span className="text-sm text-slate-600">
            {level}
          </span>

        </div>

        <motion.div
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="h-3 w-3 rounded-full bg-green-500"
        />

      </div>

    </motion.div>
  );
}

export default TechnologyCard;