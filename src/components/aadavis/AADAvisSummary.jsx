import { motion } from "framer-motion";

export default function AADAvisSummary({ answers = {} }) {
  const rows = [
    {
      icon: "👤",
      label: "Name",
      value: answers.name,
    },
    {
      icon: "📱",
      label: "Phone",
      value: answers.phone,
    },
    {
      icon: "📧",
      label: "Email",
      value: answers.email,
    },
    {
      icon: "🌐",
      label: "Service",
      value: answers.service,
    },
    {
      icon: "💰",
      label: "Budget",
      value: answers.budget,
    },
    {
      icon: "📅",
      label: "Timeline",
      value: answers.timeline,
    },
    {
      icon: "📝",
      label: "Project",
      value: answers.description,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="mt-5 rounded-2xl border border-cyan-200 bg-white p-5 shadow-lg"
    >
      <h3 className="mb-5 text-lg font-semibold text-slate-800">
        📋 Project Summary
      </h3>

      <div className="space-y-4">
        {rows.map((item) => (
          <div
            key={item.label}
            className="flex items-start gap-3 border-b border-slate-100 pb-3 last:border-none last:pb-0"
          >
            <div className="text-xl">{item.icon}</div>

            <div className="flex-1">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                {item.label}
              </p>

              <p className="mt-1 text-sm font-medium text-slate-800 break-words">
                {item.value || "-"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}