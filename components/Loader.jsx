import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
      <ClipLoader
        color={"#fff"}
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  );
};

export default Loader;
