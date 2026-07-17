import { motion } from "framer-motion";

export default function AADAvisSubmit({
  loading = false,
  onSubmit,
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-5"
    >
      <motion.button
        whileHover={
          loading
            ? {}
            : {
                scale: 1.02,
              }
        }
        whileTap={
          loading
            ? {}
            : {
                scale: 0.98,
              }
        }
        disabled={loading}
        onClick={onSubmit}
        className="
          w-full
          rounded-2xl
          bg-cyan-600
          py-4
          text-white
          font-semibold
          shadow-lg
          transition-all
          hover:bg-cyan-700
          disabled:bg-slate-300
          disabled:cursor-not-allowed
        "
      >
        {loading
          ? "Submitting..."
          : "🚀 Submit Project Request"}
      </motion.button>
    </motion.div>
  );
}