import { motion } from "framer-motion";

function ProcessStep({
  icon,
  step,
  title,
  description,
  isLast = false,
}) {
  return (
    <div className="relative flex flex-col items-center text-center">

      {/* Animated Circle */}

      <motion.div
        whileHover={{
          scale: 1.08,
          rotate: 5,
        }}
        className="
          relative
          z-10
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-blue-600
          to-orange-500
          text-4xl
          shadow-xl
        "
      >
        {icon}
      </motion.div>

      {/* Connecting Line */}

      {!isLast && (
        <div
          className="
            absolute
            top-12
            left-1/2
            hidden
            h-1
            w-full
            bg-gradient-to-r
            from-blue-500
            to-orange-500
            lg:block
          "
        />
      )}

      {/* Step Number */}

      <div className="relative z-10 mt-6">

        <span
          className="
            rounded-full
            bg-blue-100
            px-4
            py-1
            text-sm
            font-semibold
            text-blue-600
          "
        >
          Step {step}
        </span>

      </div>

      {/* Title */}

      <h3 className="mt-5 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      {/* Description */}

      <p className="mt-4 max-w-xs leading-7 text-slate-600">
        {description}
      </p>

    </div>
  );
}

export default ProcessStep;