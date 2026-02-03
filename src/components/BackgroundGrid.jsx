const BackgroundGrid = () => {
  return (
    <div className="grid-background fixed inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 p-[0.5vw] grid grid-rows-4 gap-[0.5vw] transform -skew-y-8 scale-125 opacity-40"
        style={{ transformOrigin: "center center" }}
      >
        <div className="flex gap-[0.5vw] w-max animate-marquee-left">
          <div className="flex gap-[0.5vw]">
            <div className="w-[10vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[24vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[5vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[18vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[14vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[8vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[20vw] bg-gray-700 rounded animate-pulse"></div>
          </div>
          <div className="flex gap-[0.5vw]">
            <div className="w-[10vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[24vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[5vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[18vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[14vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[8vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[20vw] bg-gray-700 rounded animate-pulse"></div>
          </div>
        </div>

        <div className="flex gap-[0.5vw] w-max animate-marquee-right">
          <div className="flex gap-[0.5vw]">
            <div className="w-[24vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[14vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[10vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[16vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[12vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[18vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[9vw] bg-gray-700 rounded animate-pulse"></div>
          </div>
          <div className="flex gap-[0.5vw]">
            <div className="w-[24vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[14vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[10vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[16vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[12vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[18vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[9vw] bg-gray-700 rounded animate-pulse"></div>
          </div>
        </div>

        <div className="flex gap-[0.5vw] w-max animate-marquee-left-slow">
          <div className="flex gap-[0.5vw]">
            <div className="w-[18vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[26vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[5vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[15vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[11vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[22vw] bg-gray-700 rounded animate-pulse"></div>
          </div>
          <div className="flex gap-[0.5vw]">
            <div className="w-[18vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[26vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[5vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[15vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[11vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[22vw] bg-gray-700 rounded animate-pulse"></div>
          </div>
        </div>

        <div className="flex gap-[0.5vw] w-max animate-marquee-right-slow">
          <div className="flex gap-[0.5vw]">
            <div className="w-[10vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[18vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[18vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[13vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[9vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[17vw] bg-gray-700 rounded animate-pulse"></div>
          </div>
          <div className="flex gap-[0.5vw]">
            <div className="w-[10vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[18vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[18vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[13vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[9vw] bg-gray-700 rounded animate-pulse"></div>
            <div className="w-[17vw] bg-gray-700 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundGrid;
