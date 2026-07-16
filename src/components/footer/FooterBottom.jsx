import { motion } from "framer-motion";
import { Heart } from "lucide-react";

function FooterBottom() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      className="
        mt-16
        border-t
        border-white/10
        pt-8
        flex
        flex-col
        gap-4
        md:flex-row
        md:items-center
        md:justify-between
      "
    >

      <p className="text-slate-400">

        © {new Date().getFullYear()} AADA Digital Studio.

        All rights reserved.

      </p>

      <div className="flex items-center gap-2 text-slate-400">

        Made with

        <Heart
          size={16}
          className="fill-red-500 text-red-500"
        />

        in India

      </div>

    </motion.div>
  );
}

export default FooterBottom;