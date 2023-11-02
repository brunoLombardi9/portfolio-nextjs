import React from "react";
import TopSeparation from "../TopSeparation";
import UseGetGithubData from "@/hooks/UseGetGithubData";
import ProjectCard from "./ProjectCard";
import Loader from "../Loader";
import AllProjectsLink from "./AllProjectsLink";

const ProjectsSection = ({ projectsRef }) => {
  const userName = "brunoLombardi9";
  const userData = UseGetGithubData(userName);

  const userRepos = userData.filter((repos) => repos.topics.length > 0);
  userRepos.forEach(
    (repo) =>
      (repo.imageUrl = `https://raw.githubusercontent.com/${userName}/${repo.name}/main/snapshot.png`)
  );

  return (
    <>
      <TopSeparation />
      <section ref={projectsRef} className="min-h-[100vh]">
        <p className="text-white mb-10 text-2xl">Proyectos</p>

        <div className="w-full min-h-[70%] flex flex-col justify-center items-center gap-10">
          {userRepos.length > 0 ? (
            <>
              {userRepos.map((repo) => (
                <ProjectCard repo={repo} key={repo.name} />
              ))}
              <AllProjectsLink />
            </>
          ) : (
            <Loader />
          )}
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
