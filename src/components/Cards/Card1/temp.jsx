<a href="#">
  <div
    className="relative w-[calc(300px/1.5)] h-[300px] flex justify-center items-end px-9 rounded-md transform"
    style={{ transition: "all 0.5s" }}
  >
    <div
      className=" absolute w-full z-[-1] rounded-md"
      style={{
        transition: "all 0.5s",
        transform:
          "perspective(900px) translateY(-5%) rotateX(25deg) translateZ(0)",
        boxShadow: "2px 35px 32px -8px rgba(0, 0, 0, 0.75)",
      }}
    >
      <img
        src={coverImage}
        alt="Cover"
        className=" w-full h-full object-cover rounded-md"
      />
    </div>
    <img
      src={titleImage}
      alt="Title"
      className=" w-full transition-transform duration-500"
      style={{
        transform: "translate3d(0%, -50px, 100px)",
      }}
    />
    <img
      src={characterImage}
      alt="Character"
      className=" absolute w-full opacity-0 transition-all duration-500 z-[-1]"
      style={{
        opacity: 1,
        transform: "translate3d(0%, -30%, 100px)",
      }}
    />
  </div>
</a>;
