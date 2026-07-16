import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Lock,
  CheckCircle2,
} from "lucide-react";

function ProjectInfo({
  number,
  title,
  description,
  technologies,
  url,
  confidential = false,
}) {
  return (
    <div className="relative">

      {/* Huge Background Number */}

      <h1
        className="
          absolute
          -top-20
          left-0
          text-[180px]
          font-black
          leading-none
          text-slate-100
          select-none
          pointer-events-none
        "
      >
        {number}
      </h1>

      {/* Content */}

      <div className="relative z-10">

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
            inline-flex
            rounded-full
            bg-blue-100
            px-4
            py-2
            text-sm
            font-semibold
            text-blue-700
          "
        >
          Featured Project
        </motion.span>

        <h2
          className="
            mt-6
            text-5xl
            font-black
            leading-tight
            text-slate-900
          "
        >
          {title}
        </h2>

        <p
          className="
            mt-6
            max-w-xl
            text-lg
            leading-9
            text-slate-600
          "
        >
          {description}
        </p>

        {/* Highlights */}

        <div className="mt-10 space-y-4">

          {[
            "Modern UI & UX",
            "Responsive Design",
            "High Performance",
          ].map((item) => (

            <motion.div
              key={item}
              whileHover={{
                x: 5,
              }}
              className="
                flex
                items-center
                gap-3
              "
            >
              <CheckCircle2
                size={20}
                className="text-green-500"
              />

              <span className="text-slate-700">
                {item}
              </span>

            </motion.div>

          ))}

        </div>

        {/* Technologies */}

        <div className="mt-10 flex flex-wrap gap-3">

          {technologies.map((tech, index) => (

            <motion.div
              key={tech}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -4,
              }}
              className="
                rounded-full
                bg-slate-100
                px-5
                py-3
                text-sm
                font-semibold
                text-slate-700
              "
            >
              {tech}
            </motion.div>

          ))}

        </div>

        {/* CTA */}

        <div className="mt-12">

          {confidential ? (

            <button
              className="
                flex
                items-center
                gap-3
                rounded-2xl
                bg-slate-900
                px-8
                py-4
                font-semibold
                text-white
              "
            >
              <Lock size={18} />

              Private Business Platform

            </button>

          ) : (

            <motion.a
              href={url}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                x: 6,
              }}
              className="
                inline-flex
                items-center
                gap-3
                rounded-2xl
                bg-blue-600
                px-8
                py-4
                font-semibold
                text-white
                shadow-lg
              "
            >
              Visit Live Website

              <ArrowUpRight size={20} />

            </motion.a>

          )}

        </div>

      </div>

    </div>
  );
}

export default ProjectInfo;