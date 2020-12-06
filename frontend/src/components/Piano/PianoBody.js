import React, { useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import Logger from "../Logger";
import PlayPiano from "./PlayPiano";

function PianoBody(props) {
  const { setCurrentInstrument, setIsRecording } = useContext(AppContext);
  useEffect(() => {
    setCurrentInstrument("piano");
    setIsRecording(false);
  }, [setCurrentInstrument, setIsRecording]);
  return (
    <>
      <Logger />
      <PlayPiano />
    </>
  );
}

export default PianoBody;
