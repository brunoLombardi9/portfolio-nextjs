import { ImGithub, ImLinkedin } from "react-icons/im";
import {
  BiLogoSass,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoHtml5,
  BiLogoBootstrap,
} from "react-icons/bi";
import { BsGit } from "react-icons/bs";
import {
  SiMui,
  SiNextdotjs,
  SiRedux,
  SiFirebase,
  SiMongodb,
  SiMongoose,
  SiExpress,
} from "react-icons/si";
import reactCarrera from "../public/certificados/certificado-react-carrera.png";
import backendCurso from "../public/certificados/certificado-backend-curso.png";
import metaRN from "../public/certificados/Meta-ReactNative.png";

export const transitions150 = "transition-all duration-150 ease-in-out";
export const transitions300 = "transition-all duration-300 ease-in-out";
export const studies = [
  {
    date: "01/2024",
    name: "Meta React Native - Coursera",
    description: "Programa especializado en la creación de aplicaciones multiplataforma (Android/iOS). Se hace hincapié en el manejo de data y la interfaz de usuario.",
    url: "https://www.coursera.org/account/accomplishments/specialization/4JW7ZD9MXNU2",
    certificate: metaRN,
  },
  {
    date: "09-2023",
    name: "Programación backend - Coderhouse",
    description:
      "Curso de backend enfocado en el uso de javascript. Se aprende el uso de herramientas como NODE.JS, EXPRESS.JS, MONGODB y MONGOOSE. ",
    url: "https://www.coderhouse.com/certificados/65211bd89081bd805fcb422f?lang=es",
    certificate: backendCurso,
  },
  {
    date: "07/2022 ",
    name: "Desarrollador frontend ReactJs - Coderhouse",
    description:
      "Curso de 6 meses de frontend con enfoque en realizar diseños responsive , se ven tecnologias como HTML, CSS, SASS, BOOTSTRAP , REACT y FIREBASE.",
    url: "https://www.coderhouse.com/certificados/630a3aafb366fb0019328e80?lang=es",
    certificate: reactCarrera,
  },
];

export const socialMedia = [
  {
    name: "Github",
    url: "https://github.com/brunoLombardi9",
    icon: <ImGithub />,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/bruno-lombardi-1b81b723a",
    icon: <ImLinkedin />,
  },
];

export const skills = [
  { name: "HTML", icon: <BiLogoHtml5 />, color: "fill-[#fb4a0a]" },
  { name: "CSS", icon: <BiLogoCss3 />, color: "fill-[#2192c7]" },
  { name: "SASS", icon: <BiLogoSass />, color: "fill-[#bf4080]" },
  { name: "BOOTSTRAP", icon: <BiLogoBootstrap />, color: "fill-[#6d10f4]" },
  { name: "MATERIAL UI", icon: <SiMui />, color: "fill-[#007fff]" },
  { name: "TAILWINDCSS", icon: <BiLogoTailwindCss />, color: "fill-[#38bdf8]" },
  { name: "JAVASCRIPT", icon: <BiLogoJavascript />, color: "fill-[#efd81d]" },
  { name: "REACT", icon: <BiLogoReact />, color: "fill-[#5ed3f3]" },
  { name: "NEXT.JS", icon: <SiNextdotjs />, color: "fill-white" },
  { name: "REDUX", icon: <SiRedux />, color: "fill-[#7848bd]" },
  { name: "FIREBASE", icon: <SiFirebase />, color: "fill-[#ffcc31]" },
  { name: "MONGODB", icon: <SiMongodb />, color: "fill-[#00e661]" },
  { name: "MONGOOSE", icon: <SiMongoose />, color: "fill-[#880000]" },
  { name: "NODE.JS", icon: <BiLogoNodejs />, color: "fill-[#86cf2f]" },
  { name: "EXPRESS.JS", icon: <SiExpress />, color: "fill-[#82c108]" },
  { name: "GIT/GITHUB", icon: <BsGit />, color: "fill-[#f15639]" },
];
