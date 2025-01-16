const Login = () => {
  return (
    <>
      <section className="absolute flex flex-wrap justify-center items-center  gap-1 w-full h-screen overflow-hidden bg-black border-[2px] border-[#0f0] ">
        {/* Background animation */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000] via-[#0f0] to-[#000] bg-gradient-size animate-slide" />

        {/* Grid spans */}
        {Array.from({ length: 200 }).map((_, index) => (
          <span
            key={index}
            className="relative block w-[calc(6.25vw_-_2px)] h-[calc(6.25vw_-_2px)] bg-[#181818] transition-colors duration-[1.5s] hover:bg-[#0f0]"
          ></span>
        ))}

        {/* Sign-in form */}
        <div className=" absolute w-[400px] p-10 rounded-lg shadow-lg bg-black z-10">
          <div className="flex flex-col items-center gap-10">
            <h2 className="text-2xl font-bold uppercase text-green-500">
              Sign In
            </h2>

            <form className="w-full flex flex-col gap-6">
              {/* Username input */}
              <div className="relative w-full">
                <input
                  type="text"
                  required
                  className="w-full px-3 py-6 bg-gray-800 text-white rounded-md outline-none focus:ring-2 focus:ring-green-500"
                />
                <label className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 pointer-events-none transition-all duration-300 focus-within:translate-y-[-10px] focus-within:text-sm focus-within:text-white">
                  Username
                </label>
              </div>

              {/* Password input */}
              <div className="relative w-full">
                <input
                  type="password"
                  required
                  className="w-full px-3 py-6 bg-gray-800 text-white rounded-md outline-none focus:ring-2 focus:ring-green-500"
                />
                <label className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 pointer-events-none transition-all duration-300 focus-within:translate-y-[-10px] focus-within:text-sm focus-within:text-white">
                  Password
                </label>
              </div>

              {/* Links */}
              <div className="flex justify-between text-sm">
                <a href="#" className="text-gray-400 hover:text-white">
                  Forgot Password
                </a>
                <a
                  href="#"
                  className="font-semibold text-green-500 hover:text-green-400"
                >
                  Signup
                </a>
              </div>

              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-3 bg-green-500 text-black font-semibold text-lg rounded-md hover:bg-green-600"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
