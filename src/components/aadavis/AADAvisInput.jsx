import { useState } from "react";
import { motion } from "framer-motion";

export default function AADAvisInput({
  placeholder = "Type here...",
  onSend,
  disabled = false,
}) {
  const [value, setValue] = useState("");

  const handleSend = () => {
    const text = value.trim();

    if (!text || disabled) return;

    onSend(text);
    setValue("");
  };

  return (
    <div className="border-t border-slate-200 p-4 flex gap-3">
      <input
        type="text"
        value={value}
        disabled={disabled}
        placeholder={
  disabled
    ? "AADAvis is typing..."
    : placeholder
}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
  if (disabled) return;

  if (e.key === "Enter") {
    handleSend();
  }
}}
        className="
          flex-1
          rounded-xl
          border
          border-slate-300
          bg-white
          px-4
          py-3
          text-sm
          outline-none
          transition-all
          focus:border-cyan-500
          disabled:cursor-not-allowed
          disabled:bg-slate-100
        "
      />

      <motion.button
  whileHover={
    disabled
      ? {}
      : {
          scale: 1.03,
        }
  }
  whileTap={
    disabled
      ? {}
      : {
          scale: 0.97,
        }
  }
  onClick={handleSend}
  disabled={disabled}
  className="
    rounded-xl
    bg-cyan-600
    px-5
    py-3
    font-medium
    text-white
    transition
    hover:bg-cyan-700
    disabled:cursor-not-allowed
    disabled:bg-slate-300
    disabled:hover:bg-slate-300
  "
>
  {disabled ? "..." : "Send"}
</motion.button>
    </div>
  );
}