import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";

const links = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Portfolio",
    href: "#portfolio",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">

      {/* Toggle Button */}

      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => setOpen(!open)}
        className="
          relative
          z-50
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          border
          border-slate-200
          bg-white/80
          backdrop-blur-xl
          shadow-lg
        "
      >
        <AnimatePresence mode="wait">

          {open ? (

            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={22} />
            </motion.div>

          ) : (

            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={22} />
            </motion.div>

          )}

        </AnimatePresence>

      </motion.button>

      {/* Menu */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 0.98,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              absolute
              left-0
              right-0
              top-20
              mx-4
              overflow-hidden
              rounded-3xl
              border
              border-white/30
              bg-white/80
              backdrop-blur-2xl
              shadow-[0_30px_80px_rgba(15,23,42,0.18)]
            "
          >

            <div className="p-4">

              {links.map((item, index) => (

                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    x: 6,
                  }}
                  className="
                    mb-2
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    px-5
                    py-4
                    font-semibold
                    text-slate-700
                    transition
                    hover:bg-blue-50
                    hover:text-blue-600
                  "
                >
                  {item.label}

                  <ArrowRight size={18} />

                </motion.a>

              ))}

            </div>

            {/* CTA */}

            <div className="border-t border-slate-200 p-5">

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="
                  flex
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  px-6
                  py-4
                  font-semibold
                  text-white
                  shadow-lg
                "
              >
                Start Your Project
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}

export default MobileMenu;