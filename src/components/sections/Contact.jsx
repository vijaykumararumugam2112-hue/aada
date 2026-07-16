import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-28"
    >
      {/* Background Glow */}

      <div className="absolute -top-24 right-10 h-80 w-80 rounded-full bg-blue-300/20 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-orange-300/20 blur-[120px]" />

      <Container>

        <SectionTitle
          badge="📞 Contact Us"
          title="Let's Build Something Amazing"
          subtitle="Whether you need a website, an application or digital marketing, we're ready to help turn your ideas into reality."
        />

        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <h3 className="text-4xl font-bold text-slate-900">
              Ready to start your project?
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              From modern websites to scalable applications and high-performing
              Meta & Google Ads, AADA helps businesses establish a strong
              digital presence.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="tel:8056211546"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-2xl
                  bg-blue-600
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:bg-blue-700
                "
              >
                <Phone size={18} />

                Call Now

                <ArrowRight size={18} />
              </a>

              <a
                href="https://wa.me/918056211546"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-2xl
                  border
                  border-slate-300
                  px-8
                  py-4
                  font-semibold
                  transition
                  hover:border-green-500
                  hover:bg-green-50
                "
              >
                <FaWhatsapp
  size={24}
  className="text-[#25D366]"
/>

                WhatsApp
              </a>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-8
              shadow-xl
            "
          >

            <div className="space-y-8">

              <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-blue-100 p-4">
                  <Phone className="text-blue-600" />
                </div>

                <div>

                  <p className="text-sm text-slate-500">
                    Phone
                  </p>

                  <h3 className="text-xl font-bold">
                    +91 80562 11546
                  </h3>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-orange-100 p-4">
                  <MapPin className="text-orange-500" />
                </div>

                <div>

                  <p className="text-sm text-slate-500">
                    Location
                  </p>

                  <h3 className="text-xl font-bold">
                    Chennai, India
                  </h3>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-green-100 p-4">
                  <FaWhatsapp className="text-green-600" />
                </div>

                <div>

                  <p className="text-sm text-slate-500">
                    WhatsApp
                  </p>

                  <h3 className="text-xl font-bold">
                    Quick Response
                  </h3>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </Container>

    </section>
  );
}

export default Contact;