import { transitions150, transitions300 } from "@/utils/constants.jsx";
import React, { useState } from "react";
import CertModal from "./CertModal";
import { LiaCertificateSolid } from "react-icons/lia";

const CertificationCard = ({ study }) => {
  const [modal, setModal] = useState(false);

  function handleModal() {
    setModal(!modal);
  }

  return (
    <>
      <div
        className={`flex flex-col md:flex-row w-full p-3 rounded md:gap-5 hover:bg-hoverPrimary ${transitions150}`}
      >
        <div className="w-full md:w-3/5 flex md:flex-col gap-2">
          <p className="text-lightGrey">{study.date}</p>

          <LiaCertificateSolid
            size={30}
            className={`fill-lightGrey hover:fill-lightGreen cursor-pointer ${transitions300} ms-auto md:ms-0`}
            onClick={handleModal}
          />
        </div>
        <div className="w-full">
          <div className="flex flex-col justify-center">
            <p
              className={`text-xl md:text-md font-bold text-white ${transitions300}`}
            >
              {study.name}
            </p>

            <p className="text-grey md:text-sm">{study.description}</p>
          </div>
        </div>
      </div>

      <CertModal
        certificate={study.certificate}
        url={study.url}
        handleModal={handleModal}
        open={modal}
      />
    </>
  );
};

export default CertificationCard;
