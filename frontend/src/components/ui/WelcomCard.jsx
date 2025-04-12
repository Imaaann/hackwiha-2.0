const WelcomCard = () => {
  return (
    <div className="p-3   w-[400px]  flex flex-col items-center text-white">
      <h1 className="mb-5 text-5xl text-center tracking-wide ">
        The <span className="text-[#9D7BFB]  w-[384px]">FULL</span> <br />{" "}
        Learning <br />
        Experience
      </h1>
      <button className="bg-gradient-to-b from-[#610094] to-[#3C16A6] text-white my-10 rounded-[5px] w-[120px] h-[50px] text-[40px] flex justify-center items-center font-normal  cursor-pointer">
        Start
      </button>
      <p className="text-[#9D7BFB] mb-3 font-light  cursor-pointer ">log in</p>
      <p className="font-light text-base  cursor-pointer">learn More</p>
    </div>
  );
};

export default WelcomCard;
