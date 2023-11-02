import { socialMedia, transitions300 } from "@/utils/constants.jsx";
import React, { cloneElement } from "react";

const SocialMediaIcons = () => {

  const commonProps = {
    size: 30,
    className: `fill-[#94a3b8] hover:fill-white ${transitions300}`,
  };

  return (
    <div className="flex gap-5 w-[100px] mt-5">
      {socialMedia.map((media) => (
        <a
          href={media.url}
          target="_blank"
          key={media.name}
          className="content-fit"
        >
          {cloneElement(media.icon, commonProps)}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
