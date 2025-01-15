import "./style.css";

const Login1 = () => {
  return (
    <>
     {/* <section className="relative w-screen h-screen flex justify-center items-center gap-8 bg-black overflow-hidden"> */}
    <section className="relative w-screen h-screen flex justify-center items-center gap-2 flex-wrap bg-gradient-to-b from-black via-green-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-500 to-black animate-[bg-shift_5s_linear_infinite]"></div>
      {Array.from({ length: 200 }).map((_, index) => (
        <span
          key={index}
          className="relative block w-[6.25vw] h-[6.25vw] bg-[#181818] transition-all duration-[1.5s] hover:bg-green-500 sm:w-[10vw] sm:h-[10vw] xs:w-[20vw] xs:h-[20vw]"
        ></span>
      ))}

      <div className="absolute w-[400px] p-10 flex flex-col justify-center items-center rounded shadow-lg z-10 bg-black">
        <div className="w-full flex flex-col items-center gap-10">
          <h2 className="text-2xl text-green-500 uppercase font-bold">
            Sign In
          </h2>
          <form className="w-full flex flex-col gap-6">
            <div className="relative w-full">
              <input
                type="text"
                required
                placeholder="Username"
                className="w-full bg-gray-800 border-none outline-none py-6 px-3 rounded text-white font-medium text-lg placeholder-gray-400"
              />
            </div>
            <div className="relative w-full">
              <input
                type="password"
                required
                placeholder="Password"
                className="w-full bg-gray-800 border-none outline-none py-6 px-3 rounded text-white font-medium text-lg placeholder-gray-400"
              />
            </div>
            <div className="flex justify-between text-white">
              <a href="#" className="hover:underline">
                Forgot Password
              </a>
              <a
                href="#"
                className="font-semibold text-green-500 hover:underline"
              >
                Signup
              </a>
            </div>
            <div>
              <input
                type="submit"
                value="Login"
                className="w-full py-2 bg-green-500 text-black font-semibold text-xl rounded cursor-pointer hover:opacity-80"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  );
};

export default Login1;
