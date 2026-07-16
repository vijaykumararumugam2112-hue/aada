import { motion } from "framer-motion";
import {
  ShieldCheck,
  Smartphone,
  Gauge,
  Cloud,
} from "lucide-react";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import TechnologyGrid from "../tech/TechnologyGrid";

const highlights = [
  {
    icon: Gauge,
    title: "High Performance",
    description: "Fast loading, optimized and scalable applications.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Architecture",
    description: "Modern development practices with secure cloud services.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Perfect experience across desktop, tablet and mobile.",
  },
  {
    icon: Cloud,
    title: "Cloud Ready",
    description: "Built for deployment, scalability and future growth.",
  },
];

function TechnologyStack() {
  return (
    <section
      id="technology"
      className="relative overflow-hidden bg-white py-32"
    >
      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-24 top-24 h-96 w-96 rounded-full bg-blue-300/10 blur-[140px]" />

        <div className="absolute -right-24 bottom-20 h-96 w-96 rounded-full bg-orange-300/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right,#3b82f6 1px,transparent 1px),
              linear-gradient(to bottom,#3b82f6 1px,transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

      </div>

      <Container>

        <SectionTitle
          badge="⚡ Technology Stack"
          title="Built With Modern Technologies"
          subtitle="We use reliable, industry-leading technologies to create fast, secure and scalable digital products."
        />

        {/* Grid */}

        <div className="mt-20">

          <TechnologyGrid />

        </div>

        {/* Bottom Highlights */}

        <div className="mt-24 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white/80
                  p-6
                  shadow-lg
                  backdrop-blur-xl
                "
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg">

                  <Icon size={26} />

                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}

export default TechnologyStack;