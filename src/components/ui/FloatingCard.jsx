function FloatingCard({
  icon,
  title,
  subtitle,
  className = "",
}) {
  return (
    <div
      className={`
        absolute
        rounded-2xl
        bg-white/80
        backdrop-blur-xl
        border border-white/50
        shadow-2xl
        px-5
        py-4
        min-w-[220px]
        transition-all
        duration-300
        hover:-translate-y-2
        hover:scale-105
        hover:shadow-blue-200
        ${className}
      `}
    >
      <div className="flex items-center gap-4">

        <div className="text-4xl">
          {icon}
        </div>

        <div>

          <h3 className="font-bold text-slate-900">
            {title}
          </h3>

          <p className="text-sm text-slate-500">
            {subtitle}
          </p>

        </div>

      </div>
    </div>
  );
}

export default FloatingCard;