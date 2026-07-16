import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

function ProcessCard({
  step,
  title,
  description,
  icon: Icon,
  color = "from-blue-600 to-cyan-500",
  isLast = false,
}) {
  return (
    <div className="relative flex flex-col items-center">

      {/* Top Circle */}

      <motion.div
        whileHover={{
          scale: 1.08,
          rotate: 8,
        }}
        transition={{
          duration: 0.3,
        }}
        className={`
          relative
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          ${color}
          text-white
          shadow-xl
        `}
      >
        <Icon size={30} />

        <span
          className="
            absolute
            -bottom-2
            rounded-full
            bg-white
            px-3
            py-1
            text-xs
            font-bold
            text-slate-800
            shadow-lg
          "
        >
          {step}
        </span>

      </motion.div>

      {/* Connecting Line */}

      {!isLast && (

        <div
          className="
            my-5
            flex
            h-16
            items-center
            justify-center
          "
        >
          <motion.div
            animate={{
              scaleY: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="
              absolute
              mt-20
              h-16
              w-[3px]
              rounded-full
              bg-gradient-to-b
              from-blue-500
              via-cyan-400
              to-orange-400
            "
          />

          <ArrowDown
            className="
              relative
              mt-20
              text-blue-500
            "
            size={18}
          />

        </div>

      )}

      {/* Card */}

      <motion.div
        whileHover={{
          y: -10,
        }}
        className="
          group
          relative
          mt-6
          w-full
          rounded-3xl
          border
          border-white/40
          bg-white/80
          p-8
          text-center
          shadow-lg
          backdrop-blur-xl
        "
      >
        {/* Glow */}

        <div
          className={`
            absolute
            inset-0
            rounded-3xl
            opacity-0
            blur-3xl
            transition
            duration-500
            group-hover:opacity-20
            bg-gradient-to-br
            ${color}
          `}
        />

        <h3 className="relative text-2xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="relative mt-4 leading-7 text-slate-600">
          {description}
        </p>

      </motion.div>

    </div>
  );
}

export default ProcessCard;