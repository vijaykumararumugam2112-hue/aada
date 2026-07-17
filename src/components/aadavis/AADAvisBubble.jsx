import { motion, AnimatePresence } from "framer-motion";

export default function AADAvisBubble({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{
            opacity: 0,
            x: 30,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            x: 20,
            scale: 0.95,
          }}
          transition={{
            duration: 0.35,
          }}
          className="
            absolute
            bottom-20
            right-28
            w-72
            rounded-3xl
            border
            border-cyan-200/60
            bg-white/80
            backdrop-blur-xl
            shadow-[0_20px_60px_rgba(0,0,0,0.15)]
            p-5
          "
        >
          <div className="space-y-2">
            <p className="text-lg">👋 Hi!</p>

            <h3 className="font-bold text-slate-900">
              I'm <span className="text-cyan-600">AADAvis</span>
            </h3>

            <p className="text-sm leading-6 text-slate-600">
              Let's build something amazing together.
            </p>
          </div>

          {/* Bubble Tail */}
          <div
            className="
              absolute
              right-8
              -bottom-2
              h-4
              w-4
              rotate-45
              border-r
              border-b
              border-cyan-200/60
              bg-white/80
            "
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}