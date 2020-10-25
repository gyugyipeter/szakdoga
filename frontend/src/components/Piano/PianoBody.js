import React from "react";
import Logger from "../Logger";
import PlayPiano from "./PlayPiano";
import "./PianoBody.css";

function PianoBody(props) {
  return (
    <>
      <Logger />
      <PlayPiano />
    </>
  );
}

export default PianoBody;
