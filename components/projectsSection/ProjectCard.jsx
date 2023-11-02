import { transitions150, transitions300 } from "@/utils/constants.jsx";
import React, { useState } from "react";
import LinksAndDeployIcons from "../LinksAndDeployIcons";

const ProjectCard = ({ repo }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`flex flex-col w-full gap-5 rounded hover:bg-hoverPrimary p-3 ${transitions150}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={`flex flex-col justify-center`}>
        <p className={`text-xl font-bold my-5 text-white`}>{repo.name}</p>
        <img src={repo.imageUrl} alt={repo.name} />
      </div>

      <div className="w-full flex gap-3 mt-3 flex-wrap">
        {repo.topics.map((topic) => (
          <div className="bg-[#112b3a] px-3 py-1 rounded-xl" key={topic}>
            <p className="text-lightGreen text-center">{topic}</p>
          </div>
        ))}
      </div>

      <div className="w-full">
        <p className="hidden text-white mb-2">{repo.name}</p>
        <p
          className={`${
            hover ? "text-white" : "text-grey"
          } mb-4 ${transitions150}`}
        >
          {repo.description}
        </p>

        <LinksAndDeployIcons repo={repo} />
      </div>
    </div>
  );
};

export default ProjectCard;
