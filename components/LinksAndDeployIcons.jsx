import { transitions300 } from "@/utils/constants";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { ImGithub } from "react-icons/im";

const LinksAndDeployIcons = ({ repo }) => {
  const iconsStyles = `fill-lightGrey hover:fill-lightGreen ${transitions300}`;
  return (
    <div className="flex gap-4 items-center">
      {repo.homepage && (
        <a href={repo.homepage} target="_blank">
          <BiLinkExternal size={35} className={iconsStyles} />
        </a>
      )}
      {repo.clone_url && (
        <a href={repo.clone_url} target="_blank">
          <ImGithub size={30} className={iconsStyles} />
        </a>
      )}
    </div>
  );
};

export default LinksAndDeployIcons;
