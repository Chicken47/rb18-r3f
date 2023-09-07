import React from "react";

const Hero = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center text-whiteish font-bold font-sans">
      <div className="w-2/3 flex items-center justify-center space-x-3 pt-10">
        <img
          src="https://img.redbull.com/images/w_440/q_auto,f_auto/redbullcom/2022/2/9/uxgdknthvvsnfla76pii/oracle-red-bull-racing-logo"
          className="w-1/6"
        />
        <span className="stroke-slate-100 text-yellow text-[8vw]">RB18</span>
      </div>
      <span className="w-4/5 text-center text-[20px]">
        The Red Bull Racing RB18, the jewel in the crown of Adrian Newey's
        illustrious career, redefines the very essence of dominance on the
        track. In the 2022 Formula One World Championship, this magnificent
        beast roared with unparalleled prowess, guided by the virtuosos of the
        racing world, Max Verstappen and Sergio Pérez.
      </span>
    </div>
  );
};

export default Hero;
