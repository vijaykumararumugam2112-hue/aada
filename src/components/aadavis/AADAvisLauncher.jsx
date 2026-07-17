import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import aadavis from "../../assets/aadavis/aadavis.png";
import AADAvisBubble from "./AADAvisBubble";
import AADAvisChat from "./AADAvisChat";

export default function AADAvisLauncher() {

  const [showBubble, setShowBubble] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const handleMouseEnter = () => {
  setShowBubble(true);
};

const handleMouseLeave = () => {
  setShowBubble(false);
};

const handleClick = () => {
  setChatOpen(true);
  setShowBubble(false);
};

const handleCloseChat = () => {
  setChatOpen(false);
};

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowBubble(true);

      const hideTimer = setTimeout(() => {
        setShowBubble(false);
      }, 5000);

      return () => clearTimeout(hideTimer);
    }, 2500);

    return () => clearTimeout(showTimer);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex items-end">

      <AADAvisChat
        open={chatOpen}
        onClose={handleCloseChat}
    />
    
      <AADAvisBubble show={showBubble} />

      <motion.div
  onClick={handleClick}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}

        initial={{
          opacity: 0,
          y: 120,
          scale: 0.8,
        }}
        animate={{
  opacity: 1,
  y: [0, -10, 0],
  scale: [1, 1.02, 1],
  filter: [
    "drop-shadow(0 10px 35px rgba(0,255,255,.35))",
    "drop-shadow(0 15px 55px rgba(0,255,255,.65))",
    "drop-shadow(0 10px 35px rgba(0,255,255,.35))",
  ],
}}
        transition={{
          opacity: {
            duration: 0.7,
          },
          scale: {
            duration: 0.7,
          },
          y: {
            delay: 0.7,
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
       whileHover={{
  scale: 1.08,
  y: -6,
}}
        className="cursor-pointer origin-bottom"
      >
        <img
          src={aadavis}
          alt="AADAvis"
          className="w-32 md:w-36 select-none drop-shadow-[0_10px_40px_rgba(0,255,255,0.45)]"
          draggable={false}
        />
      </motion.div>

    </div>
  );
}