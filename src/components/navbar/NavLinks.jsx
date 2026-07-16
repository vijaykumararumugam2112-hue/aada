import { motion } from "framer-motion";
import { useState } from "react";

const navItems = [
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

function NavLinks() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="hidden items-center gap-2 lg:flex">
      {navItems.map((item) => (
        <motion.a
          key={item.label}
          href={item.href}
          onClick={() => setActive(item.label)}
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.96,
          }}
          className="
group
relative
overflow-hidden
rounded-full
px-5
py-3
text-sm
font-semibold
transition-all
duration-300
"
        >
          {/* Active Background */}

          {active === item.label && (
            <motion.div
              layoutId="navbar-active"
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
              className="
                absolute
                inset-0
                rounded-full
                bg-blue-600
              "
            />
          )}

          {/* Text */}

          <span
            className={`
              relative
              z-10
              transition-colors
              ${
                active === item.label
                  ? "text-white"
                  : "text-slate-700 group-hover:text-blue-600"
              }
            `}
          >
            {item.label}
          </span>
        </motion.a>
      ))}
    </nav>
  );
}

export default NavLinks;