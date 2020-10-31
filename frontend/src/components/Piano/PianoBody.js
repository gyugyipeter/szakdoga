import React, { useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import Logger from "../Logger";
import PlayPiano from "./PlayPiano";
import "./PianoBody.css";

function PianoBody(props) {
  const { setCurrentInstrument } = useContext(AppContext);
  useEffect(() => {
    setCurrentInstrument("piano");
  });
  return (
    <>
      <Logger />
      <PlayPiano />
    </>
  );
}

export default PianoBody;
