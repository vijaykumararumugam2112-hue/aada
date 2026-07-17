import { AnimatePresence, motion } from "framer-motion";

import useConversation from "./useConversation";

import AADAvisMessages from "./AADAvisMessages";
import AADAvisInput from "./AADAvisInput";
import AADAvisOptions from "./AADAvisOptions";
import aadavisAvatar from "../../assets/aadavis/aadavis.png";
import AADAvisSummary from "./AADAvisSummary";
import AADAvisSubmit from "./AADAvisSubmit";

export default function AADAvisChat({ open, onClose }) {
  const {
  messages,
  answers,
  currentQuestion,
  isTyping,
  isCompleted,
  isSubmitted,
  submitAnswer,
  submitLead,
} = useConversation();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="
            fixed
            bottom-32
            right-8
            z-[9998]
            flex
            h-[520px]
            w-[360px]
            flex-col
            overflow-hidden
            rounded-3xl
            border
            border-cyan-200/60
            bg-white/80
            backdrop-blur-2xl
            shadow-[0_20px_60px_rgba(0,0,0,0.15)]
          "
        >
          {/* Header */}

          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <div>
              <h2 className="font-bold text-slate-900">
                😊 AADAvis
              </h2>

              <p className="text-xs text-slate-500">
                Digital Project Assistant
              </p>
            </div>

            <button
              onClick={onClose}
              className="text-xl text-slate-500 hover:text-slate-800"
            >
              ✕
            </button>
          </div>

          {/* Messages */}

          <AADAvisMessages messages={messages} />
{isCompleted && !isSubmitted && (
  <div className="px-5 pb-4 space-y-4 overflow-y-auto">
    <AADAvisSummary answers={answers} />
    <AADAvisSubmit
      onSubmit={submitLead}
    />
  </div>
)}
          {/* Typing Indicator */}

{isTyping && (
  <div className="px-5 pb-4">
    <div className="flex items-center gap-3">
      <img
  src={aadavisAvatar}
  alt="AADAvis"
  className="h-10 w-10 rounded-full border border-cyan-200 bg-white shadow-sm"
/>

      <div className="rounded-2xl bg-slate-100 px-4 py-3">
        <div className="flex gap-1">
          <span className="h-2 w-2 animate-bounce rounded-full bg-slate-500"></span>

          <span className="h-2 w-2 animate-bounce rounded-full bg-slate-500 [animation-delay:150ms]"></span>

          <span className="h-2 w-2 animate-bounce rounded-full bg-slate-500 [animation-delay:300ms]"></span>
        </div>
      </div>
    </div>
  </div>
)}

          {/* Current Question */}

          {!isCompleted && currentQuestion?.type === "options" && (
            <div className="px-5 pb-3">
    <AADAvisOptions
  options={currentQuestion.options}
  onSelect={submitAnswer}
  disabled={isTyping}
/>
  </div>
)}

          {/* Input */}

          {!isCompleted && currentQuestion?.type === "input" && (
            <AADAvisInput
  placeholder={currentQuestion?.placeholder}
  onSend={submitAnswer}
  disabled={isTyping}
/>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}