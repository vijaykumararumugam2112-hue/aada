import { motion } from "framer-motion";
import {
  Clock3,
  Users,
  ShieldCheck,
  Rocket,
} from "lucide-react";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ProcessTimeline from "../process/ProcessTimeline";

const highlights = [
  {
    icon: Clock3,
    title: "Fast Delivery",
    description:
      "Well-planned execution keeps every project on schedule.",
  },
  {
    icon: Users,
    title: "Transparent Communication",
    description:
      "Regular updates and collaboration throughout the project.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Every feature is tested before deployment.",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description:
      "Deployment, optimization and ongoing maintenance.",
  },
];

function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-slate-50 py-32"
    >
      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-24 top-20 h-96 w-96 rounded-full bg-blue-300/10 blur-[140px]" />

        <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-orange-300/10 blur-[140px]" />

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
          badge="⚙️ Our Process"
          title="From Idea to Launch"
          subtitle="Every successful project follows a structured process. We combine strategy, creativity and modern technology to deliver digital products that help businesses grow."
        />

        {/* Timeline */}

        <div className="mt-24">

          <ProcessTimeline />

        </div>

        {/* Bottom Banner */}

        <motion.div
          className="
            mt-28
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-4
          "
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >

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
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  rounded-3xl
                  border
                  border-white/40
                  bg-white/80
                  p-6
                  backdrop-blur-xl
                  shadow-lg
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

        </motion.div>

      </Container>
    </section>
  );
}

export default Process;