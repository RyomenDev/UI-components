const Button = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <button className="relative px-6 py-3 bg-blue-600 text-white font-bold text-lg uppercase rounded shadow-lg overflow-hidden group">
        <span className="absolute inset-0 transform translate-x-[66%] bg-gray-900 text-transparent transition-transform duration-500 group-hover:translate-x-0" />
        Hover me!
        <span className="absolute inset-0 transform -translate-x-[66%] bg-gray-900 text-transparent transition-transform duration-500 group-hover:translate-x-0" />
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
