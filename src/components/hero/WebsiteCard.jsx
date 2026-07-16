import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function WebsiteCard() {
  return (
    <motion.div
    className="
group
relative
w-72
overflow-hidden
rounded-3xl
border
border-white/40
bg-white/90
backdrop-blur-xl
shadow-[0_25px_60px_rgba(0,0,0,0.18)]
cursor-pointer
"
      animate={{
        y: [0, -10, 0],
        rotate: [0, -1, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        y: -20,
        scale: 1.04,
        rotate: -2,
        transition: {
          duration: 0.35,
        },
      }}
    >
      {/* Shine Effect */}

      <motion.div
        className="
          absolute
          -left-40
          top-0
          h-full
          w-20
          rotate-12
          bg-white/40
          blur-xl
        "
        initial={{ x: -250 }}
        whileHover={{
          x: 520,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      />

      {/* Browser Header */}

      <div className="flex h-10 items-center bg-slate-100 px-4">

        <div className="flex gap-2">

          <span className="h-3 w-3 rounded-full bg-red-400"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
          <span className="h-3 w-3 rounded-full bg-green-400"></span>

        </div>

        <motion.div
          className="
            ml-4
            flex-1
            rounded-full
            bg-white
            px-3
            py-1
            text-[11px]
            text-slate-500
            shadow-sm
            truncate
          "
          whileHover={{
            backgroundColor: "#eef6ff",
          }}
        >
          https://www.ccubeconstruction.info
        </motion.div>

      </div>

      {/* Website */}

      <div className="bg-white">

        {/* Navbar */}

        <div className="flex h-10 items-center justify-between border-b px-3">

          <div className="font-bold text-orange-600 text-xs">
            CCube
          </div>

          <div className="flex gap-3 text-[10px] text-slate-500">

            <span>Home</span>
            <span>Projects</span>
            <span>Contact</span>

          </div>

        </div>

        {/* Hero */}

        <div className="bg-gradient-to-r from-orange-600 to-orange-400 px-4 py-5">

          <h3 className="text-sm font-bold text-white">
            CCube Construction
          </h3>

          <p className="mt-1 text-[10px] text-orange-100">
            Professional Builders & Contractors
          </p>

          <motion.button
            className="
              mt-4
              flex
              items-center
              gap-1
              rounded-lg
              bg-white
              px-4
              py-1.5
              text-[10px]
              font-semibold
              text-orange-600
              shadow
            "
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            Start Project

            <motion.div
              whileHover={{
                x: 4,
              }}
            >
              <ExternalLink size={12} />
            </motion.div>

          </motion.button>

        </div>

        {/* Fake Content */}

        <div className="space-y-2 px-4 py-4">

          <div className="h-2 rounded bg-slate-200"></div>

          <div className="h-2 w-5/6 rounded bg-slate-200"></div>

          <div className="h-2 w-3/5 rounded bg-slate-200"></div>

        </div>

        {/* Footer */}

        <div className="flex items-center justify-between border-t px-4 py-3">

          <span className="text-[11px] font-semibold text-green-600">
            ● Live Project
          </span>

          <span className="rounded-full bg-blue-100 px-2 py-1 text-[10px] font-semibold text-blue-600">
            React + Vite
          </span>

        </div>

      </div>

    </motion.div>
  );
}

export default WebsiteCard;