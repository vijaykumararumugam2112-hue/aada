import { motion } from "framer-motion";

function SectionTitle({
  badge,
  title,
  subtitle,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
      className="mx-auto max-w-3xl text-center"
    >
      {badge && (
        <span
          className="
            inline-flex
            items-center
            rounded-full
            bg-blue-100
            px-5
            py-2
            text-sm
            font-semibold
            text-blue-600
          "
        >
          {badge}
        </span>
      )}

      <h2
        className="
          mt-5
          text-4xl
          font-extrabold
          text-slate-900
          md:text-5xl
        "
      >
        {title}
      </h2>

      <p
        className="
          mt-6
          text-lg
          leading-8
          text-slate-600
        "
      >
        {subtitle}
      </p>
    </motion.div>
  );
}

export default SectionTitle;