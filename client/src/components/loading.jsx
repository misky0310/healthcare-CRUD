import React from 'react'


import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "auto auto",
  borderColor: "green",
};

const LoadingSpinner = () => {
    let [color, setColor] = useState("#ffffff");
    let [loading, setLoading] = useState(true);

    return (
        <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    )
}

export default LoadingSpinner
