import Loader from "@/components/Loader";
import TopSeparation from "@/components/TopSeparation";
import GoBackLink from "@/components/allProyects/GoBackLink";
import ProyectsTable from "@/components/allProyects/ProjectsTable";
import UseGetGithubData from "@/hooks/UseGetGithubData";
import Head from "next/head";
import React from "react";

const projects = () => {
  const repos = UseGetGithubData("brunoLombardi9");
  return (
    <>
      <Head>
        <title>Bruno Lombardi - Todos los Proyectos</title>
      </Head>
      <TopSeparation />
      <section className="w-full min-h-screen px-4 md:px-24 bg-">
        <GoBackLink />
        <div>
          <h1 className="text-4xl font-bold text-lightGrey sm:text-5xl">
            Todos los Proyectos
          </h1>

          {repos.length > 0 ? (
            <ProyectsTable repos={repos} />
          ) : (
            <div className="h-screen w-full flex justify-center items-center">
              <Loader />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default projects;
