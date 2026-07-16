import { motion } from "framer-motion";

import ProjectImage from "./ProjectImage";
import ProjectInfo from "./ProjectInfo";

function FeaturedProject({
  number,
  image,
  title,
  description,
  technologies,
  url,
  confidential = false,
  reverse = false,
}) {
  return (
    <section className="relative py-24">

      {/* Decorative Glow */}

      <div
        className={`
          absolute
          inset-0
          -z-10
          blur-[140px]
          opacity-40
          ${
            confidential
              ? "bg-gradient-to-r from-blue-300/20 to-cyan-300/10"
              : "bg-gradient-to-r from-orange-300/20 to-yellow-300/10"
          }
        `}
      />

      <div
        className={`
          grid
          items-center
          gap-20
          lg:grid-cols-2
          ${
            reverse
              ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
              : ""
          }
        `}
      >
        {/* IMAGE */}

        <motion.div
          initial={{
            opacity: 0,
            x: reverse ? 80 : -80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <ProjectImage
            image={image}
            title={title}
            confidential={confidential}
          />
        </motion.div>

        {/* INFO */}

        <motion.div
          initial={{
            opacity: 0,
            x: reverse ? -80 : 80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
        >
          <ProjectInfo
            number={number}
            title={title}
            description={description}
            technologies={technologies}
            url={url}
            confidential={confidential}
          />
        </motion.div>

      </div>

    </section>
  );
}

export default FeaturedProject;