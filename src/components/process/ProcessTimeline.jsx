import { motion } from "framer-motion";

import {
  Search,
  ClipboardList,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
} from "lucide-react";

import ProcessCard from "./ProcessCard";

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We understand your business goals, audience and project requirements before writing a single line of code.",
    icon: Search,
    color: "from-blue-600 to-cyan-500",
  },
  {
    step: "02",
    title: "Planning",
    description:
      "We define the project structure, user flow, timeline and technical architecture for smooth execution.",
    icon: ClipboardList,
    color: "from-cyan-500 to-sky-500",
  },
  {
    step: "03",
    title: "UI / UX Design",
    description:
      "Beautiful, responsive and intuitive interfaces are designed to maximize user engagement.",
    icon: Palette,
    color: "from-orange-500 to-amber-500",
  },
  {
    step: "04",
    title: "Development",
    description:
      "Modern technologies are used to build secure, scalable and high-performance digital solutions.",
    icon: Code2,
    color: "from-indigo-600 to-violet-500",
  },
  {
    step: "05",
    title: "Testing",
    description:
      "Every feature is tested for performance, responsiveness, security and reliability before launch.",
    icon: ShieldCheck,
    color: "from-emerald-500 to-green-600",
  },
  {
    step: "06",
    title: "Launch & Support",
    description:
      "After deployment we continue to provide updates, optimization and long-term support.",
    icon: Rocket,
    color: "from-pink-500 to-rose-500",
  },
];

function ProcessTimeline() {
  return (
    <div className="relative">

      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute top-24 left-0 h-80 w-80 rounded-full bg-blue-300/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-300/10 blur-[140px]" />

      </div>

      {/* Timeline */}

      <div className="grid gap-14 md:grid-cols-2 xl:grid-cols-3">

        {processSteps.map((step, index) => (

          <motion.div
            key={step.step}
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
            }}
            className={
              index % 2 === 1
                ? "xl:mt-24"
                : ""
            }
          >
            <ProcessCard
              {...step}
              isLast={index === processSteps.length - 1}
            />
          </motion.div>

        ))}

      </div>

    </div>
  );
}

export default ProcessTimeline;