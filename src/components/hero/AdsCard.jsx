import { motion } from "framer-motion";
import { BarChart3, TrendingUp } from "lucide-react";

function AdsCard() {
  return (
    <motion.div
      className="
        group
        relative
        w-56
        rounded-3xl
        border
        border-slate-200
        bg-white/90
        backdrop-blur-xl
        p-5
        shadow-[0_25px_60px_rgba(0,0,0,0.18)]
        cursor-pointer
      "
      animate={{
        y: [0, -8, 0],
        rotate: [0, 1, -1, 0],
      }}
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        y: -15,
        scale: 1.04,
      }}
    >
      {/* Shine */}

      <motion.div
        className="
          absolute
          -left-32
          top-0
          h-full
          w-16
          rotate-12
          bg-white/30
          blur-lg
        "
        initial={{ x: -180 }}
        whileHover={{ x: 420 }}
        transition={{ duration: 0.8 }}
      />

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h3 className="font-bold text-slate-800">
            Campaign Performance
          </h3>

          <p className="text-xs text-slate-500">
            Last 30 Days
          </p>

        </div>

        <BarChart3
          size={26}
          className="text-blue-600"
        />

      </div>

      {/* Reach */}

      <div className="mt-5">

        <div className="flex justify-between">

          <span className="text-sm text-slate-500">
            Reach
          </span>

          <motion.span
            className="flex items-center gap-1 text-sm font-semibold text-green-600"
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <TrendingUp size={14} />
            +18%
          </motion.span>

        </div>

        <h2 className="mt-1 text-3xl font-bold">
          12.8K
        </h2>

      </div>

      {/* Animated Bars */}

      <div className="mt-5 flex h-20 items-end gap-2 rounded-xl bg-slate-100 p-3">

        {[35, 60, 48, 85, 72, 96].map((height, index) => (
          <motion.div
            key={index}
            className={`w-4 rounded ${
              index === 5 ? "bg-orange-500" : "bg-blue-500"
            }`}
            animate={{
              height: [height - 12, height, height - 6],
            }}
            transition={{
              duration: 2 + index * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      </div>

      {/* Stats */}

      <div className="mt-5 grid grid-cols-2 gap-3">

        <div className="rounded-xl bg-slate-50 p-3">

          <p className="text-xs text-slate-500">
            Clicks
          </p>

          <h4 className="font-bold">
            2,486
          </h4>

        </div>

        <div className="rounded-xl bg-slate-50 p-3">

          <p className="text-xs text-slate-500">
            Conversions
          </p>

          <h4 className="font-bold">
            186
          </h4>

        </div>

      </div>

      {/* Platforms */}

      <div className="mt-5 flex gap-2">

        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
          Meta Ads
        </span>

        <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
          Google Ads
        </span>

      </div>

    </motion.div>
  );
}

export default AdsCard;