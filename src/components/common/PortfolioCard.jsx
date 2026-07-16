import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe,
  Lock,
} from "lucide-react";

function PortfolioCard({
  image,
  title,
  description,
  technologies,
  confidential = false,
  url = "#",
}) {
  return (
    <motion.div
      whileHover={{
        y: -12,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-slate-200
        bg-white
        shadow-[0_20px_60px_rgba(15,23,42,0.10)]
        hover:shadow-[0_35px_90px_rgba(37,99,235,0.18)]
        transition-all
        duration-500
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          inset-0
          opacity-0
          blur-3xl
          transition
          duration-500
          group-hover:opacity-100
          pointer-events-none
        "
      >
        <div
          className={`
            absolute
            inset-10
            rounded-full
            ${
              confidential
                ? "bg-blue-400/20"
                : "bg-orange-400/20"
            }
          `}
        />
      </div>

      {/* IMAGE */}

      <div className="relative h-80 overflow-hidden">

        <motion.img
          src={image}
          alt={title}
          className="
            h-full
            w-full
            object-cover
            object-center
          "
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: 0.8,
          }}
        />

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/45
            via-black/10
            to-transparent
          "
        />

        {/* Badge */}

        <div className="absolute left-6 top-6">

          {confidential ? (

            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-black/60
                backdrop-blur-md
                px-4
                py-2
                text-sm
                font-semibold
                text-white
              "
            >
              <Lock size={15} />

              Confidential

            </span>

          ) : (

            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-green-600/90
                backdrop-blur-md
                px-4
                py-2
                text-sm
                font-semibold
                text-white
              "
            >
              <Globe size={15} />

              Live Project

            </span>

          )}

        </div>

      </div>

      {/* CONTENT */}

      <div className="p-8">

        <motion.h3
          className="text-3xl font-bold text-slate-900"
          whileHover={{
            x: 4,
          }}
        >
          {title}
        </motion.h3>

        <p className="mt-5 leading-8 text-slate-600">
          {description}
        </p>

        {/* TECHNOLOGIES */}

        <div className="mt-8 flex flex-wrap gap-3">

          {technologies.map((tech, index) => (

            <motion.span
              key={tech}
              initial={{
                opacity: 0.9,
              }}
              whileHover={{
                y: -3,
              }}
              transition={{
                delay: index * 0.05,
              }}
              className="
                rounded-full
                bg-blue-100
                px-4
                py-2
                text-sm
                font-semibold
                text-blue-700
              "
            >
              {tech}
            </motion.span>

          ))}

        </div>

        {/* CTA */}

        <div className="mt-10">

          {confidential ? (

            <span
              className="
                inline-flex
                items-center
                gap-2
                text-slate-500
                font-semibold
              "
            >
              Private Project

            </span>

          ) : (

            <motion.a
              href={url}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                x: 5,
              }}
              className="
                inline-flex
                items-center
                gap-2
                font-semibold
                text-blue-600
              "
            >
              Visit Website

              <motion.div
                whileHover={{
                  x: 5,
                }}
              >
                <ArrowUpRight size={18} />
              </motion.div>

            </motion.a>

          )}

        </div>

      </div>
    </motion.div>
  );
}

export default PortfolioCard;