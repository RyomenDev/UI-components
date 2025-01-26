const Button = () => {
  return (
    <>
      <div className="bg-[#151F28] flex justify-center items-center h-screen">
        <button
          className="relative w-40 h-14 border-[3px] border-[#149CEA] bg-transparent text-white font-bold text-lg rounded-md transition-all duration-1000 group overflow-hidden 
          hover:shadow-[inset_0_0_25px_rgba(20,147,234,1)]"
          //   style={{ boxShadow: "inset 0 0 25px rgba(255, 0, 0, 0.5)" }}
        >
          Hover me
        </button>
      </div>
    </>
  );
};

export default Button;
