import React from "react";

const BallCanvas = ({ icon ,line}) => {
  return (
    <>
      <img
        src={icon}
        alt="icon"
        className="w-20 h-20	 rounded-full object-contain bg-white "
      />
      <div className=" flex justify-center m-10 ">{line}</div>
    </>
  );
};

export default BallCanvas;
