import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function ServiceCard({
  icon,
  title,
  description,
  features,
  color = "blue",
}) {
  const colors = {
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-600",
      border: "hover:border-blue-500",
      glow: "group-hover:shadow-blue-200",
    },

    orange: {
      bg: "bg-orange-100",
      text: "text-orange-600",
      border: "hover:border-orange-500",
      glow: "group-hover:shadow-orange-200",
    },

    green: {
      bg: "bg-green-100",
      text: "text-green-600",
      border: "hover:border-green-500",
      glow: "group-hover:shadow-green-200",
    },
  };

  const theme = colors[color];

  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`
        group
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-lg
        transition-all
        duration-300
        ${theme.border}
        ${theme.glow}
      `}
    >
      {/* Icon */}

      <motion.div
        whileHover={{
          rotate: 12,
          scale: 1.1,
        }}
        className={`
          w-16
          h-16
          rounded-2xl
          flex
          items-center
          justify-center
          text-3xl
          ${theme.bg}
        `}
      >
        {icon}
      </motion.div>

      {/* Title */}

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      {/* Description */}

      <p className="mt-3 text-slate-600 leading-7">
        {description}
      </p>

      {/* Features */}

      <div className="mt-6 space-y-3">
        {features.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 text-sm text-slate-700"
          >
            <span className={theme.text}>✔</span>

            {item}
          </div>
        ))}
      </div>

      {/* Button */}

      <motion.button
        whileHover={{
          x: 5,
        }}
        className={`
          mt-8
          flex
          items-center
          gap-2
          font-semibold
          ${theme.text}
        `}
      >
        Learn More

        <ArrowRight size={18} />
      </motion.button>
    </motion.div>
  );
}

export default ServiceCard;