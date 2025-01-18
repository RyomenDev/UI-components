import { useState } from "react";

/*  button pseudo-elements and animations which are not supported by Tailwind */

const Button = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <button
        className="relative px-6 py-3 bg-blue-600 text-white font-bold text-lg uppercase rounded shadow-lg overflow-hidden group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span
          className={`absolute inset-0 transform text-transparent transition-transform duration-500 ${
            isHovered
              ? "bg-[#0f0f0f] translate-x-0"
              : "bg-transparent -translate-x-[66%]"
          }`}
          style={{
            top: "-30px",
            left: "calc(-66% - 20px)",
            transform: isHovered
              ? "translate(0, -47%) rotate(0deg)"
              : "translate(0, -90%) rotate(0deg)",
            transition: "transform 0.4s ease-out",
          }}
        />
        Hover me!
        <span
          className={`absolute inset-0 transform text-transparent transition-transform duration-500 ${
            isHovered
              ? "translate-x-0 bg-[#0f0f0f]"
              : "-translate-x-[66%] bg-transparent"
          }`}
          style={{
            top: "-30px",
            left: "calc(-66% - 20px)",
            transform: isHovered
              ? "translate(0, -47%) rotate(0deg)"
              : "translate(0, -90%) rotate(0deg)",
            transition: "transform 0.4s ease-out",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-50 animate-bubbles"
          style={{
            background:
              "radial-gradient(circle at 20% 35%, transparent 0, transparent 2px, white 3px, white 4px, transparent 4px), radial-gradient(circle at 75% 44%, transparent 0, transparent 2px, white 3px, white 4px, transparent 4px), radial-gradient(circle at 46% 52%, transparent 0, transparent 4px, white 5px, white 6px, transparent 6px)",
          }}
        />
      </button>
    </div>
  );
};

export default Button;

{
  /* <span
          className={`absolute inset-0 transform text-transparent transition-transform duration-500`}
          style={{
            top: "-30px",
            left: "calc(-66% - 20px)",
            backgroundColor: isHovered ? "#0f0f0f" : "transparent",
            color: isHovered ? "transparent" : "#gray-900",
            transform: isHovered
              ? "translate(0, -47%) rotate(0deg)"
              : "translate(0, -90%) rotate(0deg)",
            transition: "transform 0.4s ease-out",
          }}
        />
        Hover me!
        <span
          className={`absolute inset-0 transform text-transparent transition-transform duration-500`}
          style={{
            top: "-30px",
            left: "calc(-66% - 20px)",
            backgroundColor: isHovered ? "#0f0f0f" : "transparent",
            color: isHovered ? "transparent" : "#gray-900",
            transform: isHovered
              ? "translate(0, -47%) rotate(0deg)"
              : "translate(0, -90%) rotate(0deg)",
            transition: "transform 0.4s ease-out",
          }}
        /> */
}
