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

export const transitions150 = "transition-all duration-150 ease-in-out";
export const transitions300 = "transition-all duration-300 ease-in-out";
export const aboutText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem expedita consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem expedita consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem expedita consequatur.";

export const studies = [
  // {
  //   date: "10-12-2023",
  //   name: "Curso de desarrollo web",
  //   description:
  //     "Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more.",
  //   url: "https://www.coderhouse.com/certificados/61ca2a9b4a86e5004b1676bd?lang=es",
  // },
  // {
  //   date: "10-12-2023",
  //   name: "Curso de Javascript",
  //   description:
  //     "Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more.",
  //   url: "https://www.coderhouse.com/certificados/626696851df1ed0028930821?lang=es",
  // },
  // {
  //   date: "10-12-2023",
  //   name: "Curso de ReactJs",
  //   description:
  //     "Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more.",
  //   url: "https://www.coderhouse.com/certificados/63091d9977cedc0088fed1cc?lang=es",
  // },
  {
    date: "01/2022 - 07/2022 ",
    name: "Curso de desarrollador frontend ReactJs - Coderhouse",
    description:
      "Curso de 6 meses de frontend con enfoque en realizar diseños responsive , se ven tecnologias como HTML, CSS, SASS, BOOTSTRAP , REACT y FIREBASE.",
    url: "https://www.coderhouse.com/certificados/630a3aafb366fb0019328e80?lang=es",
    certificate: reactCarrera,
  },
  {
    date: "03-2023 - 09-2023",
    name: "Programación backend - Coderhouse",
    description:
      "Curso de backend enfocado en el uso de javascript. Se aprende el uso de herramientas como NODE.JS, EXPRESS.JS, MONGODB y MONGOOSE. ",
    url: "https://www.coderhouse.com/certificados/65211bd89081bd805fcb422f?lang=es",
    certificate: backendCurso,
  },
  // {
  //   date: "10-12-2023",
  //   name: "Certificación fullstack - Coderhouse",
  //   description:
  //     "Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more.",
  //   url: "https://www.coderhouse.com/certificados/65211bd89081bd0448cb4248?lang=es",
  // },
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
