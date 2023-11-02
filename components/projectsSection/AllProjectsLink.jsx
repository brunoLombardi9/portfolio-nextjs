import { transitions300 } from "@/utils/constants";
import Link from "next/link";
import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const AllProjectsLink = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="w-full">
      <Link
        href="/projects"
        className={`${
          hover ? "text-lightGreen" : "text-white"
        } flex gap-2 items-center w-fit font-bold ${transitions300}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Ver Todos los proyectos
        <FaLongArrowAltRight
          size={30}
          className={`${
            hover ? "fill-lightGreen translate-x-2" : "fill-white"
          } ${transitions300}`}
        />
      </Link>
    </div>
  );
};

export default AllProjectsLink;
