import { motion } from "framer-motion";
import {
  Globe,
  Lock,
  Smartphone,
  Building2,
  CheckCircle2,
} from "lucide-react";

function ProjectImage({
  image,
  title,
  confidential = false,
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      className="group relative overflow-visible rounded-[32px]"
    >
      {/* Background Glow */}

      <div
        className={`
          absolute
          inset-0
          scale-90
          rounded-[32px]
          blur-[120px]
          transition-all
          duration-700
          opacity-0
          group-hover:opacity-100
          ${
            confidential
              ? "bg-blue-400/25"
              : "bg-orange-400/25"
          }
        `}
      />

      {/* Image */}

      <motion.img
        src={image}
        alt={title}
        className="
          relative
          z-10
          h-[520px]
          w-full
          rounded-[32px]
          object-cover
          object-center
          shadow-[0_30px_80px_rgba(15,23,42,0.15)]
        "
        whileHover={{
          scale: 1.05,
        }}
        transition={{
          duration: 0.8,
        }}
      />

      {/* Gradient */}

      <div
        className="
          absolute
          inset-0
          z-20
          rounded-[32px]
          bg-gradient-to-t
          from-black/50
          via-black/10
          to-transparent
        "
      />

      {/* Badge */}

      <div className="absolute left-8 top-8 z-30">

        {confidential ? (

          <div className="flex items-center gap-2 rounded-full bg-black/60 px-5 py-2 text-white backdrop-blur-xl">

            <Lock size={16} />

            Confidential Project

          </div>

        ) : (

          <div className="flex items-center gap-2 rounded-full bg-green-600/90 px-5 py-2 text-white backdrop-blur-xl">

            <Globe size={16} />

            Live Website

          </div>

        )}

      </div>

      {/* Floating Glass Card */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-8
          right-8
          z-30
          w-72
          rounded-3xl
          border
          border-white/20
          bg-white/85
          backdrop-blur-xl
          p-6
          shadow-[0_20px_60px_rgba(15,23,42,0.18)]
        "
      >

        <div className="flex items-center gap-3">

          <div
            className={`
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              ${
                confidential
                  ? "bg-blue-100 text-blue-600"
                  : "bg-orange-100 text-orange-600"
              }
            `}
          >

            {confidential ? (
              <Smartphone size={22} />
            ) : (
              <Building2 size={22} />
            )}

          </div>

          <div>

            <h4 className="font-bold text-slate-900">
              {confidential
                ? "Business Platform"
                : "Construction Website"}
            </h4>

            <p className="text-sm text-slate-500">
              Premium Digital Solution
            </p>

          </div>

        </div>

        <div className="mt-5 space-y-3">

          <div className="flex items-center gap-2 text-sm text-slate-700">

            <CheckCircle2
              size={16}
              className="text-green-500"
            />

            Responsive Design

          </div>

          <div className="flex items-center gap-2 text-sm text-slate-700">

            <CheckCircle2
              size={16}
              className="text-green-500"
            />

            High Performance

          </div>

          <div className="flex items-center gap-2 text-sm text-slate-700">

            <CheckCircle2
              size={16}
              className="text-green-500"
            />

            Modern User Experience

          </div>

        </div>

      </motion.div>

    </motion.div>
  );
}

export default ProjectImage;