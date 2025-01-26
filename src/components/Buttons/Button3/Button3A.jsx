const Button = () => {
  return (
    <>
      <div className="bg-[#151F28] flex justify-center items-center h-screen">
        <button
          className="relative w-40 h-14 border-[3px] border-[#149CEA] bg-transparent text-white font-bold text-lg rounded-md transition-all duration-1000 group overflow-hidden 
          hover:shadow-[inset_0_0_25px_rgba(20,147,234,1)]"
          style={{ border: "3px ridge #149CEA" }}
          //   style={{ boxShadow: "inset 0 0 25px rgba(255, 0, 0, 0.5)" }}
        >
          Hover me
          {/* Before pseudo-element */}
          {/* <span
            style={{
              content: "",
              position: "absolute",
              top: "90%",
              left: "3%",
              width: "95%",
              height: "40%",
              backgroundColor: "#ffffff",
              transition: "0.5s",
              transformOrigin: "center",
              border:"4px solid "
            }}
          /> */}
          {/* <span className=" content-[''] absolute top-[90%] left-[3%] w-[95%] h-[40%] bg-white transform origin-center transition-transform duration-500 group-hover:scale-0 overflow-visible" /> */}
          {/* After pseudo-element */}
          {/* <span className="border-4 border-blue-400 content-[''] absolute top-[-15px] left-[3%] w-[95%] h-[40%] bg-[#151F28] transform origin-center transition-transform duration-500 group-hover:scale-0" /> */}
        </button>
      </div>
    </>
  );
};

export default Button;
