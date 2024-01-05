import React from "react";
import TopSeparation from "./TopSeparation";

const AboutSection = ({ aboutRef }) => {
  return (
    <>
      <TopSeparation />
      <section className="md:min-h-[100vh]">
        <p className="text-white mb-10 text-2xl" ref={aboutRef}>
          Sobre mi
        </p>
        <div className="h-full flex flex-col gap-5">
          <p className="text-grey">
            Desde siempre fuí un aficionado de la tecnología y todo lo que
            deriva de ella, lo cual me fue acercando poco a poco al mundo del
            desarrollo web, al cual me vengo dedicando el último tiempo.
          </p>

          <p className="text-grey">
            La curiosidad por este mundo me lleva a aprender cosas nuevas todos
            los días, como las herramientas y habilidades técnicas que empleo en
            mis proyectos.
          </p>

          <p className="text-grey">
            Actualmente del lado del frontend utilizo herramientas como React,
            Tailwind Css, Bootstrap, Material UI, Redux, entre otras. Aun así,
            me encuentro aprendiendo nuevas tecnologías de backend como NodeJs,
            Express y MongoDb.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
