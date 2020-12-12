import React from "react";
import "./Loading.css";
import CircularProgress from "@material-ui/core/CircularProgress";

function Loading() {
  return (
    <div className="loadingContainer">
      <CircularProgress color="secondary" />
    </div>
  );
}

export default Loading;
