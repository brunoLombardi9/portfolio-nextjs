import React from "react";
import TopSeparation from "../TopSeparation";
import { skills } from "@/utils/constants.jsx";
import SkillCard from "./SkillCard";

const SkillsSection = ({ skillsRef }) => {
  return (
    <>
      <TopSeparation />
      <section ref={skillsRef} className="pb-[100px] md:pb-[120px]">
        <p className="text-white mb-10 text-2xl">Skills</p>

        <div className="w-full grid grid-cols-4 gap-1">
          {skills.map((skill) => (
            <SkillCard skill={skill} key={skill.name} />
          ))}
        </div>
      </section>
    </>
  );
};

export default SkillsSection;

