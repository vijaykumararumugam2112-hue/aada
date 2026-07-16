import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function FeatureCard({
  icon,
  title,
  description,
  color = "blue",
}) {
  const colors = {
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-600",
      glow: "from-blue-400/20 to-cyan-400/10",
    },
    orange: {
      bg: "bg-orange-100",
      text: "text-orange-500",
      glow: "from-orange-400/20 to-yellow-300/10",
    },
    green: {
      bg: "bg-green-100",
      text: "text-green-600",
      glow: "from-green-400/20 to-emerald-300/10",
    },
    purple: {
      bg: "bg-violet-100",
      text: "text-violet-600",
      glow: "from-violet-400/20 to-pink-300/10",
    },
  };

  const theme = colors[color];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-lg
        hover:shadow-2xl
        transition-all
      "
    >
      {/* Gradient Glow */}

      <div
        className={`
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition
          duration-500
          bg-gradient-to-br
          ${theme.glow}
        `}
      />

      {/* Icon */}

      <motion.div
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`
          relative
          z-10
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          ${theme.bg}
          text-3xl
        `}
      >
        {icon}
      </motion.div>

      {/* Title */}

      <h3
        className="
          relative
          z-10
          mt-6
          text-2xl
          font-bold
          text-slate-900
        "
      >
        {title}
      </h3>

      {/* Description */}

      <p
        className="
          relative
          z-10
          mt-4
          leading-8
          text-slate-600
        "
      >
        {description}
      </p>

      {/* Link */}

      <div
        className={`
          relative
          z-10
          mt-8
          inline-flex
          items-center
          gap-2
          font-semibold
          ${theme.text}
        `}
      >
        Learn More

        <motion.div
          whileHover={{
            x: 5,
          }}
        >
          <ArrowRight size={18} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default FeatureCard;