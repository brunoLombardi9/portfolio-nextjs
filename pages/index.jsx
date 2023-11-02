import React, { useRef, useState } from "react";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import Typewriter from "typewriter-effect";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/projectsSection/ProjectsSection";
import StudiesSection from "@/components/studiesSection/StudiesSection";
import Navbar from "@/components/Navbar";
import UseGetOptions from "@/hooks/UseGetOptions";
import { desktopScroll } from "@/utils/handleScroll";
import { transitions150 } from "@/utils/constants.jsx";
import SkillsSection from "@/components/skillsSection/SkillsSection";
import Head from "next/head";

const index = () => {
  const aboutRef = useRef();
  const projectsRef = useRef();
  const studiesRef = useRef();
  const skillsRef = useRef();
  const nameRef = useRef();
  const [selectedOption, setSelectedOption] = useState(aboutRef);
  const options = UseGetOptions(aboutRef, projectsRef, studiesRef, skillsRef, {
    selectedOption,
    setSelectedOption,
  });

  return (
    <>
      <Head>
        <title>Bruno Lombardi - Frontend Developer</title>
      </Head>
      <Navbar options={options} selectedOption={selectedOption} />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-center md:h-[100vh] p-5 md:sticky top-0">
          <section className="md:w-[400px] md:pt-[100px] flex flex-col gap-6">
            <div>
              <h1
                className="text-white font-bold text-4xl md:text-5xl"
                ref={nameRef}
              >
                <Typewriter
                  options={{
                    strings: ["Bruno Lombardi"],
                    autoStart: true,
                    loop: true,
                    delay: 150,
                    deleteSpeed: 40,
                    cursorClassName: "z-10 Typewriter__cursor",
                  }}
                />
              </h1>
              <h2 className="text-lightGrey text-2xl md:text-3xl mt-4">
                Frontend Developer
              </h2>
              <p className="text-grey mt-4">
                Entusiasta de la tecnología y la web. Especializado en la
                creación de sitios webs responsivos y fáciles de usar con las
                últimas teconologías.
              </p>
            </div>

            <ul className="hidden md:flex flex-col gap-3 mt-8">
              {options.map((option) => (
                <li
                  key={option.name}
                  onClick={() => desktopScroll(nameRef, option.ref)}
                  className={`font-bold cursor-pointer uppercase text-sm hover:translate-x-4 w-fit ${transitions150} ${
                    option.ref === selectedOption ? "text-white" : "text-grey"
                  }`}
                >
                  {option.name}
                </li>
              ))}
            </ul>
            <div className="w-full flex justify-between">
              <SocialMediaIcons />
            </div>
          </section>
        </div>

        <div className="flex flex-col items-center md:min-h-[100vh] p-5">
          <div className="md:max-w-[500px] flex flex-col gap-6">
            <AboutSection aboutRef={aboutRef} />
            <ProjectsSection projectsRef={projectsRef} />
            <StudiesSection studiesRef={studiesRef} />
            <SkillsSection skillsRef={skillsRef} />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
