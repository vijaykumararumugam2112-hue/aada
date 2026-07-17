import { motion } from "framer-motion";

export default function AADAvisOptions({
  options = [],
  onSelect,
  disabled = false,
}) {
  return (
    <div className="mt-4 space-y-3">
      {options.map((option) => (
        <motion.button
          key={option}
          whileHover={
            disabled
              ? {}
              : {
                  scale: 1.02,
                }
          }
          whileTap={
            disabled
              ? {}
              : {
                  scale: 0.98,
                }
          }
          onClick={() => {
            if (!disabled) {
              onSelect(option);
            }
          }}
          disabled={disabled}
          className={`
            w-full
            rounded-2xl
            border
            px-4
            py-3
            text-left
            text-sm
            font-medium
            transition-all
            ${
              disabled
                ? "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400 opacity-70"
                : "border-cyan-200 bg-cyan-50 text-slate-700 hover:border-cyan-400 hover:bg-cyan-100"
            }
          `}
        >
          {option}
        </motion.button>
      ))}
    </div>
  );
}