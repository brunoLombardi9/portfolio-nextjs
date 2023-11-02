import React, { useEffect } from "react";
import UseIsVisible from "./UseIsVisible";

const UseGetOptions = (aboutRef, projectsRef, studiesRef, skillsRef,  optionStateObj) => {
  const aboutView = UseIsVisible(aboutRef);
  const projectsView = UseIsVisible(projectsRef);
  const studiesView = UseIsVisible(studiesRef);
  const skillsView = UseIsVisible(skillsRef);

  const options = [
    { name: "Sobre mi", ref: aboutRef, isVisible: aboutView },
    { name: "Proyectos", ref: projectsRef, isVisible: projectsView },
    { name: "Estudios", ref: studiesRef, isVisible: studiesView },
    { name: "Skills", ref: skillsRef, isVisible: skillsView}
  ];

  useEffect(() => {
    options.forEach((option) => {
      if (option.isVisible && option.ref !== optionStateObj.selectedOption) {
        optionStateObj.setSelectedOption(option.ref);
      }
    });
  }, [aboutView, projectsView, studiesView, skillsView]);

  return options;
};

export default UseGetOptions;
