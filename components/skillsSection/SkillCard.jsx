import { transitions300 } from "@/utils/constants";
import React, { cloneElement, useState } from "react";

const SkillCard = ({ skill }) => {
  const [hover, setHover] = useState(false);

  const commonProps = {
    size: hover ? 45 : 40,
    className: `${hover ? skill.color : "fill-lightGrey"} ${transitions300}`,
  };

  return (
    <div
      className="px-5 flex flex-col justify-center items-center rounded h-[90px]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {cloneElement(skill.icon, commonProps)}
      <p className="text-center text-xs md:text-sm text-grey mt-2 w-[100px]">
        {skill.name}
      </p>
    </div>
  );
};

export default SkillCard;
