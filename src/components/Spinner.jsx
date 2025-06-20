import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

import React from 'react'

const Spinner = ({loading}) => {
  return (
    <>
    <ClipLoader
          color="#4338ca"
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
    />
    </>
  )
}

export default Spinner
