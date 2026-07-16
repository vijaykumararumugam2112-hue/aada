import { motion } from "framer-motion";

import TechnologyCard from "./TechnologyCard";

import { FaReact } from "react-icons/fa";

import {
  SiFirebase,
  SiTailwindcss,
  SiVite,
  SiFramer,
  SiCloudinary,
  SiMeta,
  SiGoogleads,
} from "react-icons/si";

import { Search } from "lucide-react";

const technologies = [
  {
    name: "React",
    category: "Frontend",
    icon: FaReact,
    level: "Expert",
    iconColor: "#61DAFB",
  },
  {
    name: "Vite",
    category: "Build Tool",
    icon: SiVite,
    level: "Advanced",
    iconColor: "#646CFF",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: SiTailwindcss,
    level: "Expert",
    iconColor: "#38BDF8",
  },
  {
    name: "Framer Motion",
    category: "Animation",
    icon: SiFramer,
    level: "Advanced",
    iconColor: "#FF4D8D",
  },
  {
    name: "Firebase",
    category: "Backend",
    icon: SiFirebase,
    level: "Expert",
    iconColor: "#FFCA28",
  },
  {
    name: "Cloudinary",
    category: "Media",
    icon: SiCloudinary,
    level: "Advanced",
    iconColor: "#3448C5",
  },
  {
    name: "Meta Ads",
    category: "Marketing",
    icon: SiMeta,
    level: "Professional",
    iconColor: "#1877F2",
  },
  {
    name: "Google Ads",
    category: "Marketing",
    icon: SiGoogleads,
    level: "Professional",
    iconColor: "#34A853",
  },
  {
    name: "SEO",
    category: "Optimization",
    icon: Search,
    level: "Advanced",
    iconColor: "#10B981",
  },
];

function TechnologyGrid() {
  return (
    <div className="relative">

      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-300/15 blur-[120px]" />

        <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-orange-300/15 blur-[120px]" />

      </div>

      {/* Grid */}

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {technologies.map((tech, index) => (

          <motion.div
            key={tech.name}
            initial={{
              opacity: 0,
              y: 50,
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
          >
            <TechnologyCard
              icon={tech.icon}
              name={tech.name}
              category={tech.category}
              level={tech.level}
              iconColor={tech.iconColor}
            />
          </motion.div>

        ))}

      </div>

    </div>
  );
}

export default TechnologyGrid;