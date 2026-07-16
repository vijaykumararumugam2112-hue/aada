import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import Logo from "../navbar/Logo";
import NavLinks from "../navbar/NavLinks";
import MobileMenu from "../navbar/MobileMenu";
import BrandLogo from "../branding/BrandLogo";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[999]">

      <motion.div
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
        }}
        className={`
  mx-auto
  mt-4
  flex
  max-w-7xl
  items-center
  justify-between
  rounded-3xl
  border
  px-6
  transition-all
  duration-300
  ${
    scrolled
      ? `
        border-white/40
        bg-white/75
        py-2.5
        shadow-[0_15px_45px_rgba(15,23,42,0.10)]
        backdrop-blur-2xl
      `
      : `
        border-transparent
        bg-white/35
        py-3
        backdrop-blur-xl
      `
  }
`}
      >
        {/* Logo */}

        <BrandLogo />

        {/* Desktop Navigation */}

        <NavLinks />

        {/* Desktop CTA */}

        <motion.a
          href="#contact"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.96,
          }}
          className="
            hidden
            lg:flex
            items-center
            gap-2
            rounded-full
            bg-gradient-to-r
            from-blue-600
            via-cyan-500
            to-blue-700
            px-6
            py-3
            font-semibold
            text-white
            shadow-lg
          "
        >
          Start Project

          <ArrowRight size={18} />

        </motion.a>

        {/* Mobile */}

        <MobileMenu />

      </motion.div>

    </header>
  );
}

export default Navbar;