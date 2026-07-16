import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  ArrowUp,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

import DockItem from "./DockItem";

function Dock() {
  const phone = "+918056211546";

  const email = "info@aadadigital.com";

  const whatsapp =
    "https://wa.me/918056211546?text=Hi%20AADA,%20I'd%20like%20to%20discuss%20my%20project.";

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        fixed
        bottom-8
        left-1/2
        -translate-x-1/2
        z-[999]
        hidden
        lg:block
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          delay: 0.5,
        }}
        whileHover={{
          scale: 1.02,
        }}
        className="
          flex
          items-center
          gap-3
          rounded-[28px]
          border
          border-white/30
          bg-white/70
          px-4
          py-3
          backdrop-blur-2xl
          shadow-[0_20px_60px_rgba(15,23,42,0.18)]
        "
      >
        {/* WhatsApp */}

        <DockItem
  icon={FaWhatsapp}
  label="WhatsApp"
  href={whatsapp}
  color="#25D366"
/>

        {/* Phone */}

        <DockItem
          icon={Phone}
          label="Call Us"
          href={`tel:${phone}`}
          color="#2563EB"
        />

        {/* Email */}

        <DockItem
          icon={Mail}
          label="Email"
          href={`mailto:${email}`}
          color="#EA4335"
        />

        {/* Scroll Top */}

        <DockItem
          icon={ArrowUp}
          label="Back to Top"
          color="#F97316"
          onClick={scrollTop}
        />
      </motion.div>
    </motion.div>
  );
}

export default Dock;