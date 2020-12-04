import React, { useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import Logger from "../Logger";
import PlayGuitar from "./PlayGuitar";

function GuitarBody(props) {
  const { setCurrentInstrument, setIsRecording } = useContext(AppContext);
  useEffect(() => {
    setCurrentInstrument("guitar");
    setIsRecording(false);
  }, [setCurrentInstrument, setIsRecording]);
  return (
    <>
      <Logger />
      <PlayGuitar />
    </>
  );
}

export default GuitarBody;
