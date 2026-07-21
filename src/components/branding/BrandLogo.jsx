import { motion } from "framer-motion";

import logo from "../../assets/logo/logo.webp";

function BrandLogo() {
  return (
    <motion.a
      href="#home"
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className="
        flex
        items-center
        gap-3
        rounded-2xl
        border
        border-white/40
        bg-white/75
        px-4
        py-2
        backdrop-blur-xl
        shadow-lg
      "
    >
      <img
        src={logo}
        alt="AADA"
        className="h-11 w-11 object-contain"
      />

      <div>

        <h2 className="text-2xl font-black leading-none text-slate-900">
          AADA
        </h2>

        <p
          className="
            mt-1
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.30em]
            text-slate-500
          "
        >
          Digital Studio
        </p>

      </div>

    </motion.a>
  );
}

export default BrandLogo;