import React, { useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import Logger from "../Logger";
import PlayGuitar from "./PlayGuitar";

function GuitarBody(props) {
  const { setCurrentInstrument } = useContext(AppContext);
  useEffect(() => {
    setCurrentInstrument("guitar");
  }, [setCurrentInstrument]);
  return (
    <>
      <Logger />
      <PlayGuitar />
    </>
  );
}

export default GuitarBody;
