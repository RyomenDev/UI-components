const Button = () => {
  return (
    <div className="bg-[#151F28] flex justify-center items-center h-screen">
      <button className="w-40 h-24 border-4 border-[#149CEA]">
      {/* <button className="relative w-40 h-14 border-4 border-[#149CEA] bg-transparent text-white font-bold text-lg rounded-md transition-all duration-1000 group overflow-hidden"> */}
        {/* <span className="absolute top-[-10px] left-[3%] w-[95%] h-[40%] bg-[#151F28] origin-center transition-transform duration-500 group-hover:scale-0" /> */}
        {/* <span className="absolute top-[80%] left-[3%] w-[95%] h-[40%] bg-[#151F28] origin-center transition-transform duration-500 group-hover:scale-0" /> */}
        Hover me
      </button>
    </div>
  );
};

export default Button;
