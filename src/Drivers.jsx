import React from "react";

const Drivers = () => {
  return (
    <div id="driver-section" className="flex w-full h-screen">
      <div className="z-50 flex flex-col items-center justify-center w-1/2 h-full">
        <div className="flex items-center w-full justify-evenly">
          <div className="flex flex-col items-center justify-center w-1/2 space-y-3 text-white text-[20px]">
            <img
              src="https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/verstappen.jpg.img.1024.medium.jpg/1677069646195.jpg"
              className="w-3/5 border-4 border-white rounded-lg"
            />
            <span className="text-rbyellow text-[2vw] font-bold">
              Max Verstappen
            </span>
            <span className="italic font-bold text-rbred text-[22px]">33</span>
            <span>
              <b>Team: </b>Red Bull Racing
            </span>
            <span>
              <b>Country:</b> Netherlands
            </span>
            <span>
              <b>Race Wins:</b> 47
            </span>
            <span>
              <b>Points:</b> 2375.5
            </span>
            <span>
              <b>Races:</b> 177
            </span>
          </div>
          <div className="flex flex-col items-center justify-center w-1/2 space-y-3 text-white text-[20px]">
            <img
              src="https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/perez.jpg.img.1024.medium.jpg/1677069773437.jpg"
              className="w-3/5 border-4 border-white rounded-lg"
            />
            <span className="text-rbyellow text-[2vw] font-bold">
              Sergio Perez
            </span>
            <span className="italic font-bold text-rbred text-[22px]">11</span>
            <span>
              <b>Team: </b>Red Bull Racing
            </span>
            <span>
              <b>Country:</b> Mexico
            </span>
            <span>
              <b>Race Wins:</b> 6
            </span>
            <span>
              <b>Points:</b> 1420
            </span>
            <span>
              <b>Races:</b> 250
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drivers;
