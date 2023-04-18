import React from "react";

import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import {tools,languages,databases, libraries} from "../constants";


const Tech = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionHeadText} flex justify-center `}>
          My Skills
        </p>
        <br />
      </div>

      <h2 className={`${styles.sectionSubText} py-10  `}>Languages.</h2>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {languages.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} line={technology.name} />
          </div>
        ))}
      </div>
      <br />
      <h2 className={`${styles.sectionSubText} py-10 `}>Libraries.</h2>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {libraries.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} line={technology.name} />
          </div>
        ))}
      </div>
      <br />
      <br />

      <h2 className={`${styles.sectionSubText} py-10 `}>
        FrameWork, Tools <br /> and Services.
      </h2>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {tools.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} line={technology.name} />
          </div>
        ))}
      </div>
      <br />

      <h2 className={`${styles.sectionSubText} py-10 `}>Databases.</h2>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {databases.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} line={technology.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
