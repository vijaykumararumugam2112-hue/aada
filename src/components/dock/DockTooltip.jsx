import { AnimatePresence, motion } from "framer-motion";

function DockTooltip({
  show,
  label,
}) {
  return (
    <AnimatePresence>

      {show && (

        <motion.div
          initial={{
            opacity: 0,
            y: 8,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 8,
            scale: 0.9,
          }}
          transition={{
            duration: 0.18,
          }}
          className="
            absolute
            -top-12
            left-1/2
            -translate-x-1/2
            whitespace-nowrap
            rounded-xl
            bg-slate-900
            px-3
            py-2
            text-xs
            font-medium
            text-white
            shadow-xl
            pointer-events-none
          "
        >
          {label}
        </motion.div>

      )}

    </AnimatePresence>
  );
}

export default DockTooltip;