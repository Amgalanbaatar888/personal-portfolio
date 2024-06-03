export function Intro() {
  return (
    <div className="container mx-auto  mt-32 px-[200px]">
      <img
        className="w-[150px] h-[150px] rounded-md border-white border-2"
        src="./images/pro.jpeg"
        alt=""
      />
      <div>
        <h1 className="text-xl	text-[#FFF8EE82] font-space my-4">
          Galkhuu Amgalanbaatar
        </h1>
        <h1 className="text-6xl font-space text-[#9660f9] mb-4">DEVELOPER</h1>
        <p className="text-[22px] text-[#FCF7F0] font-space">
          I am a full stack developer , originally from England and now based in
          Sweden. With a background in freelance work specialising in creating
          interactive websites, I'm passionate about building experiences that
          are not only beautiful and functional but also take into account the
          broader ecosystems in which they exist.
        </p>
      </div>
    </div>
  );
}
