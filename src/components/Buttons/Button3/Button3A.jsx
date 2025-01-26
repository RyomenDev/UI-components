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
          <span className="absolute top-[-10px] left-[3%] w-[95%] h-[40%] bg-[#151F28] origin-center scale-0 group-hover:scale-100 transition-transform duration-500 after:content-['']"></span>
        </button>
      </div>
    </>
  );
};

export default Button;
