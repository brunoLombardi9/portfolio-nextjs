import { transitions150, transitions300 } from "@/utils/constants";
import React from "react";
import { MdClear } from "react-icons/md";
import styles from "./CertModal.module.css";
import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";

const CertModal = ({ certificate, url, handleModal, open }) => {
  return (
    <>
      <div
        className={`${
          open ? "fixed" : "hidden"
        } h-screen w-screen top-0 right-0 flex flex-col justify-center items-center bg-opacity-60 backdrop-blur-sm z-40`}
      />

      <div
        className={`${transitions300} ${
          open ? "scale-1" : "scale-0"
        } fixed top-0 right-0 h-screen w-screen flex justify-center items-center z-40`}
      >
        <div className={`p-4 pt-2 bg-hoverPrimary rounded absolute`}>
          <MdClear
            size={40}
            onClick={handleModal}
            className={`ms-auto cursor-pointer my-auto mb-2 ${transitions300} fill-white hover:fill-lightGreen hover:rotate-180`}
          />
          <Image
            src={certificate.src}
            alt="study certificate"
            quality={100}
            height={700}
            width={1000}
            className={styles.certImage}
          />

          <div className="w-full flex justify-center pt-4">
            <a
              href={url}
              target="_blank"
              className={`content-fit inline-block py-1 px-4 rounded-full bg-white hover:bg-lightGreen ${transitions150} `}
            >
              <p
                className={`my-auto flex justify-center items-center gap-2 text-black`}
              >
                Ver enlace
                <BiLinkExternal size={20} className={`fill-black`} />
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CertModal;
