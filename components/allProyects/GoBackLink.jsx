import { transitions300 } from "@/utils/constants";
import Link from "next/link";
import React, { useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

const GoBackLink = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="w-full ">
      <Link
        href="/"
        className={`${
          hover ? "text-lightGreen" : "text-white"
        } flex gap-2 items-center content-fit font-bold w-fit ${transitions300}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <FaLongArrowAltLeft
          size={30}
          className={`${
            hover ? "fill-lightGreen -translate-x-2" : "fill-white"
          } ${transitions300}`}
        />
        Bruno Lombardi
      </Link>
    </div>
  );
};

export default GoBackLink;
