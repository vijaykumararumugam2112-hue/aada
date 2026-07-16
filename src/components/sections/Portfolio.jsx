import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

import FeaturedProject from "../portfolio/FeaturedProject";

import ccubeProject from "../../assets/images/ccube-project.png";
import businessProject from "../../assets/images/business-platform.png";

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-slate-50 py-32"
    >
      {/* Decorative Background */}

      <div className="absolute top-32 left-0 h-96 w-96 rounded-full bg-orange-300/10 blur-[140px]" />

      <div className="absolute bottom-20 right-0 h-96 w-96 rounded-full bg-blue-300/10 blur-[140px]" />

      <Container>

        <SectionTitle
          badge="🚀 Featured Work"
          title="Projects That Drive Real Business Growth"
          subtitle="Every project is designed with performance, scalability and user experience at its core."
        />

        {/* ================= PROJECT 01 ================= */}

        <FeaturedProject
          number="01"
          image={ccubeProject}
          title="CCube Construction"
          description="A premium construction company website designed to showcase projects, generate quality enquiries and establish a strong online presence with a modern responsive experience."
          technologies={[
            "React",
            "Responsive",
            "SEO",
            "Lead Generation",
          ]}
          url="https://www.ccubeconstruction.info"
        />

        {/* ================= PROJECT 02 ================= */}

        <FeaturedProject
          reverse
          number="02"
          image={businessProject}
          confidential
          title="Business Management Platform"
          description="A complete cloud-based business platform featuring customer booking, staff management, admin dashboard, real-time workflow tracking, settlements and intelligent reporting."
          technologies={[
            "React",
            "Firebase",
            "Cloud",
            "Dashboard",
          ]}
        />

        {/* Bottom CTA */}

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
            duration: 0.7,
          }}
          className="
            mt-32
            rounded-[40px]
            bg-gradient-to-r
            from-blue-600
            via-cyan-500
            to-blue-700
            px-10
            py-20
            text-center
            text-white
            shadow-[0_30px_80px_rgba(37,99,235,0.35)]
          "
        >

          <h2 className="text-5xl font-black">
            Have an Idea?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Every successful digital product begins with a conversation.
            Let's build your next website, application or business platform together.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <a
  href="tel:8056211546"
  className="
    inline-flex
    items-center
    gap-3
    rounded-2xl
    bg-white
    px-8
    py-4
    font-semibold
    text-blue-700
    shadow-lg
    transition
    hover:scale-105
  "
>
  <Phone size={20} />

  Call Now
</a>

            <a
  href="https://wa.me/918056211546?text=Hi%20AADA,%20I'd%20like%20to%20build%20a%20website%20similar%20to%20your%20portfolio."
  target="_blank"
  rel="noreferrer"
  className="
    inline-flex
    items-center
    gap-3
    rounded-2xl
    border
    border-white/40
    bg-white/10
    px-8
    py-4
    font-semibold
    backdrop-blur-xl
    transition
    hover:bg-white/20
    hover:scale-105
  "
>
  <FaWhatsapp
    size={20}
    className="text-[#25D366]"
  />

  Chat on WhatsApp
</a>

          </div>

        </motion.div>

      </Container>

    </section>
  );
}

export default Portfolio;