export function Project3() {
  return (
    <div className="group container mx-auto relative mt-32 px-[200px] z-30">
      <div className="">
        <div className="border-white px-[30px] py-[35px] flex border-2 rounded-lg w-[960px]  title h-[527px] p-[20px] mt-8 shadow-2xl">
          <div>
            <h1 className="text-xl font-mono  text-[#FFF8EE82]">
              W E B S I T E
            </h1>
            <h1 className="bg-[#4D28A9CC] hover:bg-indigo-800 text-[#47E98D] text-4xl	font-mono font-bold w-[288px] py-3">
              Food delivery
            </h1>
            <p className="text-xl font-mono text-[#FFF8EE] w-[399px]">
              A healthcare education platform. I designed & developed their
              website, increasing organic leads up to 4x in under a year.
            </p>
            <button className="border w-[240px] h-[73px] hover:bg-[#FCF7F0] transition-transform hover:text-black px-2 rounded-md py-1 text-xl mt-48 font-mono text-[#FFF8EE]">
              LAUNCH SITE
            </button>
          </div>

          <div className="relative w-[800px] top-4 left-10   flex justify-center items-center">
            <img
              className=" w-[300px] left-32 flex justify-center items-center absolute inset-0  object-cover transition-transform duration-300 transform "
              src="./images/imac1.svg"
              alt="ipad"
            />
            <img
              className="absolute w-[300px] left-32 inset-0 flex justify-center items-center   object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              src="./images/imac2.svg"
              alt="ipad"
            />
            <img
              className="mt-[310px] mr-[150px] w-[200px] "
              src="./images/keyboardNoColor.svg"
              alt="ipad"
            />
            <img
              className="mt-[310px] mr-[150px] w-[200px] opacity-0 absolute object-cover transition-opacity duration-300 group-hover:opacity-100 "
              src="./images/keyboardColor.svg"
              alt="ipad"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
