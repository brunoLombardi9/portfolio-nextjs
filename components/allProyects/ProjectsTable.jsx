import React from "react";
import LinksAndDeployIcons from "../LinksAndDeployIcons";

const ProjectsTable = ({ repos }) => {
  return (
    <table className="w-full text-left mt-12">
      <thead>
        <tr className="text-lightGrey font-semibold">
          <th>Año</th>
          <th>Nombre del proyecto</th>
          <th className="hidden md:block">Tecnologías</th>
          <th>Deploy</th>
        </tr>
      </thead>
      <tbody>
        {repos.map((repo) => (
          <tr key={repo.name} className="border-b border-slate-300/10">
            <td className="p-4 ps-0 text-grey">
              {repo.created_at.split("-")[0]}
            </td>
            <td className="p-4 ps-0 text-lightGrey text-wrap">{repo.name}</td>
            <td className="p-4 ps-0 hidden md:flex flex-wrap gap-2">
              {repo.topics.map((topic) => (
                <div className="bg-[#112b3a] px-3 py-1 rounded-xl" key={topic}>
                  <p className="text-lightGreen text-center">{topic}</p>
                </div>
              ))}
            </td>
            <td className="p-4 ps-0">
              <LinksAndDeployIcons repo={repo} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProjectsTable;
