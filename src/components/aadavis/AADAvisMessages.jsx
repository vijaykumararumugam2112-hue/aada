import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";

// Update this import path
import aadavisAvatar from "../../assets/aadavis/aadavis.webp";

export default function AADAvisMessages({ messages }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-5">
      <div className="space-y-5">
        <AnimatePresence initial={false}>
          {messages.map((message) => {
            const isBot = message.type === "bot";

            return (
              <motion.div
                key={message.id}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.25,
                }}
                className={`flex ${
                  isBot ? "justify-start" : "justify-end"
                }`}
              >
                {isBot ? (
                  <div className="flex max-w-[90%] items-start gap-3">
                    {/* Avatar */}
                    <img
                      src={aadavisAvatar}
                      alt="AADAvis"
                      className="h-10 w-10 rounded-full object-cover border border-cyan-200 bg-white shadow-sm"
                    />

                    <div>
                      <p className="mb-1 text-xs font-semibold text-cyan-700">
                        AADAvis
                      </p>

                      <div className="rounded-2xl rounded-tl-md bg-cyan-50 px-4 py-3 text-slate-700 shadow-sm">
                        <p className="text-sm leading-6">
                          {message.message}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="max-w-[80%]">
                    <p className="mb-1 text-right text-xs font-semibold text-slate-500">
                      You
                    </p>

                    <div className="rounded-2xl rounded-tr-md bg-cyan-600 px-4 py-3 text-white shadow">
                      <p className="text-sm leading-6">
                        {message.message}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>

        <div ref={bottomRef} />
      </div>
    </div>
  );
}