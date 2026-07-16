import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

function FooterCTA() {
  return (
    <section className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-blue-700 via-cyan-600 to-blue-800 px-8 py-20 text-center text-white shadow-[0_30px_80px_rgba(37,99,235,0.35)]">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-[120px]" />

        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-orange-400/20 blur-[120px]" />

      </div>

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-3xl">

        <motion.h2
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
          className="text-4xl font-black leading-tight md:text-6xl"
        >
          Let's Build Something Amazing
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-blue-100"
        >
          Whether you need a modern website, business application or
          high-converting digital marketing, we're ready to bring your
          ideas to life.
        </motion.p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

  {/* Start Project */}

  <motion.a
    href="#contact"
    whileHover={{
      scale: 1.05,
      y: -3,
    }}
    whileTap={{
      scale: 0.96,
    }}
    className="
      inline-flex
      items-center
      gap-3
      rounded-full
      bg-white
      px-8
      py-4
      font-bold
      text-blue-700
      shadow-xl
    "
  >
    Start Your Project

    <motion.div
      whileHover={{
        x: 5,
      }}
    >
      <ArrowRight size={20} />
    </motion.div>

  </motion.a>

  {/* WhatsApp */}

  <motion.a
    href="https://wa.me/918056211546?text=Hi%20AADA,%20I'd%20like%20to%20discuss%20my%20project."
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{
      scale: 1.05,
      y: -3,
    }}
    whileTap={{
      scale: 0.96,
    }}
    className="
      inline-flex
      items-center
      gap-3
      rounded-full
      border
      border-white/40
      bg-white/10
      px-8
      py-4
      font-bold
      text-white
      backdrop-blur-xl
    "
  >
    <FaWhatsapp
      size={22}
      className="text-[#25D366]"
    />

    Chat on WhatsApp

  </motion.a>

</div>

      </div>

    </section>
  );
}

export default FooterCTA;