import React from 'react'
import { styles } from "../styles"; 
import {logoend}from "../assets";
import {socialLinks} from "../constants";
import {reactjs} from "../assets";
function End() {
  return (
    <div className="flex min-h-screen   justify-center flex-col">
      <div className="flex  justify-center gap-10">
        <div className="mt-10">
          <img src={logoend} alt="logo" className=" w-36   " />
        </div>
        <div className=" flex mt-16 pt-2  text-lg flex-col mb-20">
          <p className=" text-2xl ">Learner and Explorer</p>
        </div>
      </div>
      <div className=" flex justify-center py-16 gap-10">
        {socialLinks.map((links) => {
          return (
            <a href={links.url} target='_blank' className='cursor'>
              <img
                src={links.img}
                alt="icon"
                className="w-12 bg- rounded-full bg-white "
              />
            </a>
          );
        })}
      </div>

      <div
        className= "flex justify-center py-12 flex-col"
      >
        <div className="flex py-10 justify-center text-2xl">Created by Anshul</div>
        <div className="flex justify-center -top-10">
          Made with
          <span>
            {"  "}
            <img src={reactjs} alt="" className="inline w-7" />
          </span>
          REACT
        </div>
      </div>
    </div>
  );
}

export default End
