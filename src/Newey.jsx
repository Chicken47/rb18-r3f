import React from "react";

const Newey = () => {
  return (
    <div className="h-screen px-10 newey-section bg-slate-900">
      <div className="flex items-center w-full h-2/3">
        <div className="flex flex-col">
          <span className="text-rbyellow text-[5vw] font-bold">
            Adrian Newey OBE
          </span>
          <span className="text-[24px] text-white font-bold tracking-wide">
            Undoubtedly the most successful designer in Formula 1 history,
            Adrian Newey, Oracle Red Bull Racing’s Chief Technical Officer, has
            won 11 Formula 1 Constructors’ Titles and propelled some of the
            sport’s most iconic racers to Drivers’ Championship success.
          </span>
        </div>
        <img
          src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSiCcr4jDQVOm9W-qH9hV54oiCz-k19S7yzeGpqxCVZYggw-EAuIOzgso40oxpYyyTdJiERQr1Uiag5rWU"
          className="border-4 border-white rounded-full h-1/2 "
        />
      </div>
    </div>
  );
};

export default Newey;
