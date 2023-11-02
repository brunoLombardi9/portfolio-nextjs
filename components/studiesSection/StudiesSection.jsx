import React from "react";
import TopSeparation from "../TopSeparation";
import CertificationCard from "./CertificationCard";
import { studies } from "@/utils/constants.jsx";

const StudiesSection = ({ studiesRef }) => {
  return (
    <>
      <TopSeparation />
      <div ref={studiesRef} className="md:min-h-[100vh]">
        <p className="text-white mb-10 text-2xl">Estudios</p>

        <div className="w-full flex flex-col gap-10">
          {studies.map((study) => (
            <CertificationCard study={study} key={study.name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default StudiesSection;
