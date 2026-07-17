import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Megaphone,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaInstagram,
} from "react-icons/fa";

const services = [
  {
    icon: Globe,
    label: "Website Development",
  },
  {
    icon: Smartphone,
    label: "App Development",
  },
  {
    icon: Megaphone,
    label: "Meta & Google Ads",
  },
];

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
    label: "Technology",
    href: "#technology",
  },
  {
    label: "Process",
    href: "#process",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

function FooterLinks() {
  return (
    <div className="mt-24 grid gap-14 lg:grid-cols-4">

      {/* Brand */}

      <div>

        <h2 className="text-4xl font-black">

          <span className="text-blue-500">
            AA
          </span>

          <span className="text-orange-500">
            DA
          </span>

        </h2>

        <p className="mt-5 leading-8 text-slate-400">
          We create modern websites,
          scalable applications and
          high-converting digital
          marketing solutions for
          ambitious businesses.
        </p>

      </div>

      {/* Services */}

      <div>

        <h3 className="mb-6 text-xl font-bold text-white">
          Services
        </h3>

        <div className="space-y-4">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={service.label}
                whileHover={{
                  x: 6,
                }}
                className="flex items-center gap-3 text-slate-300"
              >

                <Icon
                  size={18}
                  className="text-cyan-400"
                />

                {service.label}

              </motion.div>

            );

          })}

        </div>

      </div>

      {/* Quick Links */}

      <div>

        <h3 className="mb-6 text-xl font-bold text-white">
          Quick Links
        </h3>

        <div className="space-y-4">

          {links.map((link) => (

            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{
                x: 6,
              }}
              className="block text-slate-300 hover:text-cyan-400 transition"
            >
              {link.label}
            </motion.a>

          ))}

        </div>

      </div>

      {/* Contact */}

      <div>

        <h3 className="mb-6 text-xl font-bold text-white">
          Contact
        </h3>

        <div className="space-y-5 text-slate-300">

          <div className="flex items-center gap-3">

            <Phone
              size={18}
              className="text-cyan-400"
            />

            +91 80562 11546

          </div>

          <div className="flex items-center gap-3">

            <Mail
              size={18}
              className="text-cyan-400"
            />

            aadadigitalstudio@gmail.com
          </div>

          <div className="flex items-center gap-3">

            <MapPin
              size={18}
              className="text-cyan-400"
            />

            Chennai, India

          </div>

        </div>

        {/* Social */}

<div className="mt-8 flex">

  <motion.a
    whileHover={{
      y: -5,
      scale: 1.15,
    }}
    href="https://instagram.com/aadadigitalstudio"
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-2xl
      bg-white/10
      backdrop-blur-xl
      hover:bg-pink-500
      transition
    "
  >
    <FaInstagram size={20} />
  </motion.a>

</div>

      </div>

    </div>
  );
}

export default FooterLinks;