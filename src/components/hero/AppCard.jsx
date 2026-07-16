import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDays,
  Home,
  User,
  Bell,
  Wrench,
} from "lucide-react";
import { useState } from "react";

function AppCard() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
  className="
    group
    relative
    w-44
    rounded-[38px]
    bg-slate-900
    p-2
    shadow-[0_25px_60px_rgba(0,0,0,0.25)]
    cursor-pointer
  "
      animate={{
        y: [0, 10, 0],
        rotate: [0, 1.2, 0],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.05,
        rotate: -3,
        y: -8,
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Reflection */}

      <motion.div
        className="
          absolute
          -left-24
          top-0
          h-full
          w-12
          rotate-12
          bg-white/30
          blur-lg
        "
        initial={{ x: -120 }}
        whileHover={{ x: 320 }}
        transition={{ duration: 0.7 }}
      />

      {/* Screen */}

      <div className="overflow-hidden rounded-[30px] bg-white">

        {/* Dynamic Island */}

        <div className="flex justify-center py-2">
          <div className="h-5 w-20 rounded-full bg-black"></div>
        </div>

        {/* Header */}

        <div className="bg-blue-600 px-4 py-4 text-white">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-[10px] opacity-80">
                Welcome Back 👋
              </p>

              <h2 className="font-bold">
                Service Booking
              </h2>

            </div>

            <Bell size={18} />

          </div>

        </div>

        {/* Jobs */}

        <div className="space-y-3 p-3">

          {[
            ["AC Repair", "09:00 AM"],
            ["Plumbing", "11:30 AM"],
            ["Electrical", "02:00 PM"],
          ].map(([title, time]) => (
            <div
              key={title}
              className="rounded-xl bg-slate-100 p-2"
            >
              <div className="flex items-center gap-2">

                <Wrench
                  size={14}
                  className="text-blue-600"
                />

                <div>

                  <p className="text-[11px] font-semibold">
                    {title}
                  </p>

                  <p className="text-[10px] text-slate-500">
                    {time}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Rating */}

        <div className="border-t py-3 text-center">

          <div className="text-yellow-500">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="text-[10px] text-slate-500">
            4.9 User Rating
          </p>

        </div>

        {/* Bottom Navigation */}

        <div className="flex justify-around border-t py-3">

          <Home
            size={18}
            className="text-blue-600"
          />

          <CalendarDays
            size={18}
            className="text-slate-500"
          />

          <User
            size={18}
            className="text-slate-500"
          />

        </div>

      </div>

      {/* Notification */}

      <AnimatePresence>

        {hovered && (

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 10,
            }}
            className="
              absolute
              -top-8
              left-6
              rounded-xl
              bg-blue-600
              px-3
              py-2
              text-xs
              font-medium
              text-white
              shadow-xl
            "
          >
            🔔 New Booking Assigned
          </motion.div>

        )}

      </AnimatePresence>

    </motion.div>
  );
}

export default AppCard;