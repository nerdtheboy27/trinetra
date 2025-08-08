import React from "react";

const InteractiveHoverButton = React.forwardRef(({ children, className = "", ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`group relative w-auto cursor-pointer overflow-hidden rounded-full border border-gray-300 bg-white p-2 px-6 text-center font-semibold text-black transition-colors duration-300 ${className}`}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-black"></div>
        <span className="inline-block">{children}</span>
      </div>
      <div
        className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };