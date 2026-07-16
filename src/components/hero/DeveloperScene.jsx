import { motion } from "framer-motion";

import developerImg from "../../assets/images/developer.png";

import BackgroundEffects from "./BackgroundEffects";
import WebsiteCard from "./WebsiteCard";
import AppCard from "./AppCard";
import AdsCard from "./AdsCard";

import useMouseParallax from "../../hooks/useMouseParallax";
import AmbientParticles from "./AmbientParticles";

function DeveloperScene() {
  const developer = useMouseParallax(6);

const browser = useMouseParallax(24);

const phone = useMouseParallax(28);

const ads = useMouseParallax(18);

  return (
    <div className="relative hidden h-[760px] w-full items-center justify-center lg:flex overflow-visible">

      {/* Background */}

      <BackgroundEffects />

<AmbientParticles />

      {/* Spotlight */}

      <motion.div
        className="
          absolute
          z-0
          h-[430px]
          w-[430px]
          rounded-full
          bg-gradient-to-r
          from-blue-400/25
          via-cyan-300/20
          to-orange-300/15
          blur-[120px]
        "
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.45, 0.7, 0.45],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* WEBSITE */}

      <motion.div
        className="absolute left-[-30px] top-2 z-20"
        style={{
          x: browser.x,
          y: browser.y,
        }}
        initial={{
          opacity: 0,
          x: -120,
        }}
        animate={{
          opacity: 1,
          x: browser.x,
          y: [0, -10, 0],
          rotate: [0, -2, 0],
        }}
        transition={{
          opacity: {
            duration: 0.8,
            delay: 0.3,
          },
          x: {
            duration: 0.8,
            delay: 0.3,
          },
          y: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <WebsiteCard />
      </motion.div>

      {/* ADS */}

      <motion.div
        className="absolute bottom-0 left-6 z-30"
        style={{
          x: ads.x,
          y: ads.y,
        }}
        initial={{
          opacity: 0,
          y: 120,
        }}
        animate={{
          opacity: 1,
          y: [0, -8, 0],
          rotate: [0, 1.5, 0],
        }}
        transition={{
          opacity: {
            duration: 0.8,
            delay: 0.7,
          },
          y: {
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <AdsCard />
      </motion.div>

      {/* DEVELOPER */}

      <motion.img
        src={developerImg}
        alt="Developer"
        className="
          relative
          z-50
          w-[540px]
          select-none
          drop-shadow-[0_40px_90px_rgba(0,0,0,0.35)]
          pointer-events-none
        "
        style={{
          x: developer.x,
          y: developer.y,
        }}
        initial={{
          opacity: 0,
          scale: 0.92,
          y: 80,
        }}
        animate={{
          opacity: 1,
          scale: [1, 1.015, 1],
          y: [0, -8, 0],
          rotate: [0, 0.5, 0],
        }}
        transition={{
          opacity: {
            duration: 0.9,
          },
          scale: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
          y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* PHONE */}

      <motion.div
        className="absolute right-[-15px] top-0 z-40"
        style={{
          x: phone.x,
          y: phone.y,
        }}
        initial={{
          opacity: 0,
          x: 120,
        }}
        animate={{
          opacity: 1,
          x: phone.x,
          y: [0, -12, 0],
          rotate: [0, 2, 0],
        }}
        transition={{
          opacity: {
            duration: 0.8,
            delay: 0.45,
          },
          x: {
            duration: 0.8,
            delay: 0.45,
          },
          y: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <AppCard />
      </motion.div>
    </div>
  );
}

export default DeveloperScene;